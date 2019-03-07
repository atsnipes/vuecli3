<template>
  <div class="artsy-test">
    <p>
      im the artsy test
    </p>
  </div>
</template>

<script>
import ArtsyClient from "../api/artsyClient.js";

export default {
  name: "ArtsyComponent",
  props: {
    state: String,
    response: String
  },
  mounted() {
    console.log("mounting...");
    const artsyClient = new ArtsyClient();
    console.log(`artsyClient created = ${artsyClient}`);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
