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
          <v-radio label="6" color="error" value="error_1"></v-radio>
          <v-radio label="11" color="error" value="error_2"></v-radio>
          <v-radio label="13" color="success" value="success_3"></v-radio>
          <v-radio label="14" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>g(4)</div>
            <div>for loop會進入三次</div>
            <div>目前j = 0</div>
            <div>j = 0 + f(1)</div>
            <div>j = 0 + (1 + f(2))</div>
            <div>j = 0 + 1 + (3 + f(3))</div>
            <div>j = 0 + 1 + 3 + (1 + (f4))</div>
            <div>j = 0 + 1 + 3 + 1 + (1) = 6</div>
            <div>可以知道</div>
            <div>f(2) = 3 + f(3) = 5</div>
            <div>f(3) = 1 + f(4) = 2</div>
            <div>目前j = 6</div>
            <div>j = 6 + f(2) = 6 + 5 = 11</div>
            <div>目前j = 11</div>
            <div>j = j + f(3) = 11 + 2 = 13</div>
            <div>故answer = 13</div>
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
        description: require("@/assets/problems/concept/2016-03-05/24_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/24_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
