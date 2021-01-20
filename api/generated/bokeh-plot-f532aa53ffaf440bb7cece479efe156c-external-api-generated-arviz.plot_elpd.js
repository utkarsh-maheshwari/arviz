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
    
      
      
    
      var element = document.getElementById("5697230d-661e-434e-92a8-8238ab1a5243");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5697230d-661e-434e-92a8-8238ab1a5243' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7e68e649-0035-4d65-bb3a-1fcd3c8360b1":{"roots":{"references":[{"attributes":{},"id":"64984","type":"BasicTicker"},{"attributes":{},"id":"65016","type":"BasicTickFormatter"},{"attributes":{},"id":"65014","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"65007"},"glyph":{"id":"65006"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"65009"}},"id":"65008","type":"GlyphRenderer"},{"attributes":{"text":"centered model - non centered model"},"id":"65010","type":"Title"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"64996","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"64995"}},"id":"64989","type":"BoxZoomTool"},{"attributes":{},"id":"64977","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"65006","type":"Cross"},{"attributes":{},"id":"64980","type":"BasicTicker"},{"attributes":{},"id":"64988","type":"PanTool"},{"attributes":{},"id":"64973","type":"DataRange1d"},{"attributes":{},"id":"64975","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"64995","type":"BoxAnnotation"},{"attributes":{},"id":"64987","type":"ResetTool"},{"attributes":{"source":{"id":"65007"}},"id":"65009","type":"CDSView"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"65018"},"selection_policy":{"id":"65017"}},"id":"65007","type":"ColumnDataSource"},{"attributes":{},"id":"64992","type":"UndoTool"},{"attributes":{"axis":{"id":"64979"},"ticker":null},"id":"64982","type":"Grid"},{"attributes":{},"id":"64971","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"65023"},"toolbar_location":"above"},"id":"65024","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"64994","type":"HoverTool"},{"attributes":{"formatter":{"id":"65014"},"ticker":{"id":"64980"}},"id":"64979","type":"LinearAxis"},{"attributes":{"overlay":{"id":"64996"}},"id":"64991","type":"LassoSelectTool"},{"attributes":{"children":[{"id":"65024"},{"id":"65022"}]},"id":"65025","type":"Column"},{"attributes":{},"id":"65018","type":"Selection"},{"attributes":{},"id":"64993","type":"SaveTool"},{"attributes":{},"id":"65017","type":"UnionRenderers"},{"attributes":{"axis":{"id":"64983"},"dimension":1,"ticker":null},"id":"64986","type":"Grid"},{"attributes":{"children":[[{"id":"64970"},0,0]]},"id":"65022","type":"GridBox"},{"attributes":{},"id":"64990","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"64979"}],"center":[{"id":"64982"},{"id":"64986"}],"left":[{"id":"64983"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"65008"}],"title":{"id":"65010"},"toolbar":{"id":"64997"},"toolbar_location":null,"x_range":{"id":"64971"},"x_scale":{"id":"64975"},"y_range":{"id":"64973"},"y_scale":{"id":"64977"}},"id":"64970","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"64987"},{"id":"64988"},{"id":"64989"},{"id":"64990"},{"id":"64991"},{"id":"64992"},{"id":"64993"},{"id":"64994"}]},"id":"64997","type":"Toolbar"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"65016"},"ticker":{"id":"64984"}},"id":"64983","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"64997"}],"tools":[{"id":"64987"},{"id":"64988"},{"id":"64989"},{"id":"64990"},{"id":"64991"},{"id":"64992"},{"id":"64993"},{"id":"64994"}]},"id":"65023","type":"ProxyToolbar"}],"root_ids":["65025"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"7e68e649-0035-4d65-bb3a-1fcd3c8360b1","root_ids":["65025"],"roots":{"65025":"5697230d-661e-434e-92a8-8238ab1a5243"}}];
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