<template>
    <v-toolbar
      color="cyan"
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
    </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>