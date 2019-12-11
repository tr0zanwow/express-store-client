<template>
 <v-card class="customStyle">
    <div v-if="getSearchText != ''">
     <div v-for="(log, index) in getFilteredAccessLog" :key="index">
        {{log}}<br>
      </div>
    </div>
     <div v-if="getSearchText == ''">
      <div v-for="(log, index) in getAccessLogStart" :key="index">
        {{log}}<br>
      </div>
     </div>
     
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
      logs: this.$store.state.accessData,
      isLoading: false
    }
  },
  computed:{
    getAccessLogStart(){
      return this.$store.state.accessData
    },
    getSearchText(){
      return this.$store.state.searchText
    },
    getFilteredAccessLog(){
      return this.$store.state.accessData.filter((filteredLog) => {
        return this.$store.state.searchText.toLowerCase().split(' ').every(searchText => filteredLog.toLowerCase().includes(searchText));
      });
    }
  },
  mounted(){
    this.getAccessLog()
  },
  created(){
    this.getAccessLog()
  },
  methods:{
    getAccessLog(){
      this.axios.get('http://ec2-35-165-134-117.us-west-2.compute.amazonaws.com:1337/accessLog').then((response) => {
        this.$store.commit("setAccessData",decodeURIComponent(escape(response.data)).split(" - - "))
})
    }
  }
};
</script>
