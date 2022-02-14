<template>
  <h1>hoi {{ title }} xx</h1>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class PortfolioPage extends Vue {
  @Prop(String) title;
  //   @Prop(String) description;
  //   @Prop(Array) labels;
  //   @Prop(String) category;
  //   @Prop(String) fileName;
}
</script>
