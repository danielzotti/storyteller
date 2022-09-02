<template>
  <div class="scene-configurator">
    <h1>Story Configurator</h1>
    <pre>{{ JSON.stringify(story, null, 2) }}</pre>
    <!--<ul>
      <li
        id="scene-configurator"
        v-for="scene in story?.scenes"
        :key="scene.id"
      >
        <pre>{{ JSON.stringify(scene, null, 2) }}</pre>
      </li>
    </ul>-->
  </div>
</template>

<script lang="ts">
// import SceneConfigurator from "@/components/SceneConfigurator.vue";
import { defineComponent, PropType } from "vue";
import { Story } from "@/models/story.models";

export default defineComponent({
  name: "StoryConfigurator",
  components: {
    // SceneConfigurator,
  },
  props: {
    story: {
      required: true,
      type: Object as PropType<Story>,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scene-configurator {
  padding: 10px;
}

pre {
  overflow: auto;
}
</style>
