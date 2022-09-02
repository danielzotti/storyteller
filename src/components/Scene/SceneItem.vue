<template>
  <div class="scene-container" v-if="scene">
    <div
      v-if="scene.backgroundImageSrc"
      class="scene__background"
      :style="{
        backgroundImage: scene.backgroundImageSrc
          ? `url(${scene.backgroundImageSrc})`
          : 'none',
        transform: `scaleX(${scene.backgroundImageIsFlipped ? -1 : 1})`,
      }"
    ></div>
    <div class="scene">
      <div
        class="scene__title"
        :style="{
          backgroundColor: scene.titleBackgroundColor
            ? scene.titleBackgroundColor
            : 'transparent',
        }"
      >
        <h1>{{ scene?.title }}</h1>
      </div>
      <div class="scene-content">
        <CharacterItem
          :character="character"
          :key="character.id"
          v-for="character in scene.characters"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Scene } from "@/models/scene.models";
import CharacterItem from "@/components/Character/CharacteItem.vue";

export default defineComponent({
  name: "SceneItem",
  components: { CharacterItem },
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
.scene-container {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.scene {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.scene__background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.scene-content {
  //position: absolute;
  //inset: 0;
  flex-grow: 1;
  position: relative;
}

.scene__title {
  h1 {
    margin: 0;
    text-align: center;
    line-height: 1;
  }
}
</style>
