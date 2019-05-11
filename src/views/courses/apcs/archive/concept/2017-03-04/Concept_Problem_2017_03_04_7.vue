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
          <v-radio label="1" color="error" value="error_1"></v-radio>
          <v-radio label="5" color="error" value="error_2"></v-radio>
          <v-radio label="10" color="success" value="success_3"></v-radio>
          <v-radio label="19" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>B(5,2)</div>
            <div>= B(4,1) + B(4,2)</div>
            <div>= (B(3,0) + B(3,1)) + (B(3,1) + B(3,2))</div>
            <div>= base case + 2*(B(2,0) + B(2,1)) + (B(2,1) + B(2,2))</div>
            <div>= base case*4 + 3*(B(2,1))</div>
            <div>= base case*4 + 3*(B(1,0) + B(1,1))</div>
            <div>= base case*10</div>
            <div>故answer = 10</div>
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
        description: require("@/assets/problems/concept/2017-03-04/7_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/7_code.png")
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
