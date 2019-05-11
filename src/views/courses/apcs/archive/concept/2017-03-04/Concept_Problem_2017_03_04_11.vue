<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="A[1] = A[2];  A[2] = A[1];"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="A[3] = A[1];  A[1] = A[2];  A[2] = A[3];"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio
            label="A[2] = A[1];  A[3] = A[2];  A[1] = A[3];"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio label="以上皆可" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>先把A[1]的數值放到A[3]</div>
            <div>在把A[2]的數值放到A[1]</div>
            <div>最後再把A[3]暫存的A[1]數值放到A[2]</div>
            <div>故answer = A[3] = A[1]; A[1] = A[2]; A[2] = A[3];</div>
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
        description: require("@/assets/problems/concept/2017-03-04/11_description.png")
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
