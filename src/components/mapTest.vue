<template>
  <div>
    <!-- <el-amap vid="amap"></el-amap> -->

    <a-button type="primary" @click="showModal"> 点击打开地图 </a-button>
    <a-modal
      v-model="isShowModal"
      title="地图定位"
      width="1340px"
      @cancel="closeModal"
      :maskClosable="false"
      :footer="null"
    >
      <a-input-search
        style="
          width: 244px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        "
        enter-button="Search"
        @search="onSearch"
        placeholder="请输入地址搜索"
      />
      <div class="mapContainer">
        <!-- <el-amap vid="amap"></el-amap> -->
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.mapContainer {
  height: 500px;
}
</style>
