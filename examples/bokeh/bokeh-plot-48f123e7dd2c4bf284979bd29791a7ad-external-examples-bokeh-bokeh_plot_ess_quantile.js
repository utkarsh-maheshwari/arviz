(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("19390924-4970-41af-95db-422196242e00");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '19390924-4970-41af-95db-422196242e00' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"ff189e60-cc2c-4e1b-b597-963b46f022b6":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68441","type":"BoxAnnotation"},{"attributes":{},"id":"68438","type":"UndoTool"},{"attributes":{"data_source":{"id":"68452"},"glyph":{"id":"68453"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68454"},"selection_glyph":null,"view":{"id":"68456"}},"id":"68455","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"68442"}},"id":"68437","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68442","type":"PolyAnnotation"},{"attributes":{},"id":"68439","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68453","type":"Circle"},{"attributes":{"toolbars":[{"id":"68443"}],"tools":[{"id":"68433"},{"id":"68434"},{"id":"68435"},{"id":"68436"},{"id":"68437"},{"id":"68438"},{"id":"68439"},{"id":"68440"}]},"id":"68471","type":"ProxyToolbar"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"68464"},"ticker":{"id":"68430"}},"id":"68429","type":"LinearAxis"},{"attributes":{"text":"sigma"},"id":"68458","type":"Title"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68462"},"ticker":{"id":"68426"}},"id":"68425","type":"LinearAxis"},{"attributes":{},"id":"68433","type":"ResetTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68457","type":"Span"},{"attributes":{},"id":"68430","type":"BasicTicker"},{"attributes":{},"id":"68464","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68466"},"selection_policy":{"id":"68465"}},"id":"68452","type":"ColumnDataSource"},{"attributes":{},"id":"68465","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"68471"},"toolbar_location":"above"},"id":"68472","type":"ToolbarBox"},{"attributes":{"source":{"id":"68452"}},"id":"68456","type":"CDSView"},{"attributes":{},"id":"68419","type":"DataRange1d"},{"attributes":{"overlay":{"id":"68441"}},"id":"68435","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"68440","type":"HoverTool"},{"attributes":{},"id":"68466","type":"Selection"},{"attributes":{},"id":"68421","type":"LinearScale"},{"attributes":{"below":[{"id":"68425"}],"center":[{"id":"68428"},{"id":"68432"}],"left":[{"id":"68429"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68455"},{"id":"68457"}],"title":{"id":"68458"},"toolbar":{"id":"68443"},"toolbar_location":null,"x_range":{"id":"68417"},"x_scale":{"id":"68421"},"y_range":{"id":"68419"},"y_scale":{"id":"68423"}},"id":"68416","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68462","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68454","type":"Circle"},{"attributes":{"children":[[{"id":"68416"},0,0]]},"id":"68470","type":"GridBox"},{"attributes":{},"id":"68423","type":"LinearScale"},{"attributes":{},"id":"68426","type":"BasicTicker"},{"attributes":{"axis":{"id":"68425"},"ticker":null},"id":"68428","type":"Grid"},{"attributes":{"axis":{"id":"68429"},"dimension":1,"ticker":null},"id":"68432","type":"Grid"},{"attributes":{"children":[{"id":"68472"},{"id":"68470"}]},"id":"68473","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68433"},{"id":"68434"},{"id":"68435"},{"id":"68436"},{"id":"68437"},{"id":"68438"},{"id":"68439"},{"id":"68440"}]},"id":"68443","type":"Toolbar"},{"attributes":{},"id":"68436","type":"WheelZoomTool"},{"attributes":{},"id":"68434","type":"PanTool"},{"attributes":{},"id":"68417","type":"DataRange1d"}],"root_ids":["68473"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"ff189e60-cc2c-4e1b-b597-963b46f022b6","root_ids":["68473"],"roots":{"68473":"19390924-4970-41af-95db-422196242e00"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();