<template>
  <div style="padding: 32px 500px">
    <h1>上传组件 Upload 与 七牛云等cdn 的结合使用</h1>
    <br>
    <br>

    <Upload
      action="http://upload.qiniup.com/"
      :format="['jpg','jpeg','png','gif']"
      :max-size="51200"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="beforeUpload"
      :data="uploadForm"
      :on-progress="handleProgress"
    >
      <Button>上传图片</Button>
    </Upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uploadForm: {
        token:
          "mT57HocLAmbigrjdkn6EDQz7DwgbtqGbExgHd3i3:Yh9aIX_u0ktJFbBiH4_w3zU8aNA=:eyJzY29wZSI6ImNoZW5zaHVhaTIwMTgiLCJkZWFkbGluZSI6MTU0ODA4NzQyN30="
      }
    };
  },
  methods: {
    handleFormatError(file) {
      this.$Notice.warning({
        title: "文件格式不正确",
        desc: "您上传的文件" + file.name + "格式不符合要求"
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "文件格式不正确",
        desc: "您上传的文件" + file.name + "体积过大，请上传不超过50M的文件"
      });
    },
    beforeUpload() {},
    handleProgress(event) {
      console.log(parseInt(event.percent));
    }
  }
};
</script>
