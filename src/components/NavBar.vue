<template>
   <v-toolbar
      color="#182848"
      dark
      flat
    >
      <v-toolbar-title>Express Stores</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model.lazy="searchField"
        @change="addSeachTextToStore"
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>

      <v-spacer></v-spacer>
      
      <v-btn @click="signOut" text small color="white">Logout<v-icon right dark>mdi-logout</v-icon></v-btn>

      <template
      
       v-slot:extension>
        <v-tabs
          centered
          slider-color="green"
          background-color="transparent"
        >
         <v-tab to="/accessLog">Access Log</v-tab>
          <v-tab to="/errorLog">Error Log</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
    name:'Navbar',
    data(){
      return{
        searchField: ""
      }
    },
    methods:{
      signOut(){
        Auth.signOut()
        .then(() => {
          this.$store.commit("setisAuthenticated",false)
          this.$router.push({ path: 'login' })
        })
        .catch(() => {});
      },
      addSeachTextToStore(){
        this.$store.commit("setSearchText",this.searchField)
      }
    }
}
</script>