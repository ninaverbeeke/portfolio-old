<template>
  <div class="portfolio-gallery__item" :data-id="category">

    <div class="portfolio-gallery__item__inner" style="text-align: left">
      <img
        v-bind:src="require('@/assets/img/portfolio/thumbnails/' + fileName)"
      />
      <div class="portfolio-gallery__item__inner__title">{{ title }}</div>
      <div>
        {{ description }}
        {{ page }}
      </div>
      <div>
        <div
          v-for="(label, index) in labels"
          :key="index"
          class="portfolio-gallery__item__inner__label"
          :class="{ add_space_between: index > 0 }"
        >
          {{ label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class PortfolioItem extends Vue {
  @Prop(String) title;
  @Prop(String) description;
  @Prop(Array) labels;
  @Prop(String) category;
  @Prop(String) fileName;
  @Prop(String) page;
}
</script>
