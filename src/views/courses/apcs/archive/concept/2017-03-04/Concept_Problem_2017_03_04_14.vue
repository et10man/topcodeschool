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
          <v-radio label="16 行" color="error" value="error_1"></v-radio>
          <v-radio label="22 行" color="error" value="error_2"></v-radio>
          <v-radio label="11 行" color="error" value="error_3"></v-radio>
          <v-radio label="15 行" color="success" value="success_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs6>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>#1-F(15)</div>
            <div>#2-F(76)</div>
            <div>#3-F(38)</div>
            <div>#4-F(19)</div>
            <div>#5-F(96)</div>
            <div>#6-F(48)</div>
            <div>#7-F(24)</div>
            <div>#8-F(12)</div>
            <div>#9-F(6)</div>
            <div>#10-F(3)</div>
            <div>#11-F(16)</div>
            <div>#12-F(8)</div>
            <div>#13-F(4)</div>
            <div>#14-F(2)</div>
            <div>#15-F(1)</div>
            <div>故answer = 15 行</div>
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
        description: require("@/assets/problems/concept/2017-03-04/14_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/14_code.png")
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
