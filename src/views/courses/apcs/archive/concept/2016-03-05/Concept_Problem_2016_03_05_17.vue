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
          <v-radio
            label="11 12 13 14 15 3"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="11 12 13 14 25 20"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio
            label="23 15 18 20 11 12"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="18 17 19 24 15 16"
            color="error"
            value="error_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>判斷是否為allBig只要第五個變數d[5]大於val</div>
            <div>即使前面四個變數d[1],d[2],d[3],d[4]小於val</div>
            <div>allBig仍然是True</div>
            <div>故answer=第二個選項</div>
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
        description: require("@/assets/problems/concept/2016-03-05/17_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/17_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
