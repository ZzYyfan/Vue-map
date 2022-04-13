import Vue from 'vue'
import App from './App.vue'
import VueAMap from 'vue-amap';
// import { lazyAMapApiLoaderInstance } from 'vue-amap';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(VueAMap);

new Vue({
  render: h => h(App),
}).$mount('#app')

VueAMap.initAMapApiLoader({
  key: "a4cfa1b5f4623bfedbce151431e71b73", // 这里写你申请的高德地图的key
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
   // 默认高德 sdk 版本为 1.4.4
   v: '1.4.4'
});
// lazyAMapApiLoaderInstance.load().then(() => {
//   // your code ...
//   this.map = new AMap.Map('amapContainer', {
//     center: new AMap.LngLat(121.59996, 31.197646)
//   });
// });