<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <StateAbbreviator></StateAbbreviator>
    <HelloWorld msg="Hey mafacka, i deployed" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";
import StateAbbreviator from "../components/StateAbbreviator.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    StateAbbreviator
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  background-image: url("~@/assets/145290-OTJO7F-910.jpg");
  margin: 0 auto;
  width: 95%;
  position: relative;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
