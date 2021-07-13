"""Plot linear regression figure."""
import warnings
from numbers import Integral

import xarray as xr
import numpy as np
from xarray.core.dataarray import DataArray

from ..sel_utils import xarray_var_iter
from ..rcparams import rcParams
from .plot_utils import default_grid, filter_plotters_list, get_plotting_function


def plot_lm(
    y,
    idata=None,
    x=None,
    y_model=None,
    y_ppc=None,
    num_pp_samples=50,
    kind_pp="samples",
    kind_model="lines",
    xjitter=False,
    plot_dim=None,
    backend=None,
    y_kwargs=None,
    y_ppc_plot_kwargs=None,
    y_ppc_fill_kwargs=None,
    y_model_plot_kwargs=None,
    y_model_fill_kwargs=None,
    backend_kwargs=None,
    show=None,
    figsize=None,
    textsize=None,
    axes=None,
    legend=True,
    grid=True,
):
    """Plot linear regression figure to visualize uncertaininty in mean and ppc values.

    Parameters
    ----------
    y : str or DataArray or ndarray
        If str, variable name from observed_data
    idata : az.InferenceData object, Optional
        Optional only if y is Sequence
    x : str or tuple of strings or DataArray or array-like, Optional
        If str or tuple, variable name from constant_data
        If ndarray, could be 1D, or 2D for multiple plots
        If none, coords name of y (y should be DataArray).
    y_model : str or Sequence, Optional
        If str, varibale name from posterior.
        Its dimensions should be same as y plus added chains and draws.
    y_ppc : str, Optional
        If str, variable name from posterior_predictive.
        Its dimensions should be same as y plus added chains and draws.
    num_pp_samples : int, Optional, Default 50
    kind_pp : ["samples", "hdi"], Optional, Default "samples"
    kind_model : ["lines", "hdi"], Optional, Default "lines"
    plot_dim : str, Optional
        Necessary if y is multidimensional.
    backend : str, Optional
        Select plotting backend {"matplotlib","bokeh"}. Default "matplotlib".
    y_kwargs : dict, optional
        Passed to plot() in matplotlib and circle() in bokeh
    y_ppc_plot_kwargs : dict, optional
        Passed to plot() in matplotlib and circle() in bokeh
    y_ppc_fill_kwargs : dict, optional
        Passed to az.plot_hdi()
    y_model_plot_kwargs : dict, optional
        Passed to plot() in matplotlib and line() in bokeh
    y_model_fill_kwargs : dict, optional
        Passed to az.plot_hdi()
    backend_kwargs : dict, optional
    figsize : tuple, optional
        Figure size. If None it will be defined automatically.
    textsize : float, optional
        Text size scaling factor for labels, titles and lines. If None it will be
        autoscaled based on figsize.
    axes : numpy array-like of matplotlib axes or bokeh figures, optional
        A 2D array of locations into which to plot the densities. If not supplied, Arviz will create
        its own array of plot areas (and return it).
    show: bool, optional
        Call backend show function.
    legend : bool, optional
        Add legend to figure. By default True.
    grid : bool, optional
        Add grid to figure. By default True.


    Returns
    -------
    axes
    """
    if kind_pp not in ("samples", "hdi"):
        raise ValueError("kind_ppc should be either samples or hdi")

    if kind_model not in ("lines", "hdi"):
        raise ValueError("kind_model should be either lines or hdi")

    if y_ppc is None and isinstance(y, str):
        y_ppc = y

    if isinstance(y, str):
        y = idata.observed_data[y]
    elif not isinstance(y, DataArray):
        y = xr.DataArray(y)

    if len(y.dims) > 1 and plot_dim is None:
        raise ValueError("Argument plot_dim is needed in case of multidimensional data")

    x_var_names = None
    if isinstance(x, str):
        x = idata.constant_data[x]
        x_skip_dims = x.dims
    elif isinstance(x, tuple):
        x_var_names = x
        x = idata.constant_data
        x_skip_dims = x.dims
    elif x is None:
        if plot_dim is None:
            x = y.coords[y.dims[0]]
        else:
            x = y.coords[plot_dim]
        x_skip_dims = x.dims
    elif isinstance(x, DataArray):
        x_skip_dims = x.dims
    else:
        x = xr.DataArray(x)
        x_skip_dims = [x.dims[-1]]

    if isinstance(y_model, str):
        if "posterior" not in idata.groups():
            warnings.warn("Posterior not found in idata", UserWarning)
            y_model = None
        elif hasattr(idata.posterior, y_model):
            y_model = idata.posterior[y_model]
        else:
            warnings.warn("y_model not found in posterior", UserWarning)
            y_model = None

    if isinstance(y_ppc, str):
        if "posterior_predictive" not in idata.groups():
            warnings.warn("posterior_predictive not found in idata", UserWarning)
            y_ppc=None
        elif hasattr(idata.posterior_predictive, y_ppc):
            y_ppc = idata.posterior_predictive[y_ppc]
        else:
            warnings.warn("y_ppc not found in posterior_predictive", UserWarning)
            y_ppc = None

    pp_sample_ix = None
    if (y_ppc is not None and kind_pp == "samples") or (
        y_model is not None and kind_model == "lines"
    ):
        if y_ppc is not None:
            total_pp_samples = y_ppc.sizes["chain"] * y_ppc.sizes["draw"]
        else:
            total_pp_samples = y_model.sizes["chain"] * y_model.sizes["draw"]

        if (
            not isinstance(num_pp_samples, Integral)
            or num_pp_samples < 1
            or num_pp_samples > total_pp_samples
        ):
            raise TypeError(
                "`num_pp_samples` must be an integer between 1 and "
                + "{limit}.".format(limit=total_pp_samples)
            )

        pp_sample_ix = np.random.choice(total_pp_samples, size=num_pp_samples, replace=False)

    if plot_dim is None:
        skip_dims = list(y.dims)
    elif isinstance(plot_dim, str):
        skip_dims = [plot_dim]
    elif isinstance(plot_dim, tuple):
        skip_dims = list(plot_dim)

    x = filter_plotters_list(
        list(
            xarray_var_iter(
                x,
                var_names=x_var_names,
                skip_dims=set(x_skip_dims),
                combined=True,
            )
        ),
        "plot_lm",
    )

    y = filter_plotters_list(
        list(
            xarray_var_iter(
                y,
                skip_dims=set(skip_dims),
                combined=True,
            )
        ),
        "plot_lm",
    )

    # If there is multiple x and multidimensional y, we need total of len(x)*len(y) graphs
    len_y = len(y)
    len_x = len(x)
    length_plotters = len_x * len_y
    y = np.tile(y, (len_x, 1))
    x = np.tile(x, (len_y, 1))

    if y_ppc is not None:
        if kind_pp == "samples":
            y_ppc = y_ppc.stack(sample=("chain", "draw"))[..., pp_sample_ix]
            skip_dims += ["sample"]

        y_ppc = [
            tup
            for _, tup in zip(
                range(len_y),
                xarray_var_iter(
                    y_ppc,
                    skip_dims=set(skip_dims),
                    combined=True,
                ),
            )
        ]

        y_ppc = np.tile(y_ppc, (len_x, 1))

    if y_model is not None:
        if kind_model == "lines":
            y_model = y_model.stack(sample=("chain", "draw"))[..., pp_sample_ix]

        y_model = [
            tup
            for _, tup in zip(
                range(len_y),
                xarray_var_iter(
                    y_model,
                    skip_dims=set(y_model.dims),
                    combined=True,
                ),
            )
        ]
        y_model = np.tile(y_model, (len_x, 1))

    length_plotters = len_x * len_y
    rows, cols = default_grid(length_plotters, grid=None)

    lmplot_kwargs = dict(
        x=x,
        y=y,
        y_model=y_model,
        y_ppc=y_ppc,
        num_pp_samples=num_pp_samples,
        kind_pp=kind_pp,
        kind_model=kind_model,
        length_plotters=length_plotters,
        xjitter=xjitter,
        rows=rows,
        cols=cols,
        y_kwargs=y_kwargs,
        y_ppc_plot_kwargs=y_ppc_plot_kwargs,
        y_ppc_fill_kwargs=y_ppc_fill_kwargs,
        y_model_plot_kwargs=y_model_plot_kwargs,
        y_model_fill_kwargs=y_model_fill_kwargs,
        backend_kwargs=backend_kwargs,
        show=show,
        figsize=figsize,
        textsize=textsize,
        axes=axes,
        legend=legend,
        grid=grid,
    )

    if backend is None:
        backend = rcParams["plot.backend"]
    backend = backend.lower()

    plot = get_plotting_function("plot_lm", "lmplot", backend)
    ax = plot(**lmplot_kwargs)
    return ax
