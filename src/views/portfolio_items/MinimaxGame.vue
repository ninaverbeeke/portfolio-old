<template>
  <div class="project-page">
    <div class="project-page__back-button" @click="moveBackToPortfolio">
        <p>
          <b-icon-arrow-bar-left> </b-icon-arrow-bar-left> Back to portfolio
        </p>
    </div>

    <div class="project-page__title">
      <h1>Minimax AI Game</h1>
    </div>

    <div class="project-page__text-block">
      The game is played on an 8x8 square LED matrix. This game is a variant of
      the game Reversi or Othello. The player can make a move by using a Wii
      Nunchuck. After a move is made, all LEDs that are on any line segment
      starting from the new LED, in one of the 8 cardinal or diagonal
      directions, and are between this LED and the furthest LED of the same
      color, with no empty positions between it, are flipped over to show their
      alternate colour. When the board is full, LEDs of each colour are counted.
      Each player receives a score that is equal to the number of LEDs with
      their colour.
    </div>
    <div>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/gt8YKLCRw3w"
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
export default class MinimaxGame extends Vue {  moveBackToPortfolio(){
    this.$emit('clicked', '')
  }}
</script>
