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
          <v-radio label="(a) *int,  (b) *int" color="error" value="error_1"></v-radio>
          <v-radio label="(a) *int,  (b) **int" color="error" value="error_2"></v-radio>
          <v-radio label="(a) int*,  (b) int*" color="error" value="error_3"></v-radio>
          <v-radio label="(a) int*,  (b) int**" color="success" value="success_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
          }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>int a = 1;</div>
            <div>// 加入 a_ptr, a_ptrptr 變數的宣告</div>
            <div>a_ptr = &a;</div>
            <div>a_ptrptr = &a_ptr;</div>
            <div>a_ptr為int a的位址</div>
            <div>a_ptrptr為a_ptr的位址</div>
            <div>故answer = (a) int*, (b) int**</div>
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
        description: require("@/assets/problems/concept/2016-10-29/16_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/16_code.png")
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
