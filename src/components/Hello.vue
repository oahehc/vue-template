<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org"
           target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org"
           target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue"
           target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs"
           target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/"
           target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/"
           target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/"
           target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/"
           target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue"
           target="_blank">awesome-vue</a></li>
    </ul>
    <h2>boostrap-vue</h2>
    <b-button variant="success">BUTTOM</b-button>
    <h2>font-awesome</h2>
    <i class="fa fa-address-book"
       aria-hidden="true"></i>
    <h2>Vuex</h2>
    <p>Current user: {{getUser}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters(['getUser']),
  },
}
</script>

<style lang="scss">
@import '../style/main.scss';
.hello {
  text-align: center;
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
}
</style>
