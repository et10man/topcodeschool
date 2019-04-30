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
          <v-radio
            label="(a)f[i]=f[i-1]+f[i-2] (b)f[N]"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="(a)a = a + b (b)a"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="(a)b = a + b (b)b"
            color="success"
            value="success_3"
          ></v-radio>
          <v-radio
            label="(a)f[i]=f[i-1]+f[i-2] (b)f[i]"
            color="error"
            value="error_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>因為每個數等於前兩個數相加</div>
            <div>所以b = a + b</div>
            <div>接著印出b</div>
            <div>故answer = (a)b = a + b (b)b</div>
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
        description: require("@/assets/problems/concept/2016-03-05/8_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/8_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
