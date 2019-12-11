<template>
 <v-card class="customStyle">
    <div v-if="getSearchText != ''">
     <div v-for="(log, index) in getFilteredErrorLog" :key="index">
        {{log}}<br>
      </div>
    </div>
     <div v-if="getSearchText == ''">
      <div v-for="(log, index) in getErrorLogStart" :key="index">
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
  name: 'ErrorLog',
  data(){
    return{
      logs: this.$store.state.errorData,
      isLoading: false
    }
  },
  computed:{
    getErrorLogStart(){
      return this.$store.state.errorData
    },
    getSearchText(){
      return this.$store.state.searchText
    },
    getFilteredErrorLog(){
      return this.$store.state.errorData.filter((filteredLog) => {
        return this.$store.state.searchText.toLowerCase().split(' ').every(searchText => filteredLog.toLowerCase().includes(searchText));
      });
    }
  },
  mounted(){
    this.getErrorLog()
  },
  created(){
    this.getErrorLog()
  },
  methods:{
    getErrorLog(){
      this.axios.get('http://ec2-35-165-134-117.us-west-2.compute.amazonaws.com:1337/errorLog').then((response) => {
        this.$store.commit("setErrorData",decodeURIComponent(escape(response.data)).split("[error]"))
    })
    }
  }
};
</script>