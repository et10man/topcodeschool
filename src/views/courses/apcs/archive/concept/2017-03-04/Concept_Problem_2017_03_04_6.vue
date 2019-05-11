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
      <v-flex xs5>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="第一列總和是正確，但其他列總和不一定正確"
            color="success"
            value="success_1"
          ></v-radio>
          <v-radio
            label="程式片段在執行時會產生錯誤 (run-time error)"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="程式片段中有語法上的錯誤"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="程式片段會完成執行並正確印出每一列的總和"
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
            <div>i從0變成1的時候</div>
            <div>rowsum沒有重新assign成0</div>
            <div>故answer = 第一列總和是正確，但其他列總和不一定正確</div>
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
        description: require("@/assets/problems/concept/2017-03-04/6_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/6_code.png")
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
