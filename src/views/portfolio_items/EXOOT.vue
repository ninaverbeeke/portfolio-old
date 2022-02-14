<template>
  <div class="project-page">
    <div class="project-page__back-button" @click="moveBackToPortfolio">
        <p>
          <b-icon-arrow-bar-left> </b-icon-arrow-bar-left> Back to portfolio
        </p>
    </div>

    <div class="project-page__title">
      <h1>EXOOT Art installation</h1>
    </div>

    <div class="project-page__text-block">
      In the third module, Living and Working Tomorrow, I worked on a project
      called ‘If Pigs Could Fly’, in collaboration with Bram van Driel, Leon
      Groothaar, German Savchenko and Jesse Visser. For this project we were
      inspired by devices like the SkyCam to build a simpler version of a cable
      suspended flying system. The aim of this project was to produce a system
      that is capable of suspending the artworks made by EXOOT above their
      spectators. EXOOT is a company based in Utrecht, the Netherlands, that
      performs with interactive objects and installations at festivals and art
      events. The final product is a construction of wires and pulleys with
      servo motors to control the movement of the suspended object. The motors
      can be controlled using an application on a smartphone or by a physical
      controller. The artwork can be controlled by a person or autonomously over
      a prefix path.
    </div>
    <div>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Jtyz9muK7S4?controls=0"
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
export default class EXOOT extends Vue {  moveBackToPortfolio(){
    this.$emit('clicked', '')
  }}
</script>
