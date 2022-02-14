<template>
  <div class="project-page">
    <div class="project-page__back-button" @click="moveBackToPortfolio">
        <p>
          <b-icon-arrow-bar-left> </b-icon-arrow-bar-left> Back to portfolio
        </p>
    </div>

    <div class="project-page__title">
      <h1>Data-driven Inventory Management</h1>
    </div>

    <div class="project-page__text-block">
      The explosion in the availability and accessibility of data provides
      opportunities to improve inventory management within a company. Reviewed
      studies into the topic of inventory management demonstrate that enhancing
      an organization's inventory management can significantly improve the
      quality of the outcome of business performance. The literature review
      confirmed that data analytics can be used to enhance information
      extraction and decision-making in inventory management. A design process
      was developed to outline the phases that were followed in this graduation
      project. The design process of this graduation project consists of five
      phases: (1) Empathise, (2) Ideate, (3) Converge, (4) Realize, and (5)
      Evaluate. Stakeholders were actively involved in each of these phases. In
      this research, a tool was developed for analysing and visualizing data in
      order to derive value from inventory data. Such a system is expected to
      enhance the effectiveness and efficiency of handling inventory. In
      addition, it allows automating several processes within a company. The
      proposed tool was implemented and evaluated at AEMICS, an electronics
      design and manufacturing company.
    </div>
    <div>
      <img
        src="@/assets/img/portfolio/graduation-assignment/1.png"
        width="80%"
      />
      <img
        src="@/assets/img/portfolio/graduation-assignment/2.png"
        width="55%"
      />
      <img
        src="@/assets/img/portfolio/graduation-assignment/3.png"
        width="90%"
      />
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
export default class GraduationAssignment extends Vue {  moveBackToPortfolio(){
    this.$emit('clicked', '')
  }}
</script>
