<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio label="未宣告" color="error" value="error_1"></v-radio>
          <v-radio label="\0" color="success" value="success_2"></v-radio>
          <v-radio label="!" color="error" value="error_3"></v-radio>
          <v-radio label="\n" color="error" value="error_4"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex xs8>
        <v-btn color="info" @click="bShowAnswer = !bShowAnswer">{{
          bShowAnswer ? "隱藏詳解" : "顯示詳解"
        }}</v-btn>
        <div v-if="bShowAnswer">
          <h2>解答:</h2>
          <div class="subheading">
            <div>因為字串會在最後加上一個空（null）字元 '\0'</div>
            <div>故answer = \0</div>
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
        description: require("@/assets/problems/concept/2016-10-29/13_description.png")
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
