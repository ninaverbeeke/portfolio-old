<template>
  <div class="home-page">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="12">
          <h1>
            Hi! I'm Nina Verbeeke.
            <span class="portfolio__header__icon"> 👩🏽‍💻 </span>
          </h1>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col cols="12">
          <p class="home-page__subheader">
            Front-end developer at El Niño | Business intelligence <br />
            developer at AEMICS
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col cols="12">
          <div class="home-page__social-links">
            <a href="https://www.linkedin.com/in/nina-verbeeke/" target="_blank"
              ><b-icon-linkedin> </b-icon-linkedin
            ></a>
            <a href="mailto:ninaverbeeke@hotmail.com" target="_blank"
              ><b-icon-envelope> </b-icon-envelope>
            </a>
            <a href="https://www.instagram.com/ninaverbeeke/" target="_blank"
              ><b-icon-instagram></b-icon-instagram
            ></a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src "@/components/HelloWorld.vue"
import { BIconLinkedin, BIconEnvelope, BIconInstagram } from "bootstrap-vue";

export default {
  name: "Home",
  components: { BIconLinkedin, BIconEnvelope, BIconInstagram },
};
</script>
