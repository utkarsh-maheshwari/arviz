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
    
      
      
    
      var element = document.getElementById("b905a9ca-36e8-466d-b747-456dce32f7ec");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b905a9ca-36e8-466d-b747-456dce32f7ec' but no matching script tag was found.")
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
                    
                  var docs_json = '{"da0eb46b-2783-4fd1-9217-5a905e216b36":{"roots":{"references":[{"attributes":{"overlay":{"id":"67951"}},"id":"67946","type":"LassoSelectTool"},{"attributes":{},"id":"67969","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67950","type":"BoxAnnotation"},{"attributes":{"toolbar":{"id":"67978"},"toolbar_location":"above"},"id":"67979","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"67969"},"ticker":{"id":"67935"}},"id":"67934","type":"LinearAxis"},{"attributes":{"overlay":{"id":"67950"}},"id":"67944","type":"BoxZoomTool"},{"attributes":{},"id":"67945","type":"WheelZoomTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"67971"},"ticker":{"id":"67939"}},"id":"67938","type":"LinearAxis"},{"attributes":{"axis":{"id":"67934"},"ticker":null},"id":"67937","type":"Grid"},{"attributes":{},"id":"67928","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"67952"}],"tools":[{"id":"67942"},{"id":"67943"},{"id":"67944"},{"id":"67945"},{"id":"67946"},{"id":"67947"},{"id":"67948"},{"id":"67949"}]},"id":"67978","type":"ProxyToolbar"},{"attributes":{"source":{"id":"67962"}},"id":"67964","type":"CDSView"},{"attributes":{"children":[{"id":"67979"},{"id":"67977"}]},"id":"67980","type":"Column"},{"attributes":{},"id":"67932","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67942"},{"id":"67943"},{"id":"67944"},{"id":"67945"},{"id":"67946"},{"id":"67947"},{"id":"67948"},{"id":"67949"}]},"id":"67952","type":"Toolbar"},{"attributes":{"callback":null},"id":"67949","type":"HoverTool"},{"attributes":{},"id":"67972","type":"UnionRenderers"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"67965","type":"Title"},{"attributes":{},"id":"67947","type":"UndoTool"},{"attributes":{},"id":"67971","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"67934"}],"center":[{"id":"67937"},{"id":"67941"}],"left":[{"id":"67938"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"67963"}],"title":{"id":"67965"},"toolbar":{"id":"67952"},"toolbar_location":null,"x_range":{"id":"67926"},"x_scale":{"id":"67930"},"y_range":{"id":"67928"},"y_scale":{"id":"67932"}},"id":"67925","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"67925"},0,0]]},"id":"67977","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67951","type":"PolyAnnotation"},{"attributes":{},"id":"67948","type":"SaveTool"},{"attributes":{},"id":"67943","type":"PanTool"},{"attributes":{},"id":"67935","type":"BasicTicker"},{"attributes":{},"id":"67973","type":"Selection"},{"attributes":{},"id":"67926","type":"DataRange1d"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"67973"},"selection_policy":{"id":"67972"}},"id":"67962","type":"ColumnDataSource"},{"attributes":{},"id":"67939","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"67961","type":"Cross"},{"attributes":{},"id":"67930","type":"LinearScale"},{"attributes":{"data_source":{"id":"67962"},"glyph":{"id":"67961"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67964"}},"id":"67963","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"67938"},"dimension":1,"ticker":null},"id":"67941","type":"Grid"},{"attributes":{},"id":"67942","type":"ResetTool"}],"root_ids":["67980"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"da0eb46b-2783-4fd1-9217-5a905e216b36","root_ids":["67980"],"roots":{"67980":"b905a9ca-36e8-466d-b747-456dce32f7ec"}}];
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