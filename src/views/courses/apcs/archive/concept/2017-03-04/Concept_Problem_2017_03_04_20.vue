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
          <v-radio label="70" color="success" value="success_1"></v-radio>
          <v-radio label="80" color="error" value="error_2"></v-radio>
          <v-radio label="100" color="error" value="error_3"></v-radio>
          <v-radio label="190" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs6>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>g2</div>
            <div>= f1(g2)</div>
            <div>= 10</div>
            <div>此時 g2 = 10</div>
            <div>f2(g2)</div>
            <div>= f2(10)</div>
            <div>= v+c+g1</div>
            <div>= 10+10+30 = 50</div>
            <div>此時 g1 = 10</div>
            <div>f2(50)</div>
            <div>= v+c+g1</div>
            <div>= 50+10+10</div>
            <div>= 70</div>
            <div>故answer = 70</div>
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
        description: require("@/assets/problems/concept/2017-03-04/20_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/20_code.png")
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
