<template>
  <div class="project-page">
    <div class="project-page__back-button" @click="moveBackToPortfolio">
        <p>
          <b-icon-arrow-bar-left> </b-icon-arrow-bar-left> Back to portfolio
        </p>
    </div>

    <div class="project-page__title">
      <h1>VR Application</h1>
    </div>

    <div class="project-page__text-block">
      The installation is intended for children from the ages of 7 to 10. In
      times of Corona, it is important that everyone understands exactly what is
      going on in the world around them and why it is happening. This
      installation aims to teach these children regarding the different aspects
      of the COVID-19 in a friendly manner and easy to understand for these
      children. The installation consists of a tabletop, of which the layout is
      inspired by the classic “city” carpet that can be found in most childhood
      bedrooms. The idea behind using the carpet is to make the audience feel
      comfortable with the installation, as they see something they are familiar
      with. The installation will cover a variety of topics, each contributing
      to a final message. This includes the basic understanding of COVID-19
      (what it is, its origin and how it spreads) and the measures different
      governments have taken to prevent further spreading. Furthermore, the
      installation will also visualise what would happen if these measures were
      not taken, and provide an outlook of future prospects regarding the virus
      and how it affects daily life. To enhance the feeling of immersion, the
      ability to interact with the story will be added. The controllers provided
      with the VR set will enable the user to take various actions. One of these
      actions is the option to engage in a somewhat realistic dialogue with the
      NPCs (“Dora the Explorer”-style). The dialogue between NPCs will be voice
      recorded to alleviate the target audience from the burden of reading long
      pieces of text.
    </div>
    <div>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/fM-yU9PWZ3g"
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
export default class VirtualReality extends Vue {  moveBackToPortfolio(){
    this.$emit('clicked', '')
  }}
</script>
