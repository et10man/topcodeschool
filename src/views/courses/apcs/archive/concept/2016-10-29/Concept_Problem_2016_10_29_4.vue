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
          <v-radio label="3" color="success" value="success_1"></v-radio>
          <v-radio label="4" color="error" value="error_2"></v-radio>
          <v-radio label="5" color="error" value="error_3"></v-radio>
          <v-radio label="6" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>int a=2, b=3; int c=4, d=5; int val;</div>
            <div>val</div>
            <div>= b/a + c/b + d/b;</div>
            <div>= 3/2 + 4/3 + 5/3</div>
            <div>= 3</div>
            <div>故answer = 3</div>
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
        description: require("@/assets/problems/concept/2016-10-29/4_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/4_code.png")
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
