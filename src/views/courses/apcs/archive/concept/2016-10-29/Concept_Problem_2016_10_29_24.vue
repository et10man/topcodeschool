<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs5>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs5>
        <v-img :src="image.code"></v-img>
      </v-flex>
      <v-flex xs2></v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio label="128" color="error" value="error_1"></v-radio>
          <v-radio label="2187" color="success" value="success_2"></v-radio>
          <v-radio label="6561" color="error" value="error_3"></v-radio>
          <v-radio label="1024" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>G(3, 7)</div>
            <div>= 3 * G(3, 6)</div>
            <div>= 3 * 3 * G(3, 5)</div>
            <div>= 3 * 3 * 3 * G(3, 4)</div>
            <div>= 3 * 3 * 3 * 3 * G(3, 3)</div>
            <div>= 3 * 3 * 3 * 3 * 3 * G(3, 2)</div>
            <div>= 3 * 3 * 3 * 3 * 3 * 3 * G(3, 1)</div>
            <div>= 3 * 3 * 3 * 3 * 3 * 3 * 3 * G(3, 0)</div>
            <div>= 3 * 3 * 3 * 3 * 3 * 3 * 3 * 1</div>
            <div>= 3^7 = 2187</div>
            <div>故answer = 2187</div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      date: "2016-10-29",
      image: {
        description: require("@/assets/problems/concept/2016-10-29/24_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/24_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped>
.no-dot {
  list-style-type: none;
}
</style>
