<template>
  <div
    ref="characterItem"
    class="character-item"
    v-if="character"
    :style="characterItemStyleObject"
  >
    <div
      ref="characterSentenceContainer"
      class="character__sentence-container"
      v-if="character.sentence"
    >
      <div
        ref="sentence"
        class="character__sentence"
        :style="{ height: sentenceHeight }"
      >
        <p
          ref="sentenceText"
          :style="{
            fontSize: sentenceFontSize,
          }"
        >
          <span class="character__name">{{ character.name || "No name" }}</span
          >: <span>{{ character.sentence }}</span>
        </p>
      </div>
    </div>
    <div ref="characterImageContainer" class="character__image-container">
      <img
        class="character__image"
        alt="character image"
        :src="character.imageSrc"
        :style="{ transform: `scaleX(${character.isFlipped ? -1 : 1})` }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Character } from "@/models/character.models";
import { Position } from "@/models/position.models";

export default defineComponent({
  name: "CharacterItem",
  props: {
    character: {
      required: true,
      type: Object as PropType<Character>,
    },
  },
  data() {
    return {
      sentenceHeight: "50px",
      sentenceMinHeightPx: 50,
      sentenceFontSize: "25px",
    };
  },
  created() {
    window.addEventListener("resize", this.updateSentenceHeight);
    window.addEventListener("resize", this.updateSentenceFontSize);
  },
  mounted() {
    this.updateSentenceHeight();
    setTimeout(() => this.updateSentenceFontSize(), 0);
  },
  unmounted() {
    window.removeEventListener("resize", this.updateSentenceHeight);
    window.removeEventListener("resize", this.updateSentenceFontSize);
  },
  methods: {
    getSentenceFontSize() {
      if (!this.$refs.characterItem) {
        debugger;
        return this.sentenceFontSize;
      }

      /*const sentenceHeight = (this.$refs.sentenceText as HTMLElement)
        ?.clientHeight;
      const sentencePaddingBlock =
        parseInt(
          window
            .getComputedStyle(this.$refs.sentence as HTMLElement, null)
            .getPropertyValue("padding-block")
        ) * 2;*/
      const initialFontSize = parseInt(this.sentenceFontSize);
      const sentenceTextScrollHeight = (this.$refs.sentenceText as HTMLElement)
        ?.scrollHeight;
      const sentenceTextHeight = (this.$refs.sentenceText as HTMLElement)
        ?.clientHeight;

      const hasTextOverflowed = (height: number, scrollHeight: number) =>
        scrollHeight > height;

      /*console.log({
        sentenceTextHeight,
        sentenceTextScrollHeight,
        hasTextOverflowed: hasTextOverflowed(
          sentenceTextHeight,
          sentenceTextScrollHeight
        ),
      });*/

      const decreaseFontSize = (initialFontSize: number, amount = 1) =>
        initialFontSize - amount;

      const fontSize = initialFontSize;
      if (sentenceTextHeight < sentenceTextScrollHeight) {
        // Need to reduce font size;
        const newFontSize = decreaseFontSize(fontSize);
        // (this.$refs.sentenceText as HTMLElement)?.style.fontSize = newFontSize;
        // console.log(this.$refs.sentenceText as HTMLElement);
        return "20px";
      }

      return this.sentenceFontSize;
    },
    getSentenceHeight() {
      const characterItemHeight = (this.$refs.characterItem as HTMLElement)
        ?.clientHeight;

      const characterImageContainerHeight = (
        this.$refs.characterImageContainer as HTMLElement
      )?.clientHeight;
      const sentenceHeight = (this.$refs.sentence as HTMLElement)?.clientHeight;
      const sentencePaddingBlock =
        parseInt(
          window
            .getComputedStyle(this.$refs.sentence as HTMLElement, null)
            .getPropertyValue("padding-block")
        ) * 2;

      const sentenceTextScrollHeight = (this.$refs.sentenceText as HTMLElement)
        ?.scrollHeight;

      /*console.log({
        characterItemHeight,
        characterImageContainerHeight,
        sentenceHeight,
        sentencePaddingBlock,
      });*/

      if (sentenceHeight <= sentencePaddingBlock) {
        return `${this.sentenceMinHeightPx}px`;
      }

      const newSentenceHeight: number =
        characterItemHeight -
        characterImageContainerHeight -
        sentencePaddingBlock;

      if (newSentenceHeight <= this.sentenceMinHeightPx) {
        return `${this.sentenceMinHeightPx}px`;
      }
      const hasTextOverflowed =
        newSentenceHeight > sentenceTextScrollHeight + sentencePaddingBlock;
      if (hasTextOverflowed) {
        // TODO: uncomment if you want to use smaller bubble in case of text with few words
        return `${sentenceTextScrollHeight + sentencePaddingBlock}px`;
      }
      return `${newSentenceHeight}px`;
    },
    updateSentenceHeight() {
      this.sentenceHeight = this.getSentenceHeight();
    },
    updateSentenceFontSize() {
      this.sentenceFontSize = this.getSentenceFontSize();
    },
  },
  computed: {
    characterItemStyleObject() {
      if (!this.character.position) {
        return {
          bottom: 0,
        } as Position;
      }
      const { left, right } = this.character.position;
      return {
        ...(left !== undefined && { left }),
        ...(right !== undefined && { right }),
      };
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.character-item {
  position: absolute;
  bottom: 0;
  width: 50%;
  height: 100%;
  padding-inline: 10px;
  display: flex;
  flex-direction: column;
}

.character__sentence-container {
  flex-grow: 1;
  position: relative;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;
  max-height: 100%;
  max-width: 100%;
}

.character__image-container {
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
}

.character__name {
  position: relative;
  font-weight: bold;
}

.character__sentence {
  position: relative;
  padding: 15px;
  border-radius: 5px;
  background-color: white;
  color: black;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:after {
    $bubble-arrow-size: 25px;
    content: "";
    position: absolute;
    bottom: -#{$bubble-arrow-size};
    left: 50%;
    transform: translate(-50%, -50%);
    border-left: #{$bubble-arrow-size} solid transparent;
    z-index: 1;
    border-top: #{$bubble-arrow-size} solid white;
    border-right: #{$bubble-arrow-size} solid transparent;
  }

  p {
    position: relative;
    margin: 0;
    padding: 0;
    font-size: 20px;
    text-align: center;
    max-height: 100%;
    overflow: auto;
    //overflow: hidden;
  }
}

.character__image {
  display: block;
  width: 100%;
  aspect-ratio: 1;
}
</style>
