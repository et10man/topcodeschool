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
          <v-radio label="12" color="error" value="error_1"></v-radio>
          <v-radio label="24" color="error" value="error_2"></v-radio>
          <v-radio label="16" color="error" value="error_3"></v-radio>
          <v-radio label="20" color="success" value="success_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs6>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>i和j排列組合如下</div>
            <div>i=1,j=1 | i=1,j=2 | i=1,j=3 | i=1,j=4 | i=1,j=5</div>
            <div>i=2,j=1 | i=2,j=2 | i=2,j=3 | i=2,j=4 | i=2,j=5</div>
            <div>i=3,j=1 | i=3,j=2 | i=3,j=3 | i=3,j=4 | i=3,j=5</div>
            <div>i=4,j=1 | i=4,j=2 | i=4,j=3 | i=4,j=4 | i=4,j=5</div>
            <div>i=5,j=1 | i=5,j=2 | i=5,j=3 | i=5,j=4 | i=5,j=5</div>
            <div>i+j等於2,3,4的組合如下</div>
            <div>case 2: i=1,j=1</div>
            <div>case 3: i=1,j=2 | i=2,j=1</div>
            <div>case 4: i=1,j=3 | i=2,j=2 | i=3,j=1</div>
            <div>x = 2 + 3 + 3 + 4 + 4 + 4 = 20</div>
            <div>故answer = 20</div>
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
        description: require("@/assets/problems/concept/2017-03-04/18_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/18_code.png")
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
