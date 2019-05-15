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
          <v-radio label="1" color="error" value="error_1"></v-radio>
          <v-radio label="3" color="error" value="error_2"></v-radio>
          <v-radio label="5" color="success" value="success_3"></v-radio>
          <v-radio label="8" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs6>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>F(5,2)</div>
            <div>= F(x-y,y)+F(x-2*y,y)</div>
            <div>= F(3,2) + F(1,2)</div>
            <div>= (F(1,2)+F(-1,2)) + (F(-1,2)+F(-3,2))</div>
            <div>= (F(-1,2)+F(-3,2)) + F(-1,2) + F(-1,2) + F(-3,2)</div>
            <div>= 1+1+1+1+1</div>
            <div>故answer = 5</div>
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
        description: require("@/assets/problems/concept/2017-03-04/21_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/21_code.png")
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
