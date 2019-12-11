<template>
   <v-toolbar
      color="#182848"
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

      <template
      
       v-slot:extension>
        <v-tabs
          centered
          slider-color="white"
          background-color="transparent"
        >
         <v-tab to="/accessLog">Access Log</v-tab>
          <v-tab to="/errorLog">Error Log</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
</template>

<script>
export default {
    name:'Navbar',
    methods:{
      
    }
}
</script>