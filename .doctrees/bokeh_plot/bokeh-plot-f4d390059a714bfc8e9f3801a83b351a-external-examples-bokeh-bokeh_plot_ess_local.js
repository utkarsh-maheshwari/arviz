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
    
      
      
    
      var element = document.getElementById("639054f7-b2f6-4868-b777-fbadf15a8c37");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '639054f7-b2f6-4868-b777-fbadf15a8c37' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3da68985-cb60-4cb5-af93-ebd7c4860175":{"roots":{"references":[{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"68360"},"ticker":{"id":"68321"}},"id":"68320","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"68369"},"toolbar_location":"above"},"id":"68370","type":"ToolbarBox"},{"attributes":{"below":[{"id":"68316"}],"center":[{"id":"68319"},{"id":"68323"}],"left":[{"id":"68320"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68346"},{"id":"68350"},{"id":"68352"},{"id":"68353"}],"title":{"id":"68354"},"toolbar":{"id":"68334"},"toolbar_location":null,"x_range":{"id":"68308"},"x_scale":{"id":"68312"},"y_range":{"id":"68310"},"y_scale":{"id":"68314"}},"id":"68307","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68360","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"68352","type":"Span"},{"attributes":{},"id":"68312","type":"LinearScale"},{"attributes":{},"id":"68358","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"68332"}},"id":"68326","type":"BoxZoomTool"},{"attributes":{},"id":"68330","type":"SaveTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68353","type":"Span"},{"attributes":{},"id":"68317","type":"BasicTicker"},{"attributes":{},"id":"68363","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"68333"}},"id":"68328","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68344","type":"Circle"},{"attributes":{},"id":"68361","type":"UnionRenderers"},{"attributes":{},"id":"68314","type":"LinearScale"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"68364"},"selection_policy":{"id":"68363"}},"id":"68349","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"68348","type":"Dash"},{"attributes":{"axis":{"id":"68320"},"dimension":1,"ticker":null},"id":"68323","type":"Grid"},{"attributes":{"axis":{"id":"68316"},"ticker":null},"id":"68319","type":"Grid"},{"attributes":{"data_source":{"id":"68349"},"glyph":{"id":"68348"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"68351"}},"id":"68350","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"68334"}],"tools":[{"id":"68324"},{"id":"68325"},{"id":"68326"},{"id":"68327"},{"id":"68328"},{"id":"68329"},{"id":"68330"},{"id":"68331"}]},"id":"68369","type":"ProxyToolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68324"},{"id":"68325"},{"id":"68326"},{"id":"68327"},{"id":"68328"},{"id":"68329"},{"id":"68330"},{"id":"68331"}]},"id":"68334","type":"Toolbar"},{"attributes":{},"id":"68310","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68358"},"ticker":{"id":"68317"}},"id":"68316","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68333","type":"PolyAnnotation"},{"attributes":{},"id":"68362","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68362"},"selection_policy":{"id":"68361"}},"id":"68343","type":"ColumnDataSource"},{"attributes":{},"id":"68329","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68332","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"68307"},0,0]]},"id":"68368","type":"GridBox"},{"attributes":{},"id":"68308","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68345","type":"Circle"},{"attributes":{"callback":null},"id":"68331","type":"HoverTool"},{"attributes":{},"id":"68325","type":"PanTool"},{"attributes":{"source":{"id":"68349"}},"id":"68351","type":"CDSView"},{"attributes":{},"id":"68364","type":"Selection"},{"attributes":{},"id":"68321","type":"BasicTicker"},{"attributes":{"data_source":{"id":"68343"},"glyph":{"id":"68344"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68345"},"selection_glyph":null,"view":{"id":"68347"}},"id":"68346","type":"GlyphRenderer"},{"attributes":{},"id":"68327","type":"WheelZoomTool"},{"attributes":{},"id":"68324","type":"ResetTool"},{"attributes":{"children":[{"id":"68370"},{"id":"68368"}]},"id":"68371","type":"Column"},{"attributes":{"source":{"id":"68343"}},"id":"68347","type":"CDSView"},{"attributes":{"text":"mu"},"id":"68354","type":"Title"}],"root_ids":["68371"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3da68985-cb60-4cb5-af93-ebd7c4860175","root_ids":["68371"],"roots":{"68371":"639054f7-b2f6-4868-b777-fbadf15a8c37"}}];
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