// 高德map   https://webapi.amap.com/maps?v=1.4.11&key=你的高德地图的key
export default function MapLoader() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap);
    } else {
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.src = "https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css";
      document.head.appendChild(link);

      // 引入，注意链接要用https://
      // 用了2种插件，plugin=AMap.MouseTool,AMap.PolyEditor
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://webapi.amap.com/maps?v=1.4.15&callback=initAMap&key=a4cfa1b5f4623bfedbce151431e71b73&plugin=AMap.MouseTool,AMap.PolyEditor";
      script.onerror = reject;
      document.head.appendChild(script);

      var script1 = document.createElement("script");
      script1.type = "text/javascript";
      script1.async = true;
      script1.src = "https://a.amap.com/jsapi_demos/static/demo-center/js/demoutils.js";
      script1.onerror = reject;
      document.head.appendChild(script1);
    }

    window.initAMap = () => {
      resolve(window.AMap);
    };
  });
}
