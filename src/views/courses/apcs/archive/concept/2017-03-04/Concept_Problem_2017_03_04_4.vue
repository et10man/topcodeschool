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
          <v-radio label="a, GCD(b,r)" color="error" value="error_1"></v-radio>
          <v-radio
            label="b, GCD(b,r)"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio label="a, GCD(a,r)" color="error" value="error_3"></v-radio>
          <v-radio label="b, GCD(a,r)" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>
              <a
                href="http://www.mathland.idv.tw/fun/euclidean.htm"
                target="_blank"
                >參考連結</a
              >
            </div>
            <div>餘數為零時gcd為除數b</div>
            <div>
              餘數不為零時再帶入GCD(b, r)，大的數字放前面，小的數字放後面
            </div>
            <div>故answer = b, GCD(b,r)</div>
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
        description: require("@/assets/problems/concept/2017-03-04/4_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/4_code.png")
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
