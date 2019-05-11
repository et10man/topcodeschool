<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <!-- (A)   (B)   (C)   (D)    -->
          <v-radio
            label="rand() % 900 + 100"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="rand() % 1000 + 1"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="rand() % 899 + 101"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="rand() % 901 + 100"
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
            <div>(A) rand() % 900 + 100 => 100 ~ 999</div>
            <div>(B) rand() % 1000 + 1 => 1 ~ 1000</div>
            <div>(C) rand() % 899 + 101 => 101 ~ 999</div>
            <div>(D) rand() % 901 + 100 => 100 ~ 1000</div>
            <div>故answer = rand() % 901 + 100</div>
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
        description: require("@/assets/problems/concept/2017-03-04/12_description.png")
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
