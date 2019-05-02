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
      <v-flex xs3>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="印出的數字最大的是4"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="f1一共被呼叫二次"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="f2一共被呼叫三次"
            color="success"
            value="success_3"
          ></v-radio>
          <v-radio
            label="數字 2 被印出兩次"
            color="error"
            value="error_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>流程如下</div>
            <div>call f1(1)</div>
            <div>印出1</div>
            <div>call f2(3)</div>
            <div>印出3</div>
            <div>call f1(2)</div>
            <div>印出2</div>
            <div>call f2(4)</div>
            <div>印出4</div>
            <div>in f1(2) 印出2</div>
            <div>in f2(3) 印出3</div>
            <div>in f1(1) 印出1</div>
            <div>f2一共被呼叫三次=>更正為兩次</div>
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
        description: require("@/assets/problems/concept/2016-03-05/12_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/12_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
