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
            label="A1(5) 印的 '*' 個數比 A2(5) 多"
            color="error"
            value="error_1"
          ></v-radio>
          <v-radio
            label="A1(13) 印的 '*' 個數比 A2(13) 多"
            color="error"
            value="error_2"
          ></v-radio>
          <v-radio
            label="A2(14) 印的 '*' 個數比 A1(14) 多"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="A2(15) 印的 '*' 個數比 A1(15) 多"
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
            <div>先算出F(x) = 多少個*</div>
            <div>F(1) = 1個*</div>
            <div>F(2) = (2+1+1)個* = 4個*</div>
            <div>F(3) = (3+1+1)個* = 5個*</div>
            <div>F(4) = (4+4+4)個* = 12個*</div>
            <div>F(5) = (5+4+4)個* = 13個*</div>
            <div>F(6) = (6+5+5)個* = 16個*</div>
            <div>F(8) = (7+5+5)個* = 17個*</div>
            <div>F(9) = (8+12+12)個* = 32個*</div>
            <div>F(10) = (9+12+12)個* = 33個*</div>
            <div>F(11) = (10+13+13)個* = 36個*</div>
            <div>F(12) = (11+13+13)個* = 37個*</div>
            <div>F(12) = (12+16+16)個* = 44個*</div>
            <v-data-table :headers="headers" :items="stars" class="elevation-1">
              <template v-slot:items="props">
                <td class="text-xs-center">{{ props.item.n }}</td>
                <td class="text-xs-center">{{ props.item.a1_desc }}</td>
                <td class="text-xs-center">{{ props.item.a2_desc }}</td>
                <td class="text-xs-center">
                  {{ props.item.a1_star_number_desc }}
                </td>
                <td class="text-xs-center">
                  {{ props.item.a2_star_number_desc }}
                </td>
                <td class="text-xs-center">{{ props.item.option }}</td>
              </template>
            </v-data-table>
            <div>
              故answer = A2(15) 印的 '*' 個數比 A1(15) 多 <- 應該為一樣多
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
      date: "2017-03-04",
      image: {
        description: require("@/assets/problems/concept/2017-03-04/2_description.png"),
        code: require("@/assets/problems/concept/2017-03-04/2_code.png")
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
