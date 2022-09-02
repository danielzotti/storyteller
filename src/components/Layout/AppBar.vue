<template>
  <header><h1>storyteller by Bitrock</h1></header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBar",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  margin: 0;
  text-align: center;
}
</style>
