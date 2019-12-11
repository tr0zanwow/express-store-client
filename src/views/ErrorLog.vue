<template>
 <v-card class="customStyle">
      {{logs}}
</v-card>
</template>

<style lang="scss" scoped>
.customStyle{
  margin:1rem;
}
</style>

<script>
export default {
  name: 'ErrorLog',
  data(){
    return{
      logs: '',
      isLoading: false
    }
  },
  created(){
    this.getErrorLog()
  },
  methods:{
    getErrorLog(){
      this.axios.get('http://ec2-35-165-134-117.us-west-2.compute.amazonaws.com:1337/errorLog').then((response) => {
        this.logs = response.data
})
    }
  }
};
</script>
