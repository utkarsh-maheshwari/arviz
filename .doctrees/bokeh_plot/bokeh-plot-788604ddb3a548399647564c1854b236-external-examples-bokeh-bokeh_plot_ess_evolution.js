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
    
      
      
    
      var element = document.getElementById("1314ecb6-9a5e-449a-87ca-d5ca92e05b6d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1314ecb6-9a5e-449a-87ca-d5ca92e05b6d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5623fe01-d625-45d7-8079-0c08d85c7d23":{"roots":{"references":[{"attributes":{"callback":null},"id":"68189","type":"HoverTool"},{"attributes":{},"id":"68166","type":"DataRange1d"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68221","type":"Span"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"68219"},{"id":"68214"}]},"id":"68224","type":"LegendItem"},{"attributes":{"data_source":{"id":"68216"},"glyph":{"id":"68217"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68218"},"selection_glyph":null,"view":{"id":"68220"}},"id":"68219","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68206"}},"id":"68210","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68213","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68239"},"selection_policy":{"id":"68238"}},"id":"68216","type":"ColumnDataSource"},{"attributes":{"above":[{"id":"68222"}],"below":[{"id":"68174"}],"center":[{"id":"68177"},{"id":"68181"}],"left":[{"id":"68178"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68204"},{"id":"68209"},{"id":"68214"},{"id":"68219"},{"id":"68221"}],"title":{"id":"68225"},"toolbar":{"id":"68192"},"toolbar_location":null,"x_range":{"id":"68166"},"x_scale":{"id":"68170"},"y_range":{"id":"68168"},"y_scale":{"id":"68172"}},"id":"68165","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68183","type":"PanTool"},{"attributes":{"data_source":{"id":"68211"},"glyph":{"id":"68212"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68213"},"selection_glyph":null,"view":{"id":"68215"}},"id":"68214","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68217","type":"Circle"},{"attributes":{},"id":"68231","type":"BasicTickFormatter"},{"attributes":{},"id":"68233","type":"Selection"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68212","type":"Line"},{"attributes":{},"id":"68239","type":"Selection"},{"attributes":{"source":{"id":"68216"}},"id":"68220","type":"CDSView"},{"attributes":{},"id":"68235","type":"Selection"},{"attributes":{"toolbar":{"id":"68244"},"toolbar_location":"above"},"id":"68245","type":"ToolbarBox"},{"attributes":{},"id":"68179","type":"BasicTicker"},{"attributes":{},"id":"68238","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68233"},"selection_policy":{"id":"68232"}},"id":"68201","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"68245"},{"id":"68243"}]},"id":"68246","type":"Column"},{"attributes":{},"id":"68237","type":"Selection"},{"attributes":{"data_source":{"id":"68206"},"glyph":{"id":"68207"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68208"},"selection_glyph":null,"view":{"id":"68210"}},"id":"68209","type":"GlyphRenderer"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"68204"},{"id":"68209"}]},"id":"68223","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68203","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68218","type":"Circle"},{"attributes":{},"id":"68236","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68201"},"glyph":{"id":"68202"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68203"},"selection_glyph":null,"view":{"id":"68205"}},"id":"68204","type":"GlyphRenderer"},{"attributes":{},"id":"68185","type":"WheelZoomTool"},{"attributes":{},"id":"68187","type":"UndoTool"},{"attributes":{"overlay":{"id":"68190"}},"id":"68184","type":"BoxZoomTool"},{"attributes":{"axis_label":"ESS","formatter":{"id":"68231"},"ticker":{"id":"68179"}},"id":"68178","type":"LinearAxis"},{"attributes":{},"id":"68232","type":"UnionRenderers"},{"attributes":{"source":{"id":"68211"}},"id":"68215","type":"CDSView"},{"attributes":{"toolbars":[{"id":"68192"}],"tools":[{"id":"68182"},{"id":"68183"},{"id":"68184"},{"id":"68185"},{"id":"68186"},{"id":"68187"},{"id":"68188"},{"id":"68189"}]},"id":"68244","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"68191"}},"id":"68186","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68235"},"selection_policy":{"id":"68234"}},"id":"68206","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68190","type":"BoxAnnotation"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68207","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68182"},{"id":"68183"},{"id":"68184"},{"id":"68185"},{"id":"68186"},{"id":"68187"},{"id":"68188"},{"id":"68189"}]},"id":"68192","type":"Toolbar"},{"attributes":{"source":{"id":"68201"}},"id":"68205","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68191","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68208","type":"Line"},{"attributes":{},"id":"68168","type":"DataRange1d"},{"attributes":{"axis":{"id":"68178"},"dimension":1,"ticker":null},"id":"68181","type":"Grid"},{"attributes":{},"id":"68175","type":"BasicTicker"},{"attributes":{"axis":{"id":"68174"},"ticker":null},"id":"68177","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68202","type":"Circle"},{"attributes":{},"id":"68170","type":"LinearScale"},{"attributes":{"children":[[{"id":"68165"},0,0]]},"id":"68243","type":"GridBox"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"68229"},"ticker":{"id":"68175"}},"id":"68174","type":"LinearAxis"},{"attributes":{},"id":"68229","type":"BasicTickFormatter"},{"attributes":{"text":"b"},"id":"68225","type":"Title"},{"attributes":{"click_policy":"hide","items":[{"id":"68223"},{"id":"68224"}],"location":"center_right","orientation":"horizontal"},"id":"68222","type":"Legend"},{"attributes":{},"id":"68172","type":"LinearScale"},{"attributes":{},"id":"68188","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68237"},"selection_policy":{"id":"68236"}},"id":"68211","type":"ColumnDataSource"},{"attributes":{},"id":"68234","type":"UnionRenderers"},{"attributes":{},"id":"68182","type":"ResetTool"}],"root_ids":["68246"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"5623fe01-d625-45d7-8079-0c08d85c7d23","root_ids":["68246"],"roots":{"68246":"1314ecb6-9a5e-449a-87ca-d5ca92e05b6d"}}];
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