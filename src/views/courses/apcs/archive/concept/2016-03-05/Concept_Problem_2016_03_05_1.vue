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
      <v-flex xs2>
        <v-radio-group v-model="answerGroup">
          <v-radio label="1" color="success" value="success_1"></v-radio>
          <v-radio label="2" color="error" value="error_2"></v-radio>
          <v-radio label="3" color="error" value="error_3"></v-radio>
          <v-radio label="4" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <p class="subheading">
            注意到*數每換一行會增加兩個*，所以第七行的for迴圈m每次要增加2而不是1
            <br />因此將第十二行m=m+1改成m=m+2即可得到正確的輸出
          </p>
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
        description: require("@/assets/problems/concept/2016-03-05/1_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/1_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
