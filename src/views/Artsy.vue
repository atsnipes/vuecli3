<template>
  <div class="artsy">
    <ArtsyComponent></ArtsyComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import ArtsyComponent from "../components/ArtsyComponent.vue";

export default {
  name: "artsy",
  components: {
    ArtsyComponent
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
