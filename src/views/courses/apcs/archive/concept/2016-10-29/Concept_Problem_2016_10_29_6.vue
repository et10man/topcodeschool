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
          <v-radio label="a < 3" color="error" value="error_1"></v-radio>
          <v-radio label="a < 2" color="error" value="error_2"></v-radio>
          <v-radio label="a < 1" color="error" value="error_3"></v-radio>
          <v-radio label="a < 0" color="success" value="success_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>F(7) = 12</div>
            <div>top down方法</div>
            <div>= F(5) + F(4)</div>
            <div>=(F(3)+F(2)) + (F(2)+F(1))</div>
            <div>
              =(F(1)+F(0)) + (F(0)+F(-1)) + (F(0)+F(-1)) + (F(-1)+F(-2))
            </div>
            <div>=F(1) + 3*F(0) + 3*F(-1) + F(-2)</div>
            <div>=F(-1)+F(-2) + 3*(F(-2)+F(-3)) + 3*F(-1) + F(-2)</div>
            <div>if(a < 0) return 1</div>
            <div>= 1 + 1 + 3*2 + 3 + 1 = 12</div>
            <div>bottom up方法</div>
            <div>F(0) = F(-2) + F(-3) = 2</div>
            <div>F(1) = F(-1) + F(-2) = 2</div>
            <div>F(2) = F(0) + F(-1) = 3</div>
            <div>F(3) = F(1) + F(0) = 4</div>
            <div>F(4) = F(2) + F(1) = 5</div>
            <div>F(5) = F(3) + F(2) = 7</div>
            <div>F(7) = F(5) + F(4) = 7 + 5 = 12</div>
            <div>故answer = if(a < 0)</div>
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
        description: require("@/assets/problems/concept/2016-10-29/6_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/6_code.png")
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
