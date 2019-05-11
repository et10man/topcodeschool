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
          <v-radio
            label="需要將 i<=100 和 i=i+5 分別修正為 i<20 和 i=i+1"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="需要將 i=0 修正為 i=5"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="需要將 i<=100 修正為 i<100;"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="需要將 i=0 和 i<=100 分別修正為 i=5 和 i<100"
            color="success"
            value="success_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs6>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>需要將 i=0 和 i<=100 分別修正為 i=5 和 i<100</div>
            <div>只有印出19次Hi</div>
            <div>故answer = 需要將 i=0 和 i<=100 分別修正為 i=5 和 i<100</div>
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
        description: require("@/assets/problems/concept/2017-03-04/13_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/13_code.png")
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
