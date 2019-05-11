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
            label="p 是 A 陣列資料中的最大值"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="q 是 A 陣列資料中的最小值"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio label="q < p" color="success" value="success_3"></v-radio>
          <v-radio label="A[0] <= p" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>if (A[i] > p) p = A[i];</div>
            <div>所以p 是 A 陣列資料中的最大值</div>
            <div>if (A[i] < q) q = A[i];</div>
            <div>所以q 是 A 陣列資料中的最小值</div>
            <div>如果A[0]~A[n-1]的數值都是一樣的，則q < p不一定成立</div>
            <div>A[0] <= p 一定成立因為p 是 A 陣列資料中的最大值</div>
            <div>故answer = q < p</div>
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
        description: require("@/assets/problems/concept/2017-03-04/5_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/5_code.png")
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
