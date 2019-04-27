<template>
  <v-container fluid grid-list-xl>
    <!-- {{ this.current_category_value }}
    <br />
    {{ this.current_category_text }}
    <br />
    {{ this.current_problem }}
    <br />-->
    <v-layout wrap align-center>
      <v-flex xs3 d-flex>
        <v-select
          :items="quiz.categories"
          :label="quiz.categories_label"
          @change="getCategory"
          solo
        ></v-select>
      </v-flex>

      <v-flex xs3 d-flex>
        <v-select
          :items="quiz.problems[current_category_value]"
          :label="quiz.problems_label"
          @change="getProblem"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout>
      <router-view></router-view>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    current_category_text: "2016-03-05",
    current_category_value: "0",
    current_category: "concept",
    current_problem: "1",
    quiz: {
      categories_label: "歷次試題",
      categories: [
        { text: "2016-03-05_觀念題", value: 0 },
        { text: "2016-10-29_觀念題", value: 1 },
        { text: "2017-03-04_觀念題", value: 2 },
        { text: "2016-03-05_實作題", value: 3 },
        { text: "2016-10-29_實作題", value: 4 },
        { text: "2017-03-06_實作題", value: 5 },
        { text: "2017-10-28_實作題", value: 6 }
      ],
      problems_label: "題目",
      problems: [
        Array.from({ length: 25 }, (v, i) => i + 1).map(String),
        Array.from({ length: 25 }, (v, i) => i + 1).map(String),
        Array.from({ length: 25 }, (v, i) => i + 1).map(String),
        ["1-成績指標", "2-矩陣轉換", "3-線段覆蓋長度", "4-血緣關係"],
        ["1-三角形辨別", "2-最大和", "3-定時K彈", "4-棒球遊戲"],
        ["1-秘密差", "2-小群體", "3-數字龍捲風", "4-基地台"],
        ["1-邏輯運算子", "2-交錯字串", "3-樹狀圖分析", "4-物品堆疊"]
      ]
    }
  }),
  methods: {
    getCategory(category) {
      this.current_category_value = category;
      this.current_category_text = this.quiz.categories[category].text.split(
        `_`
      )[0];
      this.current_category = this.quiz.categories[category].text.split(`_`)[1];
    },
    getProblem(problem) {
      this.current_problem = problem.split(`-`)[0];
      if (this.current_category == "觀念題") {
        // alert("觀念題");
        this.$router.push(
          `/courses/apcs/archive/concept/${this.current_category_text}/${
            this.current_problem
          }`
        );
      } else if (this.current_category == "實作題") {
        // alert("實作題");
        this.$router.push(
          `/courses/apcs/archive/implement/${this.current_category_text}/${
            this.current_problem
          }`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
