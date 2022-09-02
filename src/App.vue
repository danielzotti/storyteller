<template>
  <AppBar id="header" />
  <StoryContainer id="content"></StoryContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "@/components/Layout/AppBar.vue";
import StoryContainer from "@/components/Story/StoryContainer.vue";

export default defineComponent({
  name: "App",
  components: {
    AppBar,
    StoryContainer,
  },
});
</script>

<style lang="scss">
@import "scss/variables";
@import "scss/fonts";
@import "scss/normalize";

html,
body {
  position: absolute;
  inset: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-family: $font-family, sans-serif;

  background-color: $bg-default;
  color: $text-default;
}

#app {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#header {
  background-color: red;
  flex-basis: $app-bar-height;
}

#content {
  flex-grow: 1;
  overflow-y: auto;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}
</style>
