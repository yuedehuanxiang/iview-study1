<template>
  <div>
    <h1>上传组件 Upload 选择文件后，上传前显示缩略图</h1>
    <br>
    <br>

    <Upload action="http://upload.qiniup.com/" :data="uploadForm" :before-upload="handleUpload">
      <Button icon="ios-cloud-upload-outline">选择文件</Button>
    </Upload>

    <img class="img" :style="{'background-image': 'url(' + img + ')'}" v-if="img">
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: "",
      uploadForm: {
        token:
          "mT57HocLAmbigrjdkn6EDQz7DwgbtqGbExgHd3i3:Yh9aIX_u0ktJFbBiH4_w3zU8aNA=:eyJzY29wZSI6ImNoZW5zaHVhaTIwMTgiLCJkZWFkbGluZSI6MTU0ODA4NzQyN30="
      }
    };
  },
  methods: {
    handleUpload(file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.img = reader.result;
      };
    }
  }
};
</script>
<style>
.img {
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
