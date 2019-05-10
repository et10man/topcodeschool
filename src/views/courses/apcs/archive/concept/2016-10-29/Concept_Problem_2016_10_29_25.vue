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
          <v-radio label="2" color="error" value="error_1"></v-radio>
          <v-radio label="3" color="error" value="error_2"></v-radio>
          <v-radio label="4" color="success" value="success_3"></v-radio>
          <v-radio label="5" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>#1 search (1, 10, 3)</div>
            <div>t = ceiling ((x + y)/2) = 6</div>
            <div>#2 search(x, t - 1, z) = search(1, 5, 3)</div>
            <div>t = ceiling ((x + y)/2) = 3</div>
            <div>#3 search(t, y, z) = search(3, 5, 3)</div>
            <div>t = ceiling ((x + y)/2) = 4</div>
            <div>#4 search(x, t - 1, z) = search(3, 3, 3)</div>
            <div>故answer = 4</div>
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
        description: require("@/assets/problems/concept/2016-10-29/25_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/25_code.png")
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
