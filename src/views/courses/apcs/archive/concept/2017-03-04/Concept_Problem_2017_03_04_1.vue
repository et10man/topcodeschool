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
          <v-radio label="Search(-1)" color="error" value="error_1"></v-radio>
          <v-radio label="Search(0)" color="error" value="error_2"></v-radio>
          <v-radio label="Search(10)" color="error" value="error_3"></v-radio>
          <v-radio
            label="Search(16)"
            color="success"
            value="success_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>Search(x) 真正目的是找到 A 之中大於 x 的最小值。</div>
            <div>A[8]={0, 2, 4, 6, 8, 10, 12, 14};</div>
            <div>Search(-1) = 0</div>
            <div>Search(0) = 2</div>
            <div>Search(10) = 12</div>
            <div>Search(16) = 14</div>
            <div>故answer = Search(16)</div>
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
        description: require("@/assets/problems/concept/2017-03-04/1_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/1_code.png")
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
