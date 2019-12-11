<template>
<div>
<Navbar/>
<router-view/>
</div>
</template>

<style lang="scss">
    
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