<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs3>
        <v-radio-group v-model="answerGroup">
          <v-radio label="120" color="success" value="success_1"></v-radio>
          <v-radio label="124" color="error" value="error_2"></v-radio>
          <v-radio label="128" color="error" value="error_3"></v-radio>
          <v-radio label="以上皆非" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>Array每一個單位需要兩單位的記憶體大小</div>
            <div>A[0][0]記憶體位址為108</div>
            <div>A[0][1]記憶體位址為110</div>
            <div>A[0][2]記憶體位址為112</div>
            <div>A[0][3]記憶體位址為114</div>
            <div>A[1][0]記憶體位址為116</div>
            <div>A[1][1]記憶體位址為118</div>
            <div>A[1][2]記憶體位址為120</div>
            <div>故answer=120</div>
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
        description: require("@/assets/problems/concept/2016-03-05/19_description.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
