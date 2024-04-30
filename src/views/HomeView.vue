<template>
  <div class="home">
    <HelloWorld222 msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld222 from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld222
  }
}
</script>
