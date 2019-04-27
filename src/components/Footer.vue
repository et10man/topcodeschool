<template>
  <v-footer
    app
    :fixed="footer.fixed"
    :clipped-left="footer.clippedLeft"
    height="auto"
    class="white--text"
    color="primary"
    dark
  >
    <v-layout justify-center row wrap>
      <v-flex py-3 text-xs-center
        >Copyright© 2019 {{ this.$companyName }}</v-flex
      >
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footer: {
        // sets the CSS position of the footer
        fixed: true,
        // sets if the footer is full width (true) or gives space to the drawer (false)
        clippedLeft: true
      }
    };
  }
};
</script>

<style scoped></style>
