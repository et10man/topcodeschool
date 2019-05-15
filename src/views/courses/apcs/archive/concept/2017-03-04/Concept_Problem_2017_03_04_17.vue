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
      <v-flex xs6>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="n(n+1)√⌊log2 𝑛⌋"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio label="n^2(n+1)/2" color="error" value="error_2"></v-radio>
          <v-radio
            label="n(n+1)⌊log2n + 1⌋/2"
            color="success"
            value="success_3"
          ></v-radio>
          <v-radio label="n(n+1)/2" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs6>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>以 n = 4為例子</div>
            <div>
              <v-img :src="image.answer"></v-img>
            </div>

            <div>x = 12+9+6+3 = 30</div>
            <div></div>
            <div>(A) n(n+1)√⌊log2 𝑛⌋ = 4*5*√2 (NG)</div>
            <div>(B) n^2(n+1)/2 = 4*4*5/2 = 40 (NG)</div>
            <div>(C) n(n+1)⌊log2n + 1⌋/2 = 4*5*3/2 = 30 (OK)</div>
            <div>(D) n(n+1)/2 = 4*5/2 = 10 (NG)</div>
            <div>故answer = n(n+1)⌊log2n + 1⌋/2</div>
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
      date: "2017-03-04",
      image: {
        description: require("@/assets/problems/concept/2017-03-04/17_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/17_code.png"),
        answer: require("@/assets/problems/concept/2017-03-04/17_answer.png")
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
