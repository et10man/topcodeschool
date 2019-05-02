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
          <v-radio
            label="0 2 4 6 8 10"
            color="success"
            value="success_1"
          ></v-radio>
          <v-radio
            label="0 1 2 3 4 5 6 7 8 9 10"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio label="0 1 3 5 7 9" color="error" value="error_3"></v-radio>
          <v-radio
            label="0 1 3 5 7 9 11"
            color="error"
            value="error_4"
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
            <div>for loop iterate一次i會+1兩次</div>
            <div>故answer = 0 2 4 6 8 10</div>
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
      date: "2016-03-05",
      image: {
        description: require("@/assets/problems/concept/2016-03-05/21_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/21_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
