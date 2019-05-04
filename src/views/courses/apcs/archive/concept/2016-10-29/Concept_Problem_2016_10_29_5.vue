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
            label="2 4 6 8 9 7 5 3 1 9"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="1 3 5 7 9 2 4 6 8 9"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="1 2 3 4 5 6 7 8 9 9"
            color="success"
            value="success_3"
          ></v-radio>
          <v-radio
            label="2 4 6 8 5 1 3 7 9 9"
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
            <div>第一個for loop裡面是將第一個元素跟最後一個元素交換</div>
            <div>接著第二個元素跟倒數第二個元素交換</div>
            <div>以此類推</div>
            <div>for loop結束其實等於原本的array</div>
            <div>int a[9] = {1, 3, 5, 7, 9, 8, 6, 4, 2};</div>
            <div>第二個for loop printf的順序是</div>
            <div>a[0] a[8] a[1] a[7] a[2] a[6] a[3] a[5] a[4] a[4]</div>
            <div>= 1 2 3 4 5 6 7 8 9 9</div>
            <div>故answer = 1 2 3 4 5 6 7 8 9 9</div>
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
        description: require("@/assets/problems/concept/2016-10-29/5_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/5_code.png")
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
