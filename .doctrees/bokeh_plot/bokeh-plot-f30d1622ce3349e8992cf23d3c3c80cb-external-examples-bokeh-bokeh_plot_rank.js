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
    
      
      
    
      var element = document.getElementById("9b60cb40-3cd5-44af-9415-c7e437352ffa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9b60cb40-3cd5-44af-9415-c7e437352ffa' but no matching script tag was found.")
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
                    
                  var docs_json = '{"92768f8b-9d46-4e50-8e30-3a5eb1d4802f":{"roots":{"references":[{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90876","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90910"},"selection_policy":{"id":"90909"}},"id":"90874","type":"ColumnDataSource"},{"attributes":{},"id":"90892","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90875","type":"VBar"},{"attributes":{"callback":null},"id":"90782","type":"HoverTool"},{"attributes":{},"id":"90893","type":"Selection"},{"attributes":{"source":{"id":"90874"}},"id":"90878","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90887"},"ticker":{"id":"90852"}},"id":"90771","type":"LinearAxis"},{"attributes":{},"id":"90775","type":"ResetTool"},{"attributes":{"data_source":{"id":"90874"},"glyph":{"id":"90875"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90876"},"selection_glyph":null,"view":{"id":"90878"}},"id":"90877","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90818","type":"PolyAnnotation"},{"attributes":{},"id":"90903","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90833","type":"Span"},{"attributes":{},"id":"90904","type":"Selection"},{"attributes":{},"id":"90781","type":"SaveTool"},{"attributes":{},"id":"90894","type":"UnionRenderers"},{"attributes":{},"id":"90895","type":"Selection"},{"attributes":{},"id":"90886","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"90816","type":"HoverTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90902"},"ticker":{"id":"90880"}},"id":"90805","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90784","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90783","type":"BoxAnnotation"},{"attributes":{},"id":"90905","type":"UnionRenderers"},{"attributes":{},"id":"90759","type":"DataRange1d"},{"attributes":{},"id":"90906","type":"Selection"},{"attributes":{},"id":"90799","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90889"},"selection_policy":{"id":"90888"}},"id":"90828","type":"ColumnDataSource"},{"attributes":{},"id":"90780","type":"UndoTool"},{"attributes":{},"id":"90887","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"90828"},"glyph":{"id":"90829"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90830"},"selection_glyph":null,"view":{"id":"90832"}},"id":"90831","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90830","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90836","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90839","type":"Span"},{"attributes":{"source":{"id":"90828"}},"id":"90832","type":"CDSView"},{"attributes":{},"id":"90907","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90891"},"selection_policy":{"id":"90890"}},"id":"90834","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90835","type":"VBar"},{"attributes":{"below":[{"id":"90767"}],"center":[{"id":"90770"},{"id":"90774"},{"id":"90833"},{"id":"90839"},{"id":"90845"},{"id":"90851"}],"left":[{"id":"90771"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90831"},{"id":"90837"},{"id":"90843"},{"id":"90849"}],"title":{"id":"90854"},"toolbar":{"id":"90785"},"toolbar_location":null,"x_range":{"id":"90759"},"x_scale":{"id":"90763"},"y_range":{"id":"90761"},"y_scale":{"id":"90765"}},"id":"90758","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"90908","type":"Selection"},{"attributes":{},"id":"90761","type":"DataRange1d"},{"attributes":{"source":{"id":"90834"}},"id":"90838","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90842","type":"VBar"},{"attributes":{"overlay":{"id":"90783"}},"id":"90777","type":"BoxZoomTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90845","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90841","type":"VBar"},{"attributes":{"data_source":{"id":"90834"},"glyph":{"id":"90835"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90836"},"selection_glyph":null,"view":{"id":"90838"}},"id":"90837","type":"GlyphRenderer"},{"attributes":{},"id":"90797","type":"LinearScale"},{"attributes":{},"id":"90778","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"90801"},"ticker":null},"id":"90804","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90893"},"selection_policy":{"id":"90892"}},"id":"90840","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90901"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90802"}},"id":"90801","type":"LinearAxis"},{"attributes":{"source":{"id":"90840"}},"id":"90844","type":"CDSView"},{"attributes":{},"id":"90776","type":"PanTool"},{"attributes":{},"id":"90802","type":"BasicTicker"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90848","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"90852","type":"FixedTicker"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90851","type":"Span"},{"attributes":{},"id":"90909","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90847","type":"VBar"},{"attributes":{"data_source":{"id":"90840"},"glyph":{"id":"90841"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90842"},"selection_glyph":null,"view":{"id":"90844"}},"id":"90843","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"90805"},"dimension":1,"ticker":null},"id":"90808","type":"Grid"},{"attributes":{},"id":"90910","type":"Selection"},{"attributes":{"toolbars":[{"id":"90785"},{"id":"90819"}],"tools":[{"id":"90775"},{"id":"90776"},{"id":"90777"},{"id":"90778"},{"id":"90779"},{"id":"90780"},{"id":"90781"},{"id":"90782"},{"id":"90809"},{"id":"90810"},{"id":"90811"},{"id":"90812"},{"id":"90813"},{"id":"90814"},{"id":"90815"},{"id":"90816"}]},"id":"90915","type":"ProxyToolbar"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90895"},"selection_policy":{"id":"90894"}},"id":"90846","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"90767"},"ticker":null},"id":"90770","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90829","type":"VBar"},{"attributes":{"source":{"id":"90846"}},"id":"90850","type":"CDSView"},{"attributes":{"overlay":{"id":"90817"}},"id":"90811","type":"BoxZoomTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"90880","type":"FixedTicker"},{"attributes":{"below":[{"id":"90801"}],"center":[{"id":"90804"},{"id":"90808"},{"id":"90861"},{"id":"90867"},{"id":"90873"},{"id":"90879"}],"left":[{"id":"90805"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90859"},{"id":"90865"},{"id":"90871"},{"id":"90877"}],"title":{"id":"90882"},"toolbar":{"id":"90819"},"toolbar_location":null,"x_range":{"id":"90759"},"x_scale":{"id":"90797"},"y_range":{"id":"90761"},"y_scale":{"id":"90799"}},"id":"90794","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"90810","type":"PanTool"},{"attributes":{"data_source":{"id":"90856"},"glyph":{"id":"90857"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90858"},"selection_glyph":null,"view":{"id":"90860"}},"id":"90859","type":"GlyphRenderer"},{"attributes":{},"id":"90809","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90858","type":"VBar"},{"attributes":{},"id":"90815","type":"SaveTool"},{"attributes":{"data_source":{"id":"90846"},"glyph":{"id":"90847"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90848"},"selection_glyph":null,"view":{"id":"90850"}},"id":"90849","type":"GlyphRenderer"},{"attributes":{},"id":"90888","type":"UnionRenderers"},{"attributes":{},"id":"90812","type":"WheelZoomTool"},{"attributes":{"text":"mu"},"id":"90882","type":"Title"},{"attributes":{},"id":"90901","type":"BasicTickFormatter"},{"attributes":{},"id":"90889","type":"Selection"},{"attributes":{"overlay":{"id":"90818"}},"id":"90813","type":"LassoSelectTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90904"},"selection_policy":{"id":"90903"}},"id":"90856","type":"ColumnDataSource"},{"attributes":{},"id":"90814","type":"UndoTool"},{"attributes":{},"id":"90765","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90809"},{"id":"90810"},{"id":"90811"},{"id":"90812"},{"id":"90813"},{"id":"90814"},{"id":"90815"},{"id":"90816"}]},"id":"90819","type":"Toolbar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90886"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90768"}},"id":"90767","type":"LinearAxis"},{"attributes":{"text":"tau"},"id":"90854","type":"Title"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90861","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90857","type":"VBar"},{"attributes":{"children":[[{"id":"90758"},0,0],[{"id":"90794"},0,1]]},"id":"90914","type":"GridBox"},{"attributes":{"overlay":{"id":"90784"}},"id":"90779","type":"LassoSelectTool"},{"attributes":{},"id":"90902","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90864","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90867","type":"Span"},{"attributes":{},"id":"90768","type":"BasicTicker"},{"attributes":{"source":{"id":"90856"}},"id":"90860","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90906"},"selection_policy":{"id":"90905"}},"id":"90862","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"90771"},"dimension":1,"ticker":null},"id":"90774","type":"Grid"},{"attributes":{},"id":"90763","type":"LinearScale"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90863","type":"VBar"},{"attributes":{},"id":"90890","type":"UnionRenderers"},{"attributes":{"source":{"id":"90868"}},"id":"90872","type":"CDSView"},{"attributes":{"toolbar":{"id":"90915"},"toolbar_location":"above"},"id":"90916","type":"ToolbarBox"},{"attributes":{"source":{"id":"90862"}},"id":"90866","type":"CDSView"},{"attributes":{},"id":"90891","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90870","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90873","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90869","type":"VBar"},{"attributes":{"data_source":{"id":"90862"},"glyph":{"id":"90863"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90864"},"selection_glyph":null,"view":{"id":"90866"}},"id":"90865","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"90916"},{"id":"90914"}]},"id":"90917","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90817","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90775"},{"id":"90776"},{"id":"90777"},{"id":"90778"},{"id":"90779"},{"id":"90780"},{"id":"90781"},{"id":"90782"}]},"id":"90785","type":"Toolbar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90908"},"selection_policy":{"id":"90907"}},"id":"90868","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"90868"},"glyph":{"id":"90869"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90870"},"selection_glyph":null,"view":{"id":"90872"}},"id":"90871","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90879","type":"Span"}],"root_ids":["90917"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"92768f8b-9d46-4e50-8e30-3a5eb1d4802f","root_ids":["90917"],"roots":{"90917":"9b60cb40-3cd5-44af-9415-c7e437352ffa"}}];
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