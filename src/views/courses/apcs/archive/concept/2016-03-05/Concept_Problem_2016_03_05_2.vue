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
          <v-radio label="1" color="error" value="error_1"></v-radio>
          <v-radio label="2" color="error" value="error_2"></v-radio>
          <v-radio label="7" color="success" value="success_3"></v-radio>
          <v-radio label="9" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <p class="subheading">
            f函式為取出陣列a最大的元素
            <br />
            <code>int a[10]= { 1, 3, 9, 2, 5, 8, 4, 9, 6, 7 };</code>
            <br />這邊要注意有兩個最大值9，所以答案是第二個9的index(7)
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
        description: require("@/assets/problems/concept/2016-03-05/2_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/2_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
