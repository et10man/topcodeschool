<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs10>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs2></v-flex>
      <v-flex xs10>
        <v-img :src="image.code"></v-img>
      </v-flex>
      <v-flex xs2></v-flex>
      <v-flex xs3>
        <v-radio-group v-model="answerGroup">
          <v-radio label="n1=33, n2=4" color="error" value="error_1"></v-radio>
          <v-radio label="n1=33, n2=5" color="error" value="error_2"></v-radio>
          <v-radio label="n1=34, n2=4" color="error" value="error_3"></v-radio>
          <v-radio
            label="n1=34, n2=5"
            color="success"
            value="success_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <p class="subheading">
            <span>先看f1:</span>
            <br />f1依序從i=0, i=1, i=2依序找i=?代入a會等於100
            <br />a[?]=3*?+1等於100呢? => ?為33時 ，a[33] = 100
            <br />因此if會判斷i=0~i=33共34次 ，故n1=34
            <br />
          </p>
          <p class="subheading">
            <span>再看f2:</span>
            <br />f2利用binary tree去找value為100的index，mid更新如下 <br />mid
            = 49 <br />mid = 24 <br />mid = 36 <br />mid = 30 <br />mid = 33
            <br />因此if會判斷5次 ，故n2=5
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
        description: require("@/assets/problems/concept/2016-03-05/3_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/3_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
