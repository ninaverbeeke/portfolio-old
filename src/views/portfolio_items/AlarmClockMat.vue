<template>
  <div class="project-page">
    <div class="project-page__back-button" @click="moveBackToPortfolio">
        <p>
          <b-icon-arrow-bar-left> </b-icon-arrow-bar-left> Back to portfolio
        </p>
    </div>

    <div class="project-page__title">
      <h1>Alarm Clock Mat</h1>
    </div>

    <div class="project-page__text-block">
      We all know the feeling: struggling to get out of bed in the morning.
      Chances are you aren't springing out of bed and applauding the a.m. hours,
      at least not until you've tapped the snooze button a few too many times
      and then find yourself rushing to work or school. I decided to make a
      solution for this daily problem. My solution is the “Alarm Clock Mat”. It
      is a soft, grey-colored mat. You can set your alarm on a website and also
      decide which frequency of the alarm tone you want (high, middle or low).
      When the alarm goes off, you need to get out of bed and stand on the mat.
      The mat has sensors; once it senses that you are standing on the mat, the
      alarm will stop. The advantage is that you are immediately out of bed. To
      make the Alarm Clock Mat, I used an Arduino UNO RW that needs to be
      connected to a computer. Below a picture of the inside of the
      construction:
    </div>
    <div>
      <img src="@/assets/img/portfolio/alarm-clock-mat/1.jpg" width="80%" />
    </div>
    <div>
      <br />
      The elements I used:
      <ul>
        <li>4x Load Cells (50 kg)</li>
        <li>Load Cell amplifier HX711</li>
        <li>Real Time Clock module DS1302</li>
        <li>Active Buzzer Alarm Module - LCD-shield</li>
        <li>Keypad LCD1602</li>
      </ul>
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
export default class AlarmClockMat extends Vue {
  moveBackToPortfolio(){
    this.$emit('clicked', '')
  }
}
</script>
