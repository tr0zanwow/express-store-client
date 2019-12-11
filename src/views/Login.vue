<template>
<div id="gradientBg"><br><br><br>
  <v-card
    max-width="485"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">Express Store Login</v-list-item-title>
        <v-list-item-subtitle>Powered by AWS Cognito</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-container>
      <amplify-authenticator></amplify-authenticator>
    </v-container>
  </v-card>
  </div>
</template>

<style lang="scss" scoped>
#gradientBg{
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #4b6cb7 , #182848);
}
</style>

<script>
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
export default {
  name:'Login',
  data() {
      return {
  }},
  created(){
    this.getUser()
    AmplifyEventBus.$on('authState',info=>{
      if(info == 'signedIn'){
        this.getUser();
      }
      else{
        this.$store.commit("setisAuthenticated",false)
      }
    })
  },
  methods:{
    async getUser(){
      try {
        const user = await Auth.currentAuthenticatedUser();
          this.$store.commit("setisAuthenticated",true)
          this.$store.commit("setUserData",user)
          this.$router.push("/")
      } catch (error) {
          this.$store.commit("setisAuthenticated",false)

        
      }
    }
  }
}
</script>