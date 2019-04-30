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
      <v-flex xs3>
        <v-radio-group v-model="answerGroup">
          <v-radio label="1000" color="error" value="error_1"></v-radio>
          <v-radio label="3000" color="success" value="success_2"></v-radio>
          <v-radio label="5000" color="error" value="error_3"></v-radio>
          <v-radio label="10000" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div v-for="(count, index) in counts" :key="index">
              第{{ index + 1 }}次是進入 sum = sum + i; 共{{ count }}次
            </div>
            <div>共{{ counts.reduce((a, b) => a + b, 0) }}次</div>
            <div>故answer = 3000</div>
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
      date: "2016-03-05",
      image: {
        description: require("@/assets/problems/concept/2016-03-05/5_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/5_code.png")
      },
      answerGroup: [],
      bShowAnswer: false,
      counts: [1000, 666, 444, 296, 197, 131, 87, 58, 38, 25, 16, 10, 6, 4, 2]
    };
  }
};
</script>

<style lang="scss" scoped></style>
