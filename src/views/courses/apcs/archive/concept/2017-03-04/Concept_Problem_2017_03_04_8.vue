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
            label="1,6,7,7,8,8,9"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="1,6,7,7,8,1,9"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio
            label="1,6,7,8,9,9,9"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="1,6,7,7,8,9,9"
            color="error"
            value="error_4"
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
            <div>main裡面</div>
            <div>printf("%d,", s); 這時s為全域變數1</div>
            <div>印出1,</div>
            <div>add(1);</div>
            <div>for執行兩次，這時s為區域變數6</div>
            <div>印出6,7,7,8,</div>
            <div>main裡面</div>
            <div>printf("%d,", s); 這時s為全域變數1</div>
            <div>印出1,</div>
            <div>s = 9;</div>
            <div>printf("%d,", s); 這時s為全域變數9</div>
            <div>印出9</div>
            <div>故answer = 1,6,7,7,8,1,9</div>
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
        description: require("@/assets/problems/concept/2017-03-04/8_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/8_code.png")
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
