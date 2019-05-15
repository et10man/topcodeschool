<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-img :src="image.description"></v-img>
      </v-flex>
      <v-flex xs4>
        <v-radio-group v-model="answerGroup">
          <v-radio
            label="以有限數目的位元儲存變數值"
            color="success"
            value="success_1"
          ></v-radio>
          <v-radio label="電壓不穩定" color="error" value="error_2"></v-radio>
          <v-radio
            label="作業系統與程式不甚相容"
            color="error"
            value="error_3"
          ></v-radio>
          <v-radio
            label="變數過多導致編譯器無法完全處理"
            color="error"
            value="error_4"
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
            <div>
              <a
                href="http://www.csie.ntnu.edu.tw/~u91029/Number.html"
                target="_blank"
                >參考連結</a
              >
              <div>
                <blockquote>
                  數值範圍有固定的上下限。如果超過上下限，稱做「溢位 overflow
                  」。
                </blockquote>
              </div>
              <div>
                <blockquote>
                  依照 C 程式語言規格書，整數溢位是未定義行為，可能導致當機。
                </blockquote>
              </div>
            </div>
            <div>故answer = 以有限數目的位元儲存變數值</div>
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
        description: require("@/assets/problems/concept/2017-03-04/24_description.png")
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
