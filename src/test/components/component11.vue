<template>
  <div style="padding:32px 500px">
    <h1>iview 技巧细节</h1>
    <br>
    <br>

    <component-a ref="comA"></component-a>
    <component-b ref="comB"></component-b>
  </div>
</template>
<script>
import componentA from "../../components/component-a";
import componentB from "../../components/component-b";
export default {
  data() {
    return {
      name: "parent"
    };
  },
  components: {
    componentA,
    componentB
  },
  mounted() {
    // console.log(this.$refs.comA);
    // console.log(this.$refs.comB);
    // console.log(this.$children);
  }
};
</script>
