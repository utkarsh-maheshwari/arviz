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
    
      
      
    
      var element = document.getElementById("331c6377-cc04-40a1-b253-5fc725e37465");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '331c6377-cc04-40a1-b253-5fc725e37465' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e51bb603-8754-4337-b880-088eaa14472c":{"roots":{"references":[{"attributes":{},"id":"68715","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68562","type":"Line"},{"attributes":{"formatter":{"id":"68674"},"ticker":{"id":"68520"}},"id":"68519","type":"LinearAxis"},{"attributes":{},"id":"68675","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68587","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68536","type":"PolyAnnotation"},{"attributes":{"source":{"id":"68596"}},"id":"68600","type":"CDSView"},{"attributes":{},"id":"68706","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"68693"},"selection_policy":{"id":"68692"}},"id":"68586","type":"ColumnDataSource"},{"attributes":{},"id":"68709","type":"Selection"},{"attributes":{"source":{"id":"68556"}},"id":"68560","type":"CDSView"},{"attributes":{"source":{"id":"68576"}},"id":"68580","type":"CDSView"},{"attributes":{},"id":"68708","type":"UnionRenderers"},{"attributes":{},"id":"68719","type":"Selection"},{"attributes":{"axis":{"id":"68519"},"ticker":null},"id":"68522","type":"Grid"},{"attributes":{},"id":"68699","type":"Selection"},{"attributes":{},"id":"68517","type":"LinearScale"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"68669","type":"DataRange1d"},{"attributes":{},"id":"68697","type":"Selection"},{"attributes":{"source":{"id":"68591"}},"id":"68595","type":"CDSView"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"68685"},"selection_policy":{"id":"68684"}},"id":"68566","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68598","type":"Line"},{"attributes":{},"id":"68720","type":"UnionRenderers"},{"attributes":{"text":"94.0% HDI"},"id":"68666","type":"Title"},{"attributes":{"data_source":{"id":"68571"},"glyph":{"id":"68572"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68573"},"selection_glyph":null,"view":{"id":"68575"}},"id":"68574","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68577","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68603","type":"Circle"},{"attributes":{"source":{"id":"68571"}},"id":"68575","type":"CDSView"},{"attributes":{},"id":"68674","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"68701"},"selection_policy":{"id":"68700"}},"id":"68606","type":"ColumnDataSource"},{"attributes":{},"id":"68533","type":"SaveTool"},{"attributes":{},"id":"68701","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68602","type":"Circle"},{"attributes":{"source":{"id":"68581"}},"id":"68585","type":"CDSView"},{"attributes":{},"id":"68711","type":"Selection"},{"attributes":{},"id":"68695","type":"Selection"},{"attributes":{},"id":"68530","type":"WheelZoomTool"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68697"},"selection_policy":{"id":"68696"}},"id":"68596","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68572","type":"Circle"},{"attributes":{},"id":"68689","type":"Selection"},{"attributes":{},"id":"68532","type":"UndoTool"},{"attributes":{"data_source":{"id":"68566"},"glyph":{"id":"68567"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68568"},"selection_glyph":null,"view":{"id":"68570"}},"id":"68569","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"68523"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"68526","type":"Grid"},{"attributes":{},"id":"68688","type":"UnionRenderers"},{"attributes":{},"id":"68693","type":"Selection"},{"attributes":{"data_source":{"id":"68551"},"glyph":{"id":"68552"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68553"},"selection_glyph":null,"view":{"id":"68555"}},"id":"68554","type":"GlyphRenderer"},{"attributes":{},"id":"68723","type":"Selection"},{"attributes":{},"id":"68528","type":"PanTool"},{"attributes":{},"id":"68713","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68527"},{"id":"68528"},{"id":"68529"},{"id":"68530"},{"id":"68531"},{"id":"68532"},{"id":"68533"},{"id":"68534"}]},"id":"68537","type":"Toolbar"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68567","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68583","type":"Line"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"68719"},"selection_policy":{"id":"68718"}},"id":"68651","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68547","type":"Line"},{"attributes":{"data_source":{"id":"68576"},"glyph":{"id":"68577"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68578"},"selection_glyph":null,"view":{"id":"68580"}},"id":"68579","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68601"},"glyph":{"id":"68602"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68603"},"selection_glyph":null,"view":{"id":"68605"}},"id":"68604","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68588","type":"Circle"},{"attributes":{},"id":"68703","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68578","type":"Line"},{"attributes":{"overlay":{"id":"68535"}},"id":"68529","type":"BoxZoomTool"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68695"},"selection_policy":{"id":"68694"}},"id":"68591","type":"ColumnDataSource"},{"attributes":{},"id":"68714","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68586"},"glyph":{"id":"68587"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68588"},"selection_glyph":null,"view":{"id":"68590"}},"id":"68589","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"68681"},"selection_policy":{"id":"68680"}},"id":"68556","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68553","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68597","type":"Line"},{"attributes":{},"id":"68707","type":"Selection"},{"attributes":{},"id":"68722","type":"UnionRenderers"},{"attributes":{},"id":"68520","type":"BasicTicker"},{"attributes":{},"id":"68700","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68563","type":"Line"},{"attributes":{"overlay":{"id":"68536"}},"id":"68531","type":"LassoSelectTool"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"68691"},"selection_policy":{"id":"68690"}},"id":"68581","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68591"},"glyph":{"id":"68592"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68593"},"selection_glyph":null,"view":{"id":"68595"}},"id":"68594","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68557","type":"Circle"},{"attributes":{},"id":"68710","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68593","type":"Line"},{"attributes":{"source":{"id":"68566"}},"id":"68570","type":"CDSView"},{"attributes":{},"id":"68692","type":"UnionRenderers"},{"attributes":{},"id":"68702","type":"UnionRenderers"},{"attributes":{},"id":"68527","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68568","type":"Line"},{"attributes":{},"id":"68694","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68573","type":"Circle"},{"attributes":{},"id":"68704","type":"UnionRenderers"},{"attributes":{},"id":"68718","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68592","type":"Line"},{"attributes":{},"id":"68690","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68535","type":"BoxAnnotation"},{"attributes":{"source":{"id":"68586"}},"id":"68590","type":"CDSView"},{"attributes":{},"id":"68705","type":"Selection"},{"attributes":{},"id":"68716","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"68534","type":"HoverTool"},{"attributes":{"data_source":{"id":"68556"},"glyph":{"id":"68557"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68558"},"selection_glyph":null,"view":{"id":"68560"}},"id":"68559","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"68679"},"selection_policy":{"id":"68678"}},"id":"68551","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68606"},"glyph":{"id":"68607"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68608"},"selection_glyph":null,"view":{"id":"68610"}},"id":"68609","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68548","type":"Line"},{"attributes":{"source":{"id":"68561"}},"id":"68565","type":"CDSView"},{"attributes":{"source":{"id":"68546"}},"id":"68550","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68558","type":"Circle"},{"attributes":{"source":{"id":"68551"}},"id":"68555","type":"CDSView"},{"attributes":{},"id":"68721","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68687"},"selection_policy":{"id":"68686"}},"id":"68571","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"68689"},"selection_policy":{"id":"68688"}},"id":"68576","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"68675"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"68670"}},"id":"68523","type":"LinearAxis"},{"attributes":{},"id":"68698","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"68677"},"selection_policy":{"id":"68676"}},"id":"68546","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68582","type":"Line"},{"attributes":{},"id":"68691","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68699"},"selection_policy":{"id":"68698"}},"id":"68601","type":"ColumnDataSource"},{"attributes":{},"id":"68712","type":"UnionRenderers"},{"attributes":{},"id":"68717","type":"Selection"},{"attributes":{"data_source":{"id":"68596"},"glyph":{"id":"68597"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68598"},"selection_glyph":null,"view":{"id":"68600"}},"id":"68599","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68552","type":"Line"},{"attributes":{"data_source":{"id":"68581"},"glyph":{"id":"68582"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68583"},"selection_glyph":null,"view":{"id":"68585"}},"id":"68584","type":"GlyphRenderer"},{"attributes":{},"id":"68687","type":"Selection"},{"attributes":{},"id":"68696","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68613","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68657","type":"Line"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"68683"},"selection_policy":{"id":"68682"}},"id":"68561","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68616"}},"id":"68620","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"68723"},"selection_policy":{"id":"68722"}},"id":"68661","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68628","type":"Line"},{"attributes":{"data_source":{"id":"68626"},"glyph":{"id":"68627"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68628"},"selection_glyph":null,"view":{"id":"68630"}},"id":"68629","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"68510"},0,0]]},"id":"68727","type":"GridBox"},{"attributes":{"data_source":{"id":"68611"},"glyph":{"id":"68612"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68613"},"selection_glyph":null,"view":{"id":"68615"}},"id":"68614","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"68705"},"selection_policy":{"id":"68704"}},"id":"68616","type":"ColumnDataSource"},{"attributes":{},"id":"68676","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68618","type":"Circle"},{"attributes":{"data_source":{"id":"68621"},"glyph":{"id":"68622"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68623"},"selection_glyph":null,"view":{"id":"68625"}},"id":"68624","type":"GlyphRenderer"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"68670","type":"FixedTicker"},{"attributes":{},"id":"68686","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"68713"},"selection_policy":{"id":"68712"}},"id":"68636","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68656"}},"id":"68660","type":"CDSView"},{"attributes":{"data_source":{"id":"68636"},"glyph":{"id":"68637"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68638"},"selection_glyph":null,"view":{"id":"68640"}},"id":"68639","type":"GlyphRenderer"},{"attributes":{},"id":"68680","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"68728"},"toolbar_location":"above"},"id":"68729","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"68616"},"glyph":{"id":"68617"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68618"},"selection_glyph":null,"view":{"id":"68620"}},"id":"68619","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68631"}},"id":"68635","type":"CDSView"},{"attributes":{},"id":"68683","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68622","type":"Line"},{"attributes":{"data_source":{"id":"68641"},"glyph":{"id":"68642"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68643"},"selection_glyph":null,"view":{"id":"68645"}},"id":"68644","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68627","type":"Line"},{"attributes":{"below":[{"id":"68519"}],"center":[{"id":"68522"},{"id":"68526"}],"left":[{"id":"68523"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"68549"},{"id":"68554"},{"id":"68559"},{"id":"68564"},{"id":"68569"},{"id":"68574"},{"id":"68579"},{"id":"68584"},{"id":"68589"},{"id":"68594"},{"id":"68599"},{"id":"68604"},{"id":"68609"},{"id":"68614"},{"id":"68619"},{"id":"68624"},{"id":"68629"},{"id":"68634"},{"id":"68639"},{"id":"68644"},{"id":"68649"},{"id":"68654"},{"id":"68659"},{"id":"68664"}],"title":{"id":"68666"},"toolbar":{"id":"68537"},"toolbar_location":null,"x_range":{"id":"68668"},"x_scale":{"id":"68515"},"y_range":{"id":"68669"},"y_scale":{"id":"68517"}},"id":"68510","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68684","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68637","type":"Line"},{"attributes":{},"id":"68678","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68633","type":"Circle"},{"attributes":{"source":{"id":"68621"}},"id":"68625","type":"CDSView"},{"attributes":{"data_source":{"id":"68646"},"glyph":{"id":"68647"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68648"},"selection_glyph":null,"view":{"id":"68650"}},"id":"68649","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68651"},"glyph":{"id":"68652"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68653"},"selection_glyph":null,"view":{"id":"68655"}},"id":"68654","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"68711"},"selection_policy":{"id":"68710"}},"id":"68631","type":"ColumnDataSource"},{"attributes":{},"id":"68515","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68623","type":"Line"},{"attributes":{"data_source":{"id":"68546"},"glyph":{"id":"68547"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68548"},"selection_glyph":null,"view":{"id":"68550"}},"id":"68549","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"68703"},"selection_policy":{"id":"68702"}},"id":"68611","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68608","type":"Line"},{"attributes":{"source":{"id":"68606"}},"id":"68610","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68658","type":"Line"},{"attributes":{},"id":"68681","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68607","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68643","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68647","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68662","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"68717"},"selection_policy":{"id":"68716"}},"id":"68646","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"68721"},"selection_policy":{"id":"68720"}},"id":"68656","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68638","type":"Line"},{"attributes":{"data_source":{"id":"68656"},"glyph":{"id":"68657"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68658"},"selection_glyph":null,"view":{"id":"68660"}},"id":"68659","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68636"}},"id":"68640","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68653","type":"Line"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"68715"},"selection_policy":{"id":"68714"}},"id":"68641","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"68729"},{"id":"68727"}]},"id":"68730","type":"Column"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68642","type":"Line"},{"attributes":{"source":{"id":"68641"}},"id":"68645","type":"CDSView"},{"attributes":{"data_source":{"id":"68561"},"glyph":{"id":"68562"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68563"},"selection_glyph":null,"view":{"id":"68565"}},"id":"68564","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68611"}},"id":"68615","type":"CDSView"},{"attributes":{"toolbars":[{"id":"68537"}],"tools":[{"id":"68527"},{"id":"68528"},{"id":"68529"},{"id":"68530"},{"id":"68531"},{"id":"68532"},{"id":"68533"},{"id":"68534"}]},"id":"68728","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68617","type":"Circle"},{"attributes":{},"id":"68677","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68632","type":"Circle"},{"attributes":{"source":{"id":"68626"}},"id":"68630","type":"CDSView"},{"attributes":{},"id":"68682","type":"UnionRenderers"},{"attributes":{"bounds":"auto","min_interval":1},"id":"68668","type":"DataRange1d"},{"attributes":{},"id":"68685","type":"Selection"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"68709"},"selection_policy":{"id":"68708"}},"id":"68626","type":"ColumnDataSource"},{"attributes":{},"id":"68679","type":"Selection"},{"attributes":{"source":{"id":"68601"}},"id":"68605","type":"CDSView"},{"attributes":{"data_source":{"id":"68631"},"glyph":{"id":"68632"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68633"},"selection_glyph":null,"view":{"id":"68635"}},"id":"68634","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68648","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68612","type":"Line"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"68707"},"selection_policy":{"id":"68706"}},"id":"68621","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68646"}},"id":"68650","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68663","type":"Circle"},{"attributes":{"source":{"id":"68661"}},"id":"68665","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68652","type":"Line"},{"attributes":{"data_source":{"id":"68661"},"glyph":{"id":"68662"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68663"},"selection_glyph":null,"view":{"id":"68665"}},"id":"68664","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68651"}},"id":"68655","type":"CDSView"}],"root_ids":["68730"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e51bb603-8754-4337-b880-088eaa14472c","root_ids":["68730"],"roots":{"68730":"331c6377-cc04-40a1-b253-5fc725e37465"}}];
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