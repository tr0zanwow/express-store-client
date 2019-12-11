<template>
  <v-app>
     <v-card>
    <v-toolbar
      color="deep-purple"
      dark
      flat
    >
      <v-toolbar-title>Express Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>

      <v-spacer></v-spacer>
      
      <v-btn text small color="white">Logout<v-icon right dark>mdi-logout</v-icon></v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="model"
          centered
          slider-color="white"
          background-color="transparent"
        >
         <v-tab to="/accessLog">Access Log</v-tab>
    <v-tab to="/errorLog">Error Log</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <router-view/>
     </v-card>
   
  </v-app>
</template>

<style lang="scss">
::-webkit-scrollbar{
display: none;
}
</style>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    model: 'tab-2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
     
    }),
};
</script>
