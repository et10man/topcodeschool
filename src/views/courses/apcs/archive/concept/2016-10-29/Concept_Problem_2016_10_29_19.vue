<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs12>
        <v-img :src="image.code"></v-img>
      </v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="冗餘程式碼在 A 區"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="冗餘程式碼在 B 區"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="冗餘程式碼在 C 區"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="冗餘程式碼在 D 區"
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
            <div>// D 區</div>
            <div>printf ("1 : %d coins\n", (Change-Change%1)/1);</div>
            <div>Change = Change % 1</div>
            <div>Change = Change % 5;時已經得到D 區的結果</div>
            <div>故answer = 冗餘程式碼在 D 區</div>
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
        description: require("@/assets/problems/concept/2016-10-29/19_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/19_code.png")
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
