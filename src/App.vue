<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<style lang="scss">
::-webkit-scrollbar{
display: none;
overflow: hidden;

}

</style>

<script>
// import NavBarLayout from './components/NavBarLayout'
export default {
  name: 'App',
  components: {
    // NavBarLayout
  },
  data: () => ({
    
    }),
};
</script>
