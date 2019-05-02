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
          <v-radio label="1, 2, 1" color="success" value="success_1"></v-radio>
          <v-radio label="0, 1, 2" color="error" value="error_2"></v-radio>
          <v-radio label="0, 2, 1" color="error" value="error_3"></v-radio>
          <v-radio label="1, 1, 1" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>要輸出2468</div>
            <div>while要iterate四次</div>
            <div>所以帶入(a)=1, (c)=1</div>
            <div>while會進入四次i=4, i=3, i=2, i=1</div>
            <div>(b)=2</div>
            <div>p=10-2*4=2</div>
            <div>p=10-2*3=4</div>
            <div>p=10-2*2=6</div>
            <div>p=10-2*1=8</div>
            <div>故answer = 1, 2, 1</div>
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
        description: require("@/assets/problems/concept/2016-03-05/23_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/23_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
