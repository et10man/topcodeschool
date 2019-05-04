<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs10>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs2></v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="a, e, i, o, u"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="3, 1, 4, 5, 9"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio
            label="10000, 0, -10000"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="1, 10, 10, 10, 100"
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
            <div>二分搜尋法需要資料先sort過</div>
            <div>故answer = 3, 1, 4, 5, 9</div>
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
        description: require("@/assets/problems/concept/2016-10-29/8_description.png")
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
