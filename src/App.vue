<template>
  <v-app>
    <Navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style lang="scss">
::-webkit-scrollbar{
display: none;
}
</style>

<script>
import Navbar from './components/NavBar';

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    
  }),
};
</script>
