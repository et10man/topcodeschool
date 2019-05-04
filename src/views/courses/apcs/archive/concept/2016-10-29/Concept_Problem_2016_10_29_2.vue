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
          <v-radio value="error_1" color="error">
            <template slot="label">
              <ul class="no-dot">
                <li>if (x==10) y = 'a';</li>
                <li>if (x==20 || x==30) y = 'b';</li>
                <li>y = 'c';</li>
              </ul>
            </template>
          </v-radio>
          <v-radio value="success_2" color="success">
            <template slot="label">
              <ul class="no-dot">
                <li>if (x==10) y = 'a';</li>
                <li>else if (x==20 || x==30) y = 'b';</li>
                <li>else y = 'c';</li>
              </ul>
            </template>
          </v-radio>
          <v-radio value="error_3" color="error">
            <template slot="label">
              <ul class="no-dot">
                <li>if (x==10) y = 'a';</li>
                <li>if (x＞=20 && x＜=30) y = 'b';</li>
                <li>y = 'c';</li>
              </ul>
            </template>
          </v-radio>
          <v-radio value="error_4" color="error">
            <template slot="label">
              <ul class="no-dot">
                <li>if (x==10) y = 'a';</li>
                <li>else if(x＞=20 && x＜=30) y = 'b';</li>
                <li>else y = 'c';</li>
              </ul>
            </template>
          </v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">
          {{ bShowAnswer ? "隱藏詳解" : "顯示詳解" }}
        </v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>switch的case如果沒有加break</div>
            <div>會接著執行下面的程式</div>
            <div>所以x == 20 || x == 30 會放在同一個判斷式</div>
            <div>故answer = 第二個選項</div>
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
        description: require("@/assets/problems/concept/2016-10-29/2_description.png"),
        code: require("@/assets/problems/concept/2016-10-29/2_code.png")
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
