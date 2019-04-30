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
          <v-radio label="90" color="error" value="error_1"></v-radio>
          <v-radio label="103" color="success" value="success_2"></v-radio>
          <v-radio label="93" color="error" value="error_3"></v-radio>
          <v-radio label="60" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>a(13,15)帶進去</div>
            <div>=a(12,15)+13</div>
            <div>=a(11,15)+12+13</div>
            <div>=a(10,15)+11+12+13</div>
            <div>=a(9,15)+10+11+12+13</div>
            <div>=a(9,13)+15+10+11+12+13</div>
            <div>=a(9,11)+13+15+10+11+12+13</div>
            <div>=a(9,9)+11+13+15+10+11+12+13</div>
            <div>=9+9+11+13+15+10+11+12+13</div>
            <div>answer = 9+9+11+13+15+10+11+12+13 = 103</div>
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
        description: require("@/assets/problems/concept/2016-03-05/7_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/7_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
