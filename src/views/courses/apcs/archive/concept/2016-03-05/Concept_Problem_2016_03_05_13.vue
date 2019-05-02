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
                <li>k = i % j;</li>
                <li>i = j;</li>
                <li>j = k;</li>
              </ul>
            </template>
          </v-radio>
          <v-radio value="error_2" color="error">
            <template slot="label">
              <ul class="no-dot">
                <li>i = j;</li>
                <li>j = k;</li>
                <li>k = i % j;</li>
              </ul>
            </template>
          </v-radio>
          <v-radio value="error_3" color="error">
            <template slot="label">
              <ul class="no-dot">
                <li>i = j;</li>
                <li>j = i % k;</li>
                <li>k = i;</li>
              </ul>
            </template>
          </v-radio>
          <v-radio value="error_4" color="error">
            <template slot="label">
              <ul class="no-dot">
                <li>k = i;</li>
                <li>i = j;</li>
                <li>j = i % k;</li>
              </ul>
            </template>
          </v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs7>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>輾轉相除法</div>
            <div>首先先取大數i除於小數j的餘數</div>
            <div>k=i*j</div>
            <div>接著大數i變成是j</div>
            <div>小數j變成是k</div>
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
        description: require("@/assets/problems/concept/2016-03-05/13_description.png"),
        code: require("@/assets/problems/concept/2016-03-05/13_code.png")
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
