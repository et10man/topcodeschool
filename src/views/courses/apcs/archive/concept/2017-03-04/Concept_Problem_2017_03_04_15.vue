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
          <v-radio label="a = a + 5;" color="error" value="error_1"></v-radio>
          <v-radio label="a = a + 2;" color="error" value="error_2"></v-radio>
          <v-radio label="a = 5;" color="success" value="success_3"></v-radio>
          <v-radio
            label="每一行都執行得到"
            color="error"
            value="error_4"
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
            <div>while (a < 10) a = a + 5;</div>
            <div>a可能的數值: 10,11,12,13,14</div>
            <div>if (a < 12) a = a + 2;</div>
            <div>a可能的數值: 12,13</div>
            <div>if (a <= 11) a = 5;</div>
            <div>因為a一定大於11</div>
            <div>故answer = a = 5;</div>
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
        description: require("@/assets/problems/concept/2017-03-04/15_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/15_code.png")
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
