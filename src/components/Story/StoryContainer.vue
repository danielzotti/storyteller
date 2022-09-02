<template>
  <div class="story-container">
    <div class="story__title">
      <h1>
        {{ story?.title || "No story title" }}
        <small
          ><em>by {{ story?.author }}</em></small
        >
      </h1>
    </div>

    <div class="story-wrapper">
      <div class="story__scenes">
        <SceneContainer :scenes="story.scenes" />
      </div>
    </div>

    <!--    <StoryConfigurator :story="story" class="story__configurator" />-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SceneContainer from "@/components/Scene/SceneContainer.vue";
// import StoryConfigurator from "@/components/Story/StoryConfigurator.vue";
import { Story } from "@/models/story.models";

export default defineComponent({
  name: "StoryContainer",
  components: {
    // StoryConfigurator,
    SceneContainer,
  },
  data() {
    return {
      story: {
        id: "uuid-1",
        title: "Default Story Title",
        author: "Bitrock",
        hasWatermark: false,
        scenes: [
          {
            id: "uuid-2",
            title: "La fine di Stefano",
            backgroundImageSrc: "/img/backgrounds/empty-office.jpg",
            backgroundImageIsFlipped: true,
            titleBackgroundColor: "black",
            characters: [
              {
                id: "uuid-3",
                name: "Leo",
                imageSrc: "/img/characters/leo-pillon.png",
                isFlipped: true,
                sentence: "Hey Daniel! Che dici, lo licenziamo Stefano?",
                // sentence:
                //   "Hey Daniel! Che dici, lo licenziamo Stefano? Hey Daniel! Che dici, lo licenziamo Stefano? Hey Daniel! Che dici, lo licenziamo Stefano? Hey Daniel! Che dici, lo licenziamo Stefano? Hey Daniel! Che dici, lo licenziamo Stefano? Hey Daniel! Che dici, lo licenziamo Stefano? Hey Daniel! Che dici, lo licenziamo Stefano?",
                position: {
                  left: 0,
                  bottom: 0,
                },
              },
              {
                id: "uuid-4",
                name: "Daniel",
                imageSrc: "/img/characters/daniel-zotti.png",
                isFlipped: false,
                // sentence:
                //   "Hovvvvio! Ma ora fammi provare una frase lunghissima così vediamo che succede! Mi sa che dovremo usare una funzione di JavaScript per ridimensionare automaticamente il testo. Ora copierò e incollerò la stessa frase per fare dei test! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! LICENZIA STEFANO! ",
                sentence: "Hovvvvio!",
                position: {
                  right: 0,
                  bottom: 0,
                },
              },
            ],
          },
        ],
      } as Story,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../scss/variables";

.story__title {
  margin-bottom: 20px;
  h1 {
    margin: 0;
    line-height: 1;
  }
}

.story-wrapper {
  background-color: blue;
  padding: 20px;
  width: $story-max-width;
  max-width: 100%;
  //max-width: 100vw;
  //max-height: calc(100vh - $app-bar-height);
}

.story__scenes {
  position: relative;
  aspect-ratio: 1;
  max-width: 100vw;
  max-height: calc(100vh - $app-bar-height);
}

.story__configurator {
  position: relative;
  background-color: green;
  max-width: 600px;
}
</style>
