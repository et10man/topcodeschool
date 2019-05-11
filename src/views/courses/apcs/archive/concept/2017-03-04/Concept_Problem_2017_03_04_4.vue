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
          <v-radio label="n * F(n-1)" color="error" value="error_1"></v-radio>
          <v-radio
            label="n + F(n-3)"
            color="success"
            value="success_2"
          ></v-radio>
          <v-radio label="n - F(n-2)" color="error" value="error_3"></v-radio>
          <v-radio label="F(3n+1) " color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>以n * F(n-1)為例</div>
            <div>F(14)</div>
            <div>= 14 * F(13)</div>
            <div>= 14 * 13 * F(12)</div>
            <div>= ...</div>
            <div>
              = 14 * 13 * 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 = 639472640
              != 40
            </div>
            <div>-----------------------------------</div>
            <div>以n + F(n-3)為例</div>
            <div>F(14)</div>
            <div>= 14 + F(11)</div>
            <div>= 14 + 11 + F(8)</div>
            <div>= 14 + 11 + 8 + F(5)</div>
            <div>= 14 + 11 + 8 + 5 +F(2)</div>
            <div>= 14 + 11 + 8 + 5 + 2</div>
            <div>= 40</div>
            <div>-----------------------------------</div>
            <div>以n - F(n-2)為例</div>
            <div>F(14)</div>
            <div>= 14 - F(12)</div>
            <div>= 14 - (12 - F(10))</div>
            <div>= 2 + F(10)</div>
            <div>= 2 + 10 - F(8)</div>
            <div>= 12 - (8 - F(6))</div>
            <div>= 4 + F(6)</div>
            <div>= 4 + 6 - F(4)</div>
            <div>= 10 - (4 - 2)</div>
            <div>= 8 != 40</div>
            <div>-----------------------------------</div>
            <div>以F(3n+1)為例</div>
            <div>F(14)</div>
            <div>= F(3*14+1)</div>
            <div>= F(3*43+1)</div>
            <div>= ... != 40</div>
            <div>故answer = n + F(n-3)</div>
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
        description: require("@/assets/problems/concept/2017-03-04/3_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/3_code.png")
      },
      answerGroup: [],
      bShowAnswer: false,
      headers: [
        { text: "n", value: "n", sortable: false, align: "center" },
        { text: "A1", value: "a1_desc", sortable: false, align: "center" },
        { text: "A2", value: "a2_desc", sortable: false, align: "center" },
        {
          text: "A1*數目",
          value: "a1_star_number_desc",
          sortable: false,
          align: "center"
        },
        {
          text: "A2*數目",
          value: "a2_star_number_desc",
          sortable: false,
          align: "center"
        },
        {
          text: "選項",
          value: "option",
          sortable: false,
          align: "center"
        }
      ],
      stars: [
        {
          n: 5,
          a1_desc: "F(1)+F(4)",
          a2_desc: "F(2)+F(3)",
          a1_star_number_desc: "1+12=13",
          a2_star_number_desc: "4+5=9",
          option: "A1(5) 印的 '*' 個數比 A2(5) 多"
        },
        {
          n: 13,
          a1_desc: "F(2)+F(10)",
          a2_desc: "F(5)+F(7)",
          a1_star_number_desc: "4+36=40",
          a2_star_number_desc: "13+17=30",
          option: "A1(13) 印的 '*' 個數比 A2(13) 多"
        },
        {
          n: 14,
          a1_desc: "F(2)+F(11)",
          a2_desc: "F(5)+F(8)",
          a1_star_number_desc: "4+37=41",
          a2_star_number_desc: "13+32=43",
          option: "A2(14) 印的 '*' 個數比 A1(14) 多"
        },
        {
          n: 15,
          a1_desc: "F(3)+F(12)",
          a2_desc: "F(6)+F(9)",
          a1_star_number_desc: "5+44=49",
          a2_star_number_desc: "16+33=49",
          option: "A2(15) 印的 '*' 個數比 A1(15) 多"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.no-dot {
  list-style-type: none;
}
</style>
