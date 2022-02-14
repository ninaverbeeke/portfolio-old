<template>
  <div class="project-page">
    <div class="project-page__back-button" @click="moveBackToPortfolio">
        <p>
          <b-icon-arrow-bar-left> </b-icon-arrow-bar-left> Back to portfolio
        </p>
    </div>

    <div class="project-page__title">
      <h1>Hermes Smart Mirror</h1>
    </div>

    <div class="project-page__text-block">
      The product that is developed during the module Computer Systems is a
      smart mirror called Hermes. Smart mirrors perfectly fit in a world where
      screens and data are everywhere, ready to feed you whatever information
      you need at a moment’s notice. We believe that a smart mirror is useful
      for any type of user. For example, when you look in the mirror at the
      start of the day it would be nice if the mirror has the ability to display
      information on it. A smart mirror can be used to display e.g. weather
      forecasts, a calendar schedule, a Twitter feed and much more. In this way,
      people can get informed while brushing their teeth or washing their face.
      The primary motivation behind the development of a smart mirror is to
      improve quality of life. The mirror provides an easy and convenient way to
      stay up-to-date and it allows people to multitask. Since smart mirrors are
      already developed, new requirements will be added to our application. The
      most important unique feature of Hermes is that it will use Google login
      to access Google calendar and Google Task lists. Another unique feature of
      our application is that users will be able to connect to the mirror
      through an Android application in order to set up their profile and
      presets. The smart mirror will essentially have two interfaces. The first
      one is an Android app through which the user can control the smart mirror.
      The initial setup of the smart mirror will require first pairing the
      mirror with the Android device through a bluetooth connection. Upon
      successful pairing, the user can select a Wi-Fi network to connect the
      smart mirror to. The main purpose of the app, outside of the initial
      setup, is for adding users and setting user presets. The second user
      interface will be the mirror itself. Although there will not be a touch
      screen or mouse/keyboard, the user will be able to change the data shown
      from the users’ preset default view through voice commands.
    </div>
    <div>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/HQsdr_O16P0"
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
export default class Hermes extends Vue {  moveBackToPortfolio(){
    this.$emit('clicked', '')
  }}
</script>
