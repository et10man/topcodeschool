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
          <v-radio label="36" color="error" value="error_1"></v-radio>
          <v-radio label="20" color="success" value="success_2"></v-radio>
          <v-radio label="12" color="error" value="error_3"></v-radio>
          <v-radio label="3" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>
              <v-img :src="image.answer1"></v-img>
            </div>
            <div>紅色框框為比對的部分，若為1，count加一</div>
            <div>
              <v-img :src="image.answer2"></v-img>
            </div>
            <div>count變成4</div>
            <div>
              <v-img :src="image.answer3"></v-img>
            </div>
            <div>count變成5</div>
            <div>以此類推</div>
            <div>故answer = 20</div>
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
        description: require("@/assets/problems/concept/2016-10-29/11_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/11_code.png"),
        answer1: require("@/assets/problems/concept/2016-10-29/11_answer_1.png"),
        answer2: require("@/assets/problems/concept/2016-10-29/11_answer_2.png"),
        answer3: require("@/assets/problems/concept/2016-10-29/11_answer_3.png")
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
