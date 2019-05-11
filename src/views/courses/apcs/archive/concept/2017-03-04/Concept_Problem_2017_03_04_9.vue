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
            label="0, 1, 2, 3, 4, 5, 6, 7, 8, 9"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="2, 0, 2, 0, 2, 0, 2, 0, 2, 0"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="9, 0, 1, 2, 3, 4, 5, 6, 7, 8"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="8, 9, 0, 1, 2, 3, 4, 5, 6, 7"
            color="success"
            value="success_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>scanf("%d", &X[(i+2)%10])</div>
            <div>X填的位置依序為2,3,4,5,6,7,8,9,0,1</div>
            <div>X填的整數依序為0,1,2,3,4,5,6,7,8,9</div>
            <div>X = {8, 9, 0, 1, 2, 3, 4, 5, 6, 7}</div>
            <div>故answer = 8, 9, 0, 1, 2, 3, 4, 5, 6, 7</div>
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
        description: require("@/assets/problems/concept/2017-03-04/9_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/9_code.png")
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
