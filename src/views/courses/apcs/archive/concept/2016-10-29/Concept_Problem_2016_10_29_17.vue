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
          <v-radio label="k > 2" color="error" value="error_1"></v-radio>
          <v-radio label="k > 1" color="error" value="error_2"></v-radio>
          <v-radio label="k > 0" color="success" value="success_3"></v-radio>
          <v-radio label="k > －1" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>*個數分別為6, 4, 2, 0</div>
            <div>for (int k=6-2*i; (a) ; k=k-1)</div>
            <div>(a) k > 0時</div>
            <div>符合*個數6, 4, 2, 0</div>
            <div>故answer = (a) k > 0時</div>
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
        description: require("@/assets/problems/concept/2016-10-29/17_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/17_code.png")
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
