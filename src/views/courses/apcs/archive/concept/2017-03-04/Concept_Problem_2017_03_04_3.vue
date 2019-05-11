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
          <v-radio label="n * F(n-1)" color="error" value="error_1"></v-radio>
          <v-radio
            label="n + F(n-3)"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio label="n - F(n-2)" color="error" value="error_3"></v-radio>
          <v-radio label="F(3n+1) " color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>以n * F(n-1)為例</div>
            <div>F(14)</div>
            <div>= 14 * F(13)</div>
            <div>= 14 * 13 * F(12)</div>
            <div>= ...</div>
            <div>
              = 14 * 13 * 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 = 639472640
              != 40
            </div>
            <div>-----------------------------------</div>
            <div>以n + F(n-3)為例</div>
            <div>F(14)</div>
            <div>= 14 + F(11)</div>
            <div>= 14 + 11 + F(8)</div>
            <div>= 14 + 11 + 8 + F(5)</div>
            <div>= 14 + 11 + 8 + 5 +F(2)</div>
            <div>= 14 + 11 + 8 + 5 + 2</div>
            <div>= 40</div>
            <div>-----------------------------------</div>
            <div>以n - F(n-2)為例</div>
            <div>F(14)</div>
            <div>= 14 - F(12)</div>
            <div>= 14 - (12 - F(10))</div>
            <div>= 2 + F(10)</div>
            <div>= 2 + 10 - F(8)</div>
            <div>= 12 - (8 - F(6))</div>
            <div>= 4 + F(6)</div>
            <div>= 4 + 6 - F(4)</div>
            <div>= 10 - (4 - 2)</div>
            <div>= 8 != 40</div>
            <div>-----------------------------------</div>
            <div>以F(3n+1)為例</div>
            <div>F(14)</div>
            <div>= F(3*14+1)</div>
            <div>= F(3*43+1)</div>
            <div>= ... != 40</div>
            <div>故answer = n + F(n-3)</div>
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
        description: require("@/assets/problems/concept/2017-03-04/3_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/3_code.png")
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
