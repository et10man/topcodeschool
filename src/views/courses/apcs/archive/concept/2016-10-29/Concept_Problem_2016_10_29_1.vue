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
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio label="1 2" color="error" value="error_1"></v-radio>
          <v-radio label="1 3" color="success" value="success_2"></v-radio>
          <v-radio label="3 2" color="error" value="error_3"></v-radio>
          <v-radio label="3 3" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>(a==2) && (b==3))時</div>
            <div>if (item[b] < t) {</div>
            <div>c = b;</div>
            <div>t = item[b];</div>
            <div>}</div>
            <div>c = b = 3;</div>
            <div>t = item[b] = item[3] = 1</div>
            <div>printf ("%c %d\n", t, c);</div>
            <div>answer = 1, 3</div>
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
        description: require("@/assets/problems/concept/2016-10-29/1_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/1_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
