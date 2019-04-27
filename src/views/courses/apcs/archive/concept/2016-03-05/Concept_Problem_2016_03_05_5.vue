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
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <p class="subheading">
            <span>b[1]=1, b[2]=2 ...</span>
            <br />a[1]=1+0=1, a[2]=2+a[1]=3, a[3]=3+a[2]=6
            <br />歸納成a[k]=k*(k+1)/2 <br />a[50] - a[30] = 50*(50+1)/2 -
            30*(30+1)/2 = 1275 - 465 = 810
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
        description: require("@/assets/problems/concept/2016-03-05/5_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/5_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
