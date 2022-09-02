<template>
  <div v-if="scenes" class="scenes-container">
    <!-- TODO: slider -->
    <SceneItem v-for="scene in scenes" :scene="scene" :key="scene.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Scene } from "@/models/scene.models";
import SceneItem from "@/components/Scene/SceneItem.vue";

export default defineComponent({
  name: "SceneContainer",
  components: { SceneItem },
  props: {
    scenes: {
      required: true,
      type: Array as PropType<Scene[]>,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scenes-container {
  position: absolute;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
}
</style>
