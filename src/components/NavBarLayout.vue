<template>
<div class="disableScroll">
<Navbar/>
<router-view
class="fixedScroll"
></router-view>
</div>
</template>

<style lang="scss">
   .fixedScroll{
    ::-webkit-scrollbar {
    display: block;
    width: 10px;
}
::-webkit-scrollbar-track {
    background-color: rgba(245, 245, 245, 0.151);
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #1b1d1f; 
}
   } 
</style>

<script>
import Navbar from './NavBar'
export default {
    name:'MainLayout',
    components:{
      Navbar
    },
    methods:{
      
    }
}
</script>