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
          <v-radio label="11" color="error" value="error_1"></v-radio>
          <v-radio label="13" color="error" value="error_2"></v-radio>
          <v-radio label="15" color="error" value="error_3"></v-radio>
          <v-radio label="16" color="success" value="success_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>進入if else的流程如下:</div>
            <div>if (count > 0) => count = 11</div>
            <div>if (count > 10) => count = 12</div>
            <div>else => count = 0</div>
            <div>else => count = 0</div>
            <div>else => count = 16</div>
            <div>故answer=16</div>
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
        description: require("@/assets/problems/concept/2016-03-05/16_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/16_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
