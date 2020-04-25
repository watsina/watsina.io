<template>
  <v-app>
    <!-- <app-bar></app-bar> -->
    <v-content>
      <hero></hero>

      <about-us></about-us>

      <!-- <contact-us></contact-us> -->
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/dashboard/Footer.vue';
import AppBar from '@/components/dashboard/AppBar.vue';
import Hero from '@/components/sections/Hero.vue';
import AboutUs from '@/components/sections/About.vue';
import ContactUs from '@/components/sections/ContactUs.vue';
export default {
  name: 'Home',
  // eslint-disable-next-line vue/no-unused-components
  components: { Footer, AppBar, Hero, AboutUs, ContactUs },
};
</script>
