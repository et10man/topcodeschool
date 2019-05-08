<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="TRUE FALSE TRUE FALSE"
            color="success"
            value="success_1"
          ></v-radio>
          <v-radio
            label="FALSE FALSE TRUE FALSE"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="FALSE TRUE TRUE FALSE"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="TRUE TRUE FALSE TRUE"
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
            <div>x=TRUE, y=TRUE, z=FALSE</div>
            <div>
              !(y || z) || x = !(TRUE || FALSE) || TRUE = FALSE || TRUE = TRUE
            </div>
            <div>
              !y || (z || !x) = !TRUE || (FALSE || !TRUE) = FALSE || FALSE =
              FALSE
            </div>
            <div>
              z || (x && (y || z)) = FALSE || (TRUE && (TRUE || FALSE)) = FALSE
              || TRUE = TRUE
            </div>
            <div>
              (x || x) && z = (TRUE || TRUE) && FALSE = TRUE && FALSE = FALSE
            </div>
            <div>故answer = TRUE FALSE TRUE FALSE</div>
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
        description: require("@/assets/problems/concept/2016-10-29/14_description.png")
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
