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
          <v-radio value="success_1" color="success">
            <template slot="label">
              <ul class="no-dot">
                <li>bar: 6</li>
                <li>bar: 1</li>
                <li>bar: 8</li>
              </ul>
            </template>
          </v-radio>
          <v-radio value="error_2" color="error">
            <template slot="label">
              <ul class="no-dot">
                <li>bar: 6</li>
                <li>foo: 1</li>
                <li>bar: 3</li>
              </ul>
            </template>
          </v-radio>
          <v-radio value="error_3" color="error">
            <template slot="label">
              <ul class="no-dot">
                <li>bar: 1</li>
                <li>foo: 1</li>
                <li>bar: 8</li>
              </ul>
            </template>
          </v-radio>
          <v-radio value="error_4" color="error">
            <template slot="label">
              <ul class="no-dot">
                <li>bar: 6</li>
                <li>foo: 1</li>
                <li>foo: 3</li>
              </ul>
            </template>
          </v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>1-function foo(15106)流程如下</div>
            <div>觀察bar(15106-10) => foo(15106-10-5) => ...</div>
            <div>每次從foo到bar再回到foo程式進入點參數會減少15</div>
            <div>可以先將15106/15=1006餘16</div>
            <div>foo(16)->bar(16-10)=>bar:6</div>
            <div>2-function bar(3091)流程如下</div>
            <div>一樣3091先除於15得到=205餘16</div>
            <div>bar(16)->foo(16-5)->bar(11-10)->bar:1</div>
            <div>3-function foo(6693)流程如下</div>
            <div>一樣6693先除於15得到=445餘18</div>
            <div>foo(18)->bar(18-10)->bar:8</div>
            <div>故answer = 第一個選項</div>
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
        description: require("@/assets/problems/concept/2016-03-05/14_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/14_code.png")
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
