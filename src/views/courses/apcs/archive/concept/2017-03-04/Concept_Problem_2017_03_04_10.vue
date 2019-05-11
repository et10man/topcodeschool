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
          <v-radio label="25" color="error" value="error_1"></v-radio>
          <v-radio label="75" color="error" value="error_2"></v-radio>
          <v-radio label="150" color="error" value="error_3"></v-radio>
          <v-radio label="250" color="success" value="success_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>G(100)</div>
            <div>K(0) n 增加 1</div>
            <div>K(1) n 增加 4</div>
            <div>K(2) n 增加 3</div>
            <div>K(3) n 增加 2</div>
            <div>K(0)~K(99)共25組(K(n), K(n+1), K(n+2), K(n+3))</div>
            <div>25*(1+4+3+2)</div>
            <div>=250</div>
            <div>故answer = 250</div>
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
        description: require("@/assets/problems/concept/2017-03-04/10_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/10_code.png")
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
