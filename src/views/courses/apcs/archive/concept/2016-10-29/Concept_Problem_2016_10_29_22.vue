<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <!-- (A)   (B)    (C)      (D)    -->
          <v-radio value="error_1" color="error">
            <template slot="label">
              <div>
                1100 0101 1001 1001
                <sub>2</sub>
              </div>
            </template>
          </v-radio>
          <v-radio value="success_2" color="success">
            <template slot="label">
              <div>
                162631
                <sub>8</sub>
              </div>
            </template>
          </v-radio>
          <v-radio value="error_3" color="error">
            <template slot="label">
              <div>
                58787
                <sub>16</sub>
              </div>
            </template>
          </v-radio>
          <v-radio value="error_4" color="error">
            <template slot="label">
              <div>
                F599
                <sub>16</sub>
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>
              5487
              <sub>10</sub> = 156F
              <sub>16</sub>
            </div>
            <div>
              D02A
              <sub>16</sub>+156F <sub>16</sub> = E599
              <sub>16</sub>
            </div>
            <div>C, D選項為錯誤選項</div>
            <div>
              E599
              <sub>16</sub> = ‭1110 0101 1001 1001‬
              <sub>2</sub>
            </div>
            <div>A選項為錯誤選項</div>
            <div>
              1 110 010 110 011 001‬
              <sub>2</sub>
              =‭162631‬
              <sub>8</sub>
            </div>
            <div>
              故answer = ‭162631‬
              <sub>8</sub>
            </div>
            <div>
              <a
                href="https://openhome.cc/Gossip/CGossip/String.html"
                target="_blank"
                >參考連結</a
              >
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
      date: "2016-10-29",
      image: {
        description: require("@/assets/problems/concept/2016-10-29/22_description.png")
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
