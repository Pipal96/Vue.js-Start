<template>
  <div id="app">
    <aside>
      <Sidebar></Sidebar>
    </aside>
    <component :is="messager"></component>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  import MyQuestions from './components/MyQuestions.vue'
  import Messager from './components/Messanger.vue'

  export default {
    name: 'App',
    components: {
      Sidebar,
      MyQuestions,
    },
    data() {
      return {
        myQuestions: MyQuestions,
        messager: Messager,
      }
    },
  
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .blod-text {
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin: 0 auto;
  }

  .text {
    font-weight: bold;
    color: #2a4249;
    margin: 0 auto;
  }

  .button-add {
    border: none;
    border-radius: 100px;
    color: #05212a;
    font-size: 35px;
    font-weight: bold;
    background-color: #2a4249;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .button-add:hover {
    background-color: #486068;
  }

  .button-add:focus {
    outline: none;
    box-shadow: 0px 0px 5px 3px #486068;
  }

  .button-add:active {
    box-shadow: 0px 0px 5px 3px #486068, 0px 0px 5px 5px #486068;
  }

  hr {
    margin: 0 auto;
    width: 80%;
    border: none;
    height: 1px;
    background: rgb(42, 66, 73);
    background: radial-gradient(circle, rgba(42, 66, 73, 1) 0%, rgba(5, 33, 42, 1) 100%);
  }

  ul {
    padding: 0;
    list-style: none;
  }

  .svg_icon {
    height: 25px;
    width: 25px;
    margin-right: 20px;
  }

  .svg-fill {
    fill: #2a4249;
    transition: 0.3s;
  }

  .links-tabs a:hover .svg-fill {
    fill: #486068;
    transition: 0.3s;
  }

  .text-capitalize {
    text-transform: capitalize;
  }
</style>