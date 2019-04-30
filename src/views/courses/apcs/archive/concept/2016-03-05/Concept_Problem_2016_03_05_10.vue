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
      <v-flex xs3>
        <!-- (A)  1  (B)  4 (C)  3 (D)  33  -->

        <v-radio-group v-model="answerGroup">
          <v-radio label="16" color="error" value="error_1"></v-radio>
          <v-radio label="18" color="error" value="error_2"></v-radio>
          <v-radio label="19" color="success" value="success_3"></v-radio>
          <v-radio label="22" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>g(13)</div>
            <div>=g(11)+3</div>
            <div>=g(9)+3+3</div>
            <div>=g(7)+3+3+3</div>
            <div>=g(5)+3+3+3+3</div>
            <div>=g(3)+3+3+3+3+3</div>
            <div>=g(1)+3+3+3+3+3+3</div>
            <div>=1+3+3+3+3+3+3=19</div>
            <div>故answer=19</div>
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
      date: "2016-03-05",
      image: {
        description: require("@/assets/problems/concept/2016-03-05/10_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/10_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
