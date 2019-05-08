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
          <v-radio label="44" color="error" value="error_1"></v-radio>
          <v-radio label="52" color="success" value="success_2"></v-radio>
          <v-radio label="54" color="error" value="error_3"></v-radio>
          <v-radio label="63" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>arr[0] = 0</div>
            <div>arr[1] = 1</div>
            <div>arr[2] = 2</div>
            <div>arr[3] = 3</div>
            <div>arr[4] = 4</div>
            <div>arr[5] = 5</div>
            <div>arr[6] = 6</div>
            <div>arr[7] = 7</div>
            <div>arr[8] = 8</div>
            <div>arr[9] = 9</div>
            <div>sum = sum - arr[i-1] + arr[i] + arr[i+1];</div>
            <div>i = 1時:</div>
            <div>sum = 0 - 0 + 1 + 2 = 3</div>
            <div>i = 2時:</div>
            <div>sum = 3 - 1 + 2 + 3 = 7</div>
            <div>i = 3時:</div>
            <div>sum = 7 - 2 + 3 + 4 = 12</div>
            <div>i每增加一 sum加的數值也多一</div>
            <div>3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 52</div>
            <div>故answer = 52</div>
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
        description: require("@/assets/problems/concept/2016-10-29/15_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/15_code.png")
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
