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
  name: 'AccessLog',
  data(){
    return{
      logs: '',
      isLoading: false
    }
  },
  created(){
    this.getAccessLog()
  },
  methods:{
    getAccessLog(){
      this.axios.get('http://ec2-35-165-134-117.us-west-2.compute.amazonaws.com:1337/accessLog').then((response) => {
        this.logs = JSON.parse(JSON.stringify(response.data))
})
    }
  }
};
</script>
