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
          <v-radio label="5" color="error" value="error_1"></v-radio>
          <v-radio label="12" color="error" value="error_2"></v-radio>
          <v-radio label="14" color="success" value="success_3"></v-radio>
          <v-radio label="15" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>G(3)</div>
            <div>= (K(a, 2) + a[3])</div>
            <div>= (K(a, 1) + a[2]) + a[3]</div>
            <div>= (K(a, 0) + a[1]) + a[2] + a[3]</div>
            <div>= (K(a, -1) + a[0]) + a[1] + a[2] + a[3]</div>
            <div>= 0 + a[0] + a[1] + a[2] + a[3]</div>
            <div>= 0 + 5 + 4 + 3 + 2</div>
            <div>= 14</div>
            <div>故answer = 14</div>
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
        description: require("@/assets/problems/concept/2016-10-29/3_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/3_code.png")
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
