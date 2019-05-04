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
          <v-radio label="n(n+1)/2" color="error" value="error_1"></v-radio>
          <v-radio label="n^3/2" color="error" value="error_2"></v-radio>
          <v-radio label="n(n-1)/2" color="error" value="error_3"></v-radio>
          <v-radio
            label="n^2(n+1)/2"
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
            <div>for (int i=1; i<=n; i=i+1)</div>
            <div>for (int j=i; j<=n; j=j+1)</div>
            <div>
              前兩個for => n*(n+1)/2
              <a
                href="https://zh.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%80%A6"
                target="_blank"
                >wiki</a
              >
            </div>
            <div>for (int k=1; k<=n; k=k+1) => n次</div>
            <div>以n=3為例子</div>
            <div>i=1</div>
            <div>j=1</div>
            <div>+++</div>
            <div>i=1</div>
            <div>j=2</div>
            <div>+++</div>
            <div>i=1</div>
            <div>j=3</div>
            <div>+++</div>
            <div>------------</div>
            <div>i=2</div>
            <div>j=2</div>
            <div>+++</div>
            <div>i=2</div>
            <div>j=3</div>
            <div>+++</div>
            <div>------------</div>
            <div>i=3</div>
            <div>j=3</div>
            <div>+++</div>
            <div>a = 3*3*(3+1)/2 = 18</div>
            <div>故answer = n^2(n+1)/2</div>
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
        description: require("@/assets/problems/concept/2016-10-29/7_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/7_code.png")
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
