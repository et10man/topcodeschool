<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs5>
        <v-img :src="image.description_1"></v-img>
        <v-img :src="image.description_2"></v-img>
      </v-flex>
      <v-flex xs5>
        <v-img :src="image.code"></v-img>
      </v-flex>
      <v-flex xs2></v-flex>
      <v-flex xs5>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="list[current].next = current ;"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="list[current].next = list[list[current].next].next ;"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio
            label="current = list[list[current].next].next ;"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="list[list[current].next].next = list[current].next ;"
            color="error"
            value="error_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs5>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>將current的next指向current的next的next</div>
            <div>
              顧answer = list[current].next = list[list[current].next].next ;
            </div>
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
        description_1: require("@/assets/problems/concept/2016-03-05/6_description_1.png"),
        description_2: require("@/assets/problems/concept/2016-03-05/6_description_2.png"),
        code: require("@/assets/problems/concept/2016-03-05/6_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
