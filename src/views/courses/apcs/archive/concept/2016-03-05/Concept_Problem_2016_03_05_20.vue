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
            label="第 2 行，改為 int fac = n;"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="第 3 行，改為if (n > 0) {"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio
            label="第 4 行，改為fac = n * fun(n+1);"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="第 4 行，改為fac = fac * fun(n-1);"
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
            <div>要從n!</div>
            <div>原程式得到的結果會是n*(n-1)*(n-2)*...*1*0*1 = 0</div>
            <div>需要改為if (n > 0) {</div>
            <div>才能得到n!</div>
            <div>故answer=第二個選項</div>
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
        description: require("@/assets/problems/concept/2016-03-05/20_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/20_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
