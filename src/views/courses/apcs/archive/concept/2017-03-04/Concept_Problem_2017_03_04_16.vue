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
      <v-flex xs6>
        <v-radio-group v-model="answerGroup">
          <v-radio label="a % 2 != 1" color="error" value="error_1"></v-radio>
          <v-radio label="a * 2 > 16" color="error" value="error_2"></v-radio>
          <v-radio label="a + 3 < 12" color="error" value="error_3"></v-radio>
          <v-radio
            label="a * a < 50"
            color="success"
            value="success_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs6>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>先以F(7) = 17過濾選項</div>
            <div>(A) a % 2 != 1 => return a * 3 + 1 = 22 (NG)</div>
            <div>(B) a * 2 > 16 => return a * 3 + 1 = 22 (NG)</div>
            <div>(C) a + 3 < 12 => return a * 2 + 3 = 17 (OK)</div>
            <div>(D) a * a < 50 => return a * 2 + 3 = 17 (OK)</div>
            <div>再以F(8) = 25過濾選項</div>
            <div>(C) a + 3 < 12 => return a * 2 + 3 = 17 (NG)</div>
            <div>(D) a * a < 50 => return a * 3 + 3 = 25 (OK)</div>
            <div>故answer = a * a < 50;</div>
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
        description: require("@/assets/problems/concept/2017-03-04/16_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/16_code.png")
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
