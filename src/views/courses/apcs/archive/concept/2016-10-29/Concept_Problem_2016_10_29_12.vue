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
          <v-radio label="5 10 15 20" color="error" value="error_1"></v-radio>
          <v-radio
            label="5 11 17 23"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio label="6 12 18 24" color="error" value="error_3"></v-radio>
          <v-radio label="6 11 17 22" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>第一次進入for loop</div>
            <div>只會進入i = i + a;</div>
            <div>i = 0 + 5 = 5</div>
            <div>第二次進入for loop</div>
            <div>會進入for裡面的i = i + 1</div>
            <div>接著進入i = i + a;</div>
            <div>i = 5 + 1 = 6</div>
            <div>i = 6 + 5 = 11</div>
            <div>以此類推</div>
            <div>故answer = 5 11 17 23</div>
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
        description: require("@/assets/problems/concept/2016-10-29/12_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/12_code.png")
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
