<template>
  <div class="scene-configurator">
    <h1>Configuration</h1>
    <form>
      <fieldset name="story"></fieldset>
      <div class="form-field">
        <label>Title</label>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Scene } from "@/models/scene.models";

export default defineComponent({
  name: "SceneConfigurator",
  props: {
    scene: {
      required: true,
      type: Object as PropType<Scene>,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scene-configurator {
  padding: 10px;
}
</style>
