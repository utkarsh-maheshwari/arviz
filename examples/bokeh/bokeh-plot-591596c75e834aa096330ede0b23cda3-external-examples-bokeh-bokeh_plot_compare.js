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
    
      
      
    
      var element = document.getElementById("8ceda65a-1894-4e6e-bb49-543ab98d1060");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8ceda65a-1894-4e6e-bb49-543ab98d1060' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ed4f57eb-1d53-4eb5-94c5-54aa578b7010":{"roots":{"references":[{"attributes":{"source":{"id":"65797"}},"id":"65801","type":"CDSView"},{"attributes":{},"id":"65806","type":"BasicTickFormatter"},{"attributes":{},"id":"65807","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65788","type":"Circle"},{"attributes":{"data_source":{"id":"65787"},"glyph":{"id":"65788"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65789"},"selection_glyph":null,"view":{"id":"65791"}},"id":"65790","type":"GlyphRenderer"},{"attributes":{"source":{"id":"65792"}},"id":"65796","type":"CDSView"},{"attributes":{"axis_label":"Log","formatter":{"id":"65806"},"ticker":{"id":"65749"}},"id":"65748","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"65756"},{"id":"65757"},{"id":"65758"},{"id":"65759"},{"id":"65760"},{"id":"65761"},{"id":"65762"},{"id":"65763"}]},"id":"65766","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"65817"},"selection_policy":{"id":"65816"}},"id":"65797","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"65764"}},"id":"65758","type":"BoxZoomTool"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"65811"},"selection_policy":{"id":"65810"}},"id":"65782","type":"ColumnDataSource"},{"attributes":{},"id":"65762","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65784","type":"MultiLine"},{"attributes":{"toolbar":{"id":"65822"},"toolbar_location":"above"},"id":"65823","type":"ToolbarBox"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65794","type":"MultiLine"},{"attributes":{"end":0.5,"start":-1.5},"id":"65742","type":"DataRange1d"},{"attributes":{},"id":"65809","type":"Selection"},{"attributes":{"children":[{"id":"65823"},{"id":"65821"}]},"id":"65824","type":"Column"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65793","type":"MultiLine"},{"attributes":{},"id":"65749","type":"BasicTicker"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"65775","type":"FixedTicker"},{"attributes":{},"id":"65815","type":"Selection"},{"attributes":{"data_source":{"id":"65797"},"glyph":{"id":"65798"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65799"},"selection_glyph":null,"view":{"id":"65801"}},"id":"65800","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65779","type":"Triangle"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"65809"},"selection_policy":{"id":"65808"}},"id":"65777","type":"ColumnDataSource"},{"attributes":{"source":{"id":"65777"}},"id":"65781","type":"CDSView"},{"attributes":{"below":[{"id":"65748"}],"center":[{"id":"65751"},{"id":"65755"}],"left":[{"id":"65752"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"65780"},{"id":"65785"},{"id":"65790"},{"id":"65795"},{"id":"65800"},{"id":"65802"}],"title":{"id":"65803"},"toolbar":{"id":"65766"},"toolbar_location":null,"x_range":{"id":"65740"},"x_scale":{"id":"65744"},"y_range":{"id":"65742"},"y_scale":{"id":"65746"}},"id":"65739","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"65740","type":"DataRange1d"},{"attributes":{},"id":"65813","type":"Selection"},{"attributes":{"formatter":{"id":"65807"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"65775"}},"id":"65752","type":"LinearAxis"},{"attributes":{},"id":"65814","type":"UnionRenderers"},{"attributes":{"axis":{"id":"65752"},"dimension":1,"ticker":null},"id":"65755","type":"Grid"},{"attributes":{},"id":"65757","type":"PanTool"},{"attributes":{},"id":"65810","type":"UnionRenderers"},{"attributes":{},"id":"65808","type":"UnionRenderers"},{"attributes":{"axis":{"id":"65748"},"ticker":null},"id":"65751","type":"Grid"},{"attributes":{"overlay":{"id":"65765"}},"id":"65760","type":"LassoSelectTool"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"65802","type":"Span"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65783","type":"MultiLine"},{"attributes":{"toolbars":[{"id":"65766"}],"tools":[{"id":"65756"},{"id":"65757"},{"id":"65758"},{"id":"65759"},{"id":"65760"},{"id":"65761"},{"id":"65762"},{"id":"65763"}]},"id":"65822","type":"ProxyToolbar"},{"attributes":{},"id":"65744","type":"LinearScale"},{"attributes":{"text":""},"id":"65803","type":"Title"},{"attributes":{},"id":"65761","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"65764","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65798","type":"Circle"},{"attributes":{"source":{"id":"65782"}},"id":"65786","type":"CDSView"},{"attributes":{"callback":null},"id":"65763","type":"HoverTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65778","type":"Triangle"},{"attributes":{},"id":"65812","type":"UnionRenderers"},{"attributes":{},"id":"65756","type":"ResetTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"65765","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65789","type":"Circle"},{"attributes":{"data_source":{"id":"65777"},"glyph":{"id":"65778"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65779"},"selection_glyph":null,"view":{"id":"65781"}},"id":"65780","type":"GlyphRenderer"},{"attributes":{"source":{"id":"65787"}},"id":"65791","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"65813"},"selection_policy":{"id":"65812"}},"id":"65787","type":"ColumnDataSource"},{"attributes":{},"id":"65817","type":"Selection"},{"attributes":{},"id":"65759","type":"WheelZoomTool"},{"attributes":{},"id":"65811","type":"Selection"},{"attributes":{"data_source":{"id":"65782"},"glyph":{"id":"65783"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65784"},"selection_glyph":null,"view":{"id":"65786"}},"id":"65785","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"65739"},0,0]]},"id":"65821","type":"GridBox"},{"attributes":{},"id":"65746","type":"LinearScale"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"65815"},"selection_policy":{"id":"65814"}},"id":"65792","type":"ColumnDataSource"},{"attributes":{},"id":"65816","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65799","type":"Circle"},{"attributes":{"data_source":{"id":"65792"},"glyph":{"id":"65793"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65794"},"selection_glyph":null,"view":{"id":"65796"}},"id":"65795","type":"GlyphRenderer"}],"root_ids":["65824"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"ed4f57eb-1d53-4eb5-94c5-54aa578b7010","root_ids":["65824"],"roots":{"65824":"8ceda65a-1894-4e6e-bb49-543ab98d1060"}}];
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