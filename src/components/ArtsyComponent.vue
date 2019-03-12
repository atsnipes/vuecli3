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
  async mounted() {
    console.log("mounting...");
    const artsyClient = new ArtsyClient();
    const result = await artsyClient.artsySetToken();
    const resulta = await artsyClient.getByPost("andy-warhol");
    console.log(`result a = ${JSON.stringify(resulta)}`)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
