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
          <v-radio label="2" color="error" value="error_2"></v-radio>
          <v-radio label="3" color="success" value="success_3"></v-radio>
          <v-radio label="4" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>int p[5]={0, 1, 2, 3, 4};</div>
            <div>G(p, 0, 1);</div>
            <div>p[5]變成{0, 0, 2, 3, 4}</div>
            <div>G(p, 2, 4);</div>
            <div>p[5]變成{0, 0, 2, 3, 2}</div>
            <div>G(p, 0, 4);</div>
            <div>p[5]變成{0, 0, 0, 3, 2}</div>
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
        description: require("@/assets/problems/concept/2016-10-29/10_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/10_code.png")
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
