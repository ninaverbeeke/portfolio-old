<template>
  <div class="project-page">
     <div class="project-page__back-button" @click="moveBackToPortfolio">
        <p>
          <b-icon-arrow-bar-left> </b-icon-arrow-bar-left> Back to portfolio
        </p>
    </div>

    <div class="project-page__title">
      <h1>The Molecules Game</h1>
    </div>

    <div class="project-page__text-block">
      Studies have shown that high school students are often intimidated by
      science subjects. On top of that, issues with intrinsic motivation among
      high school students are showing a steady increase over the years.
      Inquiry-based learning, in combination with current technological devices,
      has proven to create a comfortable and personal learning environment that
      could tackle the issue of low intrinsic motivation levels. A few
      prototypes were made in order to gauge whether high school students would
      accept a system that they need to interact with digitally, and physically.
      Evaluations with end users were conducted in order to test the acceptance
      and effectiveness of these prototypes. The end goal was to make high
      school students more motivated to learn about science subjects, and make
      learning more fun for them. To ensure high effectiveness and acceptance
      amongst high school students, they have been a large part of the research
      and have influenced the product design immensely. Based on evaluations,
      design choices were made that ultimately lead to the “ Molecules Game”, an
      interactive, educational playing board where students learn about how to
      build molecular structures. The playing board is connected to a computer
      screen that gives the users the task to build molecular structures by
      means of putting down atoms on the appropriate places on the playing
      board.
    </div>
    <div>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/pxkQIOUzchg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

      <div class="project-page__back-button-bottom">
      <b-container>
        <b-row class="justify-content-md-center">
          <b-col cols="12">
            <b-button variant="light" @click="moveBackToPortfolio"> See more work</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { BIconArrowBarLeft } from "bootstrap-vue";

@Component({
  components: { BIconArrowBarLeft },
})
export default class MoleculesGame extends Vue {  moveBackToPortfolio(){
    this.$emit('clicked', '')
  }}
</script>
