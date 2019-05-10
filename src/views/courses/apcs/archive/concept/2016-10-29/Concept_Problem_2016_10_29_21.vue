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
          <v-radio
            label="((2*a)+2) * G(a, x - 1)"
            color="success"
            value="success_1"
          ></v-radio>
          <v-radio
            label="(a+5) * G(a-1, x - 1)"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="((3*a)-1) * G(a, x - 1)"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="(a+6) * G(a, x - 1)"
            color="error"
            value="error_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>G(2, 0) = 1</div>
            <div>(A) ((2*a)+2) * G(a, x - 1) = 1</div>
            <div>(B) (a+5) * G(a-1, x - 1) = 1</div>
            <div>(C) ((3*a)-1) * G(a, x - 1) = 1</div>
            <div>(D) (a+6) * G(a, x - 1) = 1</div>
            <div>-------------------------------------------------</div>
            <div>G(2, 1) = 6</div>
            <div>
              (A) ((2*a)+2) * G(a, x - 1) = (2*2+2) * G(2,0) = 6 * 1 = 6
            </div>
            <div>
              (B) (a+5) * G(a-1, x - 1) = (2+5) * G(1, 0) = 7 * 1 = 7 ->
              B為錯誤選項
            </div>
            <div>
              (C) ((3*a)-1) * G(a, x - 1) = (3*2-1) * G(2, 0) = 5 * 1 = 5 ->
              C為錯誤選項
            </div>
            <div>
              (D) (a+6) * G(a, x - 1) = (2+6) * G(2,0) = 8 * 1 = 8 =>
              D為錯誤選項
            </div>
            <div>故answer = ((2*a)+2) * G(a, x - 1)</div>
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
        description: require("@/assets/problems/concept/2016-10-29/21_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/21_code.png")
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
