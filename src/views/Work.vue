<template>
<div>
  <div v-if="current_page.length === 0" class="container portfolio">
    <div class="row portfolio__header">
      <h1>
        Portfolio
        <span class="portfolio__header__icon"> 💡 </span>
      </h1>
      <span>
        This page contains an overview of the projects on which I have worked.
        If you have opened this website on a computer, you can narrow down the
        projects by using the filters listed below. More information is
        available by clicking on an item.
      </span>
    </div>

    <div class="row portfolio__filters">
      <div class="portfolio__filters__buttons">
        <ul id="filter-btns">
          <li class="active" data-target="all">All</li>
          <li data-target="Programming">Programming</li>
          <li data-target="Electronics">Electronics</li>
          <li data-target="Data science">Data science</li>
          <li data-target="UX Research">UX Research</li>
        </ul>
      </div>
      <hr />
    </div>

    <div class="row">
      <div class="portfolio-gallery">
        <template v-for="item in portfolio_items">
          <!-- eslint-disable-next-line vue/require-v-for-key -->
          <!-- eslint-disable-next-line vue/valid-v-for-->
          <portfolio-item
            :title="item.title"
            :description="item.description"
            :labels="item.portfolio_l"
            :category="item.category"
            :fileName="item.fileName"
            :page="item.page"
            @click.native="on_portfolio_click(item['page'])"
          >
          </portfolio-item>
        </template>
      </div>
    </div>
  </div>

  <div v-else-if="current_page==='/graduation_assignment'"> 
  <graduation-assignment @clicked="goBackToOverview"> </graduation-assignment>
  </div>
  <div v-else-if="current_page==='/minimax_game'"> 
  <minimax-game @clicked="goBackToOverview"> </minimax-game>
  </div>
  <div v-else-if="current_page==='/hermes'"> 
  <hermes @clicked="goBackToOverview"> </hermes>
  </div>
  <div v-else-if="current_page==='/vr_application'"> 
  <vr-app @clicked="goBackToOverview"> </vr-app>
  </div>
  <div v-else-if="current_page==='/molecules_game'"> 
  <molecules-game @clicked="goBackToOverview"> </molecules-game>
  </div>
  <div v-else-if="current_page==='/exoot'"> 
  <exoot @clicked="goBackToOverview"> </exoot>
  </div>
  <div v-else-if="current_page==='/alarm_clock_mat'"> 
  <alarm-clock-mat @clicked="goBackToOverview"> </alarm-clock-mat>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { BIcon, BIconInstagram } from "bootstrap-vue";
import PortfolioItem from "../components/PortfolioItem.vue";
import AlarmClockMat from "./portfolio_items/AlarmClockMat.vue"
import EXOOT from "./portfolio_items/EXOOT.vue"
import GraduationAssignment from "./portfolio_items/GraduationAssignment.vue"
import Hermes from "./portfolio_items/Hermes.vue"
import MinimaxGame from "./portfolio_items/MinimaxGame.vue"
import MoleculesGame from "./portfolio_items/MoleculesGame.vue"
import VRApp from "./portfolio_items/VRApp.vue"

@Component({
  components: { BIcon, BIconInstagram, PortfolioItem, AlarmClockMat, EXOOT,GraduationAssignment, Hermes, MinimaxGame, MoleculesGame, VRApp},
})
export default class Work extends Vue {
  current_page = "";
  portfolio_labels = ["a", "b", "c"];

  portfolio_items = [
    {
      title: "Data-driven inventory management",
      description:
        "A microservice that collects data, provides feedback on remaining stock, makes order suggestions, and visualizes data in the employee portal",
      portfolio_l: [
        "Literature research",
        "Python",
        "Data science",
        "UX design",
      ],
      category: "Programming,Data science,UX Research",
      fileName: "thumbnail_graduation-project.png",
      page: "/graduation_assignment",
    },
    {
      title: "AI Game",
      description:
        "The game is played on a LED matrix. This game is a variant of the game Reversi. The player can make a move by using a Wii Nunchuck. ",
      portfolio_l: ["AI", "Python", "Arduino"],
      category: "Programming,Electronics,Data science",
      fileName: "thumbnail_minimax.png",
      page: "/minimax_game",
    },
    {
      title: "Smart Mirror",
      description:
        "The Smart Face Recognition Mirror that will be created in this project is able to display useful information for the current user. ",
      portfolio_l: ["Android", "Raspberry Pi"],
      category: "Programming,Electronics",
      fileName: "thumbnail_hermes.png",
      page: "/hermes",
    },
    {
      title: "VR Application",
      description:
        "This installation aims to teach these children regarding the different aspects of the COVID-19 in a friendly manner.",
      portfolio_l: ["VR", "Unity"],
      category: "Programming",
      fileName: "thumbnail_vr-application.png",
      page: "/vr_application",
    },
    {
      title: "The Molecules Game",
      description:
        "The Molecules Game is an interactive, educational playing board where students learn about how to build molecular structures.",
      portfolio_l: ["Arduino", "UX Research"],
      category: "Programming,Electronics,UX Research",
      fileName: "thumbnail_molecules-game.png",
      page: "/molecules_game",
    },
    {
      title: "EXOOT Art installation",
      description:
        "A construction of wires and pulleys with servo motors to control the movement of the suspended object. ",
      portfolio_l: ["Arduino", "Processing"],
      category: "Programming,Electronics",
      fileName: "thumbnail_exoot.png",
      page: "/exoot",
    },
    {
      title: "Alarm Clock Mat",
      description:
        "The Alarm Clock Mat assists you in getting out of bed since you must stand on the mat to switch off the alarm. ",
      portfolio_l: ["Arduino", "Processing"],
      category: "Programming,Electronics",
      fileName: "thumbnail_alarm-clock-mat.png",
      page: "/alarm_clock_mat",
    },
  ];

  on_portfolio_click(page){
    console.log('joejoe');
    console.log(page);
    this.current_page = page;
  }

  goBackToOverview(){
    this.current_page="";
  }

  mounted() {
    const filterButtons = document.querySelector("#filter-btns").children;
    const items = document.querySelector(".portfolio-gallery").children;
    for (let i = 0; i < filterButtons.length; i++) {
      filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
          filterButtons[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");

        for (let k = 0; k < items.length; k++) {
          const categories = items[k].getAttribute("data-id").split(",");
          items[k].style.display = "none";
          if (categories.includes(target)) {
            items[k].style.display = "block";
          }
          if (target == "all") {
            items[k].style.display = "block";
          }
        }
      });
    }
  }
}
</script>
