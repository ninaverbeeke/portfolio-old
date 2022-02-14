<template>
  <div id="app" class="website-container">
    <div class="navigation-bar">
      <b-navbar toggleable="lg" style="padding: 0">
        <b-navbar-brand
          style="
            font-size: 30px;
            font-family: 'Arial';
            font-weight: 500px;
            padding: 0;
          "
          :to="{ path: '/' }"
          >NINA</b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item :to="{ path: '/' }"> Home </b-nav-item> -->
            <b-nav-item :to="{ path: '/about' }">
              <span> About </span>
            </b-nav-item>
            <b-nav-item :to="{ path: '/work' }"> Work </b-nav-item>
            <!-- <b-nav-item href="#"> Portfolio </b-nav-item>
          <b-nav-item href="#"> Contact </b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {}
</script>

<style src="./assets/css/styles.scss" lang="scss"></style>
