<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="X1為 False，X2為 False"
            color="success"
            value="success_1"
          ></v-radio>
          <v-radio
            label="X1為 True，X2 為 True"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="X1為 True，X2為 False"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="X1為 False，X2為 True"
            color="error"
            value="error_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>!(X1 || X2)計算結果為真(True)</div>
            <div>(A) X1為 False，X2為 False => !(False) = True (OK)</div>
            <div>(B) X1為 True， X2 為 True => !(True) = False (NG)</div>
            <div>(C) X1為 True， X2為 False => !(True) = False (NG)</div>
            <div>(D) X1為 False，X2為 True => !(True) = False (NG)</div>
            <div>故answer = X1為 False，X2為 False</div>
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
        description: require("@/assets/problems/concept/2017-03-04/22_description.png")
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
