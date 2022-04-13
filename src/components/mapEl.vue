<template>
<div>
  <div id="container" class="map"></div>
  <div>经纬度： {{ address }}</div>
</div>
</template>

<script>
import AMap from "AMap";
export default {
  data() {
    return {
      address: '',
      mapOpts: {
        showIndoorMap: false, // 是否在有矢量底图的时候自动展示室内地图，PC默认true,移动端默认false
        resizeEnable: true, //是否监控地图容器尺寸变化，默认值为false
        dragEnable: true, // 地图是否可通过鼠标拖拽平移，默认为true
        keyboardEnable: false, //地图是否可通过键盘控制，默认为true
        doubleClickZoom: true, // 地图是否可通过双击鼠标放大地图，默认为true
        zoomEnable: true, //地图是否可缩放，默认值为true
        rotateEnable: false, // 地图是否可旋转，3D视图默认为true，2D视图默认false
        zoom: 11, //初始化地图层级
        center: [116.397428, 39.90923], //初始化地图中心点
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // eslint-disable-next-line no-unused-vars
      let map = new AMap.Map("container", this.mapOpts);
      map.on("click", (e) => {
        console.log(e)
        this.address = e.lnglat.getLng() + ',' + e.lnglat.getLat()
      });
    },
  },
};
</script>

<style>
.map {
  width: 500px;
  height: 500px;
}
</style>
