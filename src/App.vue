<template>
  <div id="app">
    <v-scrollbtn :text="text"></v-scrollbtn>
  </div>
</template>
<script>
import VScrollbtn from '@/assets/index'
export default {
  name: 'app',
  data () {
    return {
     text:'首页'
    }
  },
  components:{
    VScrollbtn
  }
}
</script>


