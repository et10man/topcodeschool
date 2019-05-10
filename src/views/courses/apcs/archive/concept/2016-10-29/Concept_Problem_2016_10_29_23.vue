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
            label="2417851639229258349412352 7"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio label="68921 43" color="error" value="error_2"></v-radio>
          <v-radio label="65537 65539" color="error" value="error_3"></v-radio>
          <v-radio
            label="134217728 6"
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
            <div>i = i * i * i = 2^3 = 8</div>
            <div>x = 3 + 1 = 4</div>
            <div>---------------------------</div>
            <div>i = i * i * i = 2^3 * 2^3 * 2^3 = 2*9 = 512</div>
            <div>x = 4 + 1 = 5</div>
            <div>---------------------------</div>
            <div>i = i * i * i = 2^9 * 2^9 * 2^9 = 134217728</div>
            <div>x = 5 + 1 = 6</div>
            <div>while (134217728 <= 65536) 跳出while</div>
            <div>故answer = 134217728 6</div>
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
        description: require("@/assets/problems/concept/2016-10-29/23_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/23_code.png")
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
