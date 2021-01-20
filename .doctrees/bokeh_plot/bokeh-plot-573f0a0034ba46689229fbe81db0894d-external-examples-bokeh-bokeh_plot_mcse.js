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
    
      
      
    
      var element = document.getElementById("109b4d36-d2c4-48f6-b7ac-ea17652cc278");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '109b4d36-d2c4-48f6-b7ac-ea17652cc278' but no matching script tag was found.")
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
                    
                  var docs_json = '{"16e04701-56e2-4f09-808a-9ec45f9493bc":{"roots":{"references":[{"attributes":{"axis":{"id":"85960"},"dimension":1,"ticker":null},"id":"85963","type":"Grid"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"86019"},"selection_policy":{"id":"86018"}},"id":"85992","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"85971","type":"HoverTool"},{"attributes":{"source":{"id":"86006"}},"id":"86008","type":"CDSView"},{"attributes":{},"id":"85934","type":"SaveTool"},{"attributes":{"overlay":{"id":"85972"}},"id":"85966","type":"BoxZoomTool"},{"attributes":{},"id":"85965","type":"PanTool"},{"attributes":{},"id":"86027","type":"BasicTickFormatter"},{"attributes":{},"id":"85964","type":"ResetTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85991","type":"Dash"},{"attributes":{},"id":"85970","type":"SaveTool"},{"attributes":{},"id":"85967","type":"WheelZoomTool"},{"attributes":{},"id":"85928","type":"ResetTool"},{"attributes":{"overlay":{"id":"85973"}},"id":"85968","type":"LassoSelectTool"},{"attributes":{},"id":"86015","type":"BasicTickFormatter"},{"attributes":{},"id":"85969","type":"UndoTool"},{"attributes":{"callback":null},"id":"85935","type":"HoverTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"86004","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"86003","type":"Span"},{"attributes":{"overlay":{"id":"85936"}},"id":"85930","type":"BoxZoomTool"},{"attributes":{},"id":"85925","type":"BasicTicker"},{"attributes":{"axis":{"id":"85924"},"dimension":1,"ticker":null},"id":"85927","type":"Grid"},{"attributes":{},"id":"85929","type":"PanTool"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"86002","type":"Span"},{"attributes":{"data_source":{"id":"86006"},"glyph":{"id":"86005"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"86008"}},"id":"86007","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"85920"},"ticker":null},"id":"85923","type":"Grid"},{"attributes":{},"id":"85931","type":"WheelZoomTool"},{"attributes":{"text":"mu"},"id":"86009","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85999","type":"Circle"},{"attributes":{"overlay":{"id":"85937"}},"id":"85932","type":"LassoSelectTool"},{"attributes":{},"id":"85933","type":"UndoTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"86005","type":"Dash"},{"attributes":{"source":{"id":"85997"}},"id":"86001","type":"CDSView"},{"attributes":{"data_source":{"id":"85997"},"glyph":{"id":"85998"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85999"},"selection_glyph":null,"view":{"id":"86001"}},"id":"86000","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"85938"},{"id":"85974"}],"tools":[{"id":"85928"},{"id":"85929"},{"id":"85930"},{"id":"85931"},{"id":"85932"},{"id":"85933"},{"id":"85934"},{"id":"85935"},{"id":"85964"},{"id":"85965"},{"id":"85966"},{"id":"85967"},{"id":"85968"},{"id":"85969"},{"id":"85970"},{"id":"85971"}]},"id":"86036","type":"ProxyToolbar"},{"attributes":{"text":"tau"},"id":"85995","type":"Title"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"85989","type":"Span"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85990","type":"Span"},{"attributes":{"data_source":{"id":"85992"},"glyph":{"id":"85991"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85994"}},"id":"85993","type":"GlyphRenderer"},{"attributes":{"source":{"id":"85992"}},"id":"85994","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85972","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"86029"},"selection_policy":{"id":"86028"}},"id":"85997","type":"ColumnDataSource"},{"attributes":{},"id":"86028","type":"UnionRenderers"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"85988","type":"Span"},{"attributes":{},"id":"86029","type":"Selection"},{"attributes":{},"id":"86016","type":"UnionRenderers"},{"attributes":{},"id":"86017","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85936","type":"BoxAnnotation"},{"attributes":{},"id":"86030","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"85911"},0,0],[{"id":"85947"},0,1]]},"id":"86035","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85973","type":"PolyAnnotation"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"86013"},"ticker":{"id":"85921"}},"id":"85920","type":"LinearAxis"},{"attributes":{},"id":"86031","type":"Selection"},{"attributes":{},"id":"85912","type":"DataRange1d"},{"attributes":{},"id":"86018","type":"UnionRenderers"},{"attributes":{},"id":"86019","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85937","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85998","type":"Circle"},{"attributes":{},"id":"85957","type":"BasicTicker"},{"attributes":{},"id":"85948","type":"DataRange1d"},{"attributes":{"below":[{"id":"85920"}],"center":[{"id":"85923"},{"id":"85927"}],"left":[{"id":"85924"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85986"},{"id":"85988"},{"id":"85989"},{"id":"85990"},{"id":"85993"}],"title":{"id":"85995"},"toolbar":{"id":"85938"},"toolbar_location":null,"x_range":{"id":"85912"},"x_scale":{"id":"85916"},"y_range":{"id":"85914"},"y_scale":{"id":"85918"}},"id":"85911","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85964"},{"id":"85965"},{"id":"85966"},{"id":"85967"},{"id":"85968"},{"id":"85969"},{"id":"85970"},{"id":"85971"}]},"id":"85974","type":"Toolbar"},{"attributes":{"children":[{"id":"86037"},{"id":"86035"}]},"id":"86038","type":"Column"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"86015"},"ticker":{"id":"85925"}},"id":"85924","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"86036"},"toolbar_location":"above"},"id":"86037","type":"ToolbarBox"},{"attributes":{"end":1,"start":-0.05},"id":"85914","type":"DataRange1d"},{"attributes":{"data_source":{"id":"85983"},"glyph":{"id":"85984"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85985"},"selection_glyph":null,"view":{"id":"85987"}},"id":"85986","type":"GlyphRenderer"},{"attributes":{"source":{"id":"85983"}},"id":"85987","type":"CDSView"},{"attributes":{},"id":"85921","type":"BasicTicker"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"86031"},"selection_policy":{"id":"86030"}},"id":"86006","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85928"},{"id":"85929"},{"id":"85930"},{"id":"85931"},{"id":"85932"},{"id":"85933"},{"id":"85934"},{"id":"85935"}]},"id":"85938","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85984","type":"Circle"},{"attributes":{},"id":"85916","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"86025"},"ticker":{"id":"85957"}},"id":"85956","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"85950","type":"DataRange1d"},{"attributes":{},"id":"86025","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"85956"}],"center":[{"id":"85959"},{"id":"85963"}],"left":[{"id":"85960"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"86000"},{"id":"86002"},{"id":"86003"},{"id":"86004"},{"id":"86007"}],"title":{"id":"86009"},"toolbar":{"id":"85974"},"toolbar_location":null,"x_range":{"id":"85948"},"x_scale":{"id":"85952"},"y_range":{"id":"85950"},"y_scale":{"id":"85954"}},"id":"85947","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"85961","type":"BasicTicker"},{"attributes":{},"id":"85952","type":"LinearScale"},{"attributes":{},"id":"85954","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"86017"},"selection_policy":{"id":"86016"}},"id":"85983","type":"ColumnDataSource"},{"attributes":{},"id":"85918","type":"LinearScale"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"86027"},"ticker":{"id":"85961"}},"id":"85960","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85985","type":"Circle"},{"attributes":{"axis":{"id":"85956"},"ticker":null},"id":"85959","type":"Grid"},{"attributes":{},"id":"86013","type":"BasicTickFormatter"}],"root_ids":["86038"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"16e04701-56e2-4f09-808a-9ec45f9493bc","root_ids":["86038"],"roots":{"86038":"109b4d36-d2c4-48f6-b7ac-ea17652cc278"}}];
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