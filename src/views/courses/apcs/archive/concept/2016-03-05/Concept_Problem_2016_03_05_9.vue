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
          <v-radio label="1" color="error" value="error_1"></v-radio>
          <v-radio label="4" color="success" value="success_2"></v-radio>
          <v-radio label="3" color="error" value="error_3"></v-radio>
          <v-radio label="33" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>A[1]=6, A[2]=10, A[3]=14, A[4]=18</div>
            <div>B[1]=5, B[2]=10, B[3]=15, B[4]=20</div>
            <div>c更新順序如下</div>
            <div>i=1時: c=1</div>
            <div>i=2時: c=1</div>
            <div>i=3時: c=1+(15%14)=2</div>
            <div>i=4時: c=2+(20%18)=4</div>
            <div>故answer=4</div>
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
        description: require("@/assets/problems/concept/2016-03-05/9_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/9_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
