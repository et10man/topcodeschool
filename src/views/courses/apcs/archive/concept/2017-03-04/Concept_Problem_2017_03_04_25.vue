<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="(((a+b)*c)-e)"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="((a+b)*(c-e))"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="((a+(b*c))-e)"
            color="success"
            value="success_3"
          ></v-radio>
          <v-radio
            label="(a+((b*c)-e))"
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
            <div>先乘除後加減</div>
            <div>故answer = ((a+(b*c))-e)</div>
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
        description: require("@/assets/problems/concept/2017-03-04/25_description.png")
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
