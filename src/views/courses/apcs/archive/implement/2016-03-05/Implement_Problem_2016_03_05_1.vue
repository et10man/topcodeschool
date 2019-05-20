<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-btn outline color="info">
          <a
            href="https://drive.google.com/open?id=1TMv7HQmYGqLNdkZ-9z81Jul-VHdIY5rb"
            target="_blank"
            download
            class="hyperlink"
            >程式碼下載</a
          >
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      date: "2016-03-05"
    };
  }
};
</script>

<style lang="scss" scoped>
.hyperlink {
  text-decoration: None;
}
</style>
