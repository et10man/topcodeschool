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
          <v-radio
            label="x + Mystery(x-1)"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="x * Mystery(x-1)"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="Mystery(x-2) + Mystery(x+2)"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="Mystery(x-2) + Mystery(x-1)"
            color="success"
            value="success_4"
          ></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>(A) x + Mystery(x-1)</div>
            <div>Mystery(9) = 9+Mystery(8)</div>
            <div>Mystery(9) = 9+8+Mystery(7)</div>
            <div>Mystery(9) = 9+8+7+Mystery(6)</div>
            <div>Mystery(9) = 9+8+7+Mystery(6)</div>
            <div>Mystery(9) = 9+8+7+6+Mystery(5)</div>
            <div>Mystery(9) = 9+8+7+6+5+Mystery(4)</div>
            <div>Mystery(9) = 9+8+7+6+5+4+Mystery(3)</div>
            <div>Mystery(9) = 9+8+7+6+5+4+3+Mystery(2)</div>
            <div>Mystery(9) = 9+8+7+6+5+4+3+2+Mystery(1)</div>
            <div>Mystery(9) = 9+8+7+6+5+4+3+2+1 = 45</div>
            <div>(B) x * Mystery(x-1)</div>
            <div>Mystery(9) = 9*Mystery(8)</div>
            <div>Mystery(9) = 9*8*Mystery(7)</div>
            <div>Mystery(9) = 9*8*7*Mystery(6)</div>
            <div>Mystery(9) = 9*8*7*Mystery(6)</div>
            <div>Mystery(9) = 9*8*7*6*Mystery(5)</div>
            <div>Mystery(9) = 9*8*7*6*5*Mystery(4)</div>
            <div>Mystery(9) = 9*8*7*6*5*4*Mystery(3)</div>
            <div>Mystery(9) = 9*8*7*6*5*4*3*Mystery(2)</div>
            <div>Mystery(9) = 9*8*7*6*5*4*3*2*Mystery(1)</div>
            <div>Mystery(9) = 9*8*7*6*5*4*3*2*1 = 362880</div>
            <div>(C) Mystery(x-2) + Mystery(x+2)</div>
            <div>(D) Mystery(x-2) + Mystery(x-1)</div>
            <div>Mystery(9) = Mystery(7) + Mystery(8)</div>
            <div>從Mystery(1)反推回去</div>
            <div>Mystery(1) = 1</div>
            <div>Mystery(2) = 1</div>
            <div>Mystery(3) = 2</div>
            <div>Mystery(4) = 3</div>
            <div>Mystery(5) = 5</div>
            <div>Mystery(6) = 8</div>
            <div>Mystery(7) = 13</div>
            <div>Mystery(8) = 21</div>
            <div>Mystery(9) = 34</div>
            <div>Mystery(10) = 55</div>
            <div>Mystery(11) = 89</div>
            <div>
              (C) Mystery(x-2) + Mystery(x+2) = Mystery(7) + Mystery(11) = 13 +
              89 = 102
            </div>
            <div>
              (D) Mystery(x-2) + Mystery(x-1) = Mystery(7) + Mystery(8) = 13 +
              21 = 34
            </div>
            <div>故answer = (D)</div>
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
        description: require("@/assets/problems/concept/2016-03-05/25_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/25_code.png")
      },
      answerGroup: [],
      bShowAnswer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
