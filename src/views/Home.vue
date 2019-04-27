<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs2></v-flex>
      <v-flex xs8>
        <h2 class="text-xs-center">[成立目標]</h2>
        <p class="subheading text-xs-center">
          <span class="font-weight-bold">接棒程式設計學校</span
          >致力於提供國小/國中/高中學生豐富的程式學習資源
          <br />讓有志於就讀資訊相關科系的學生能更有效率的學習
          <br />如果您對於教材有任何問題，歡迎寄信到 topcodeschool@gmail.com
          <!-- <a href="https://app2.sli.do/event/nwa4lpa7" target="_blank"
            >sli.do</a
          >-->
        </p>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs2></v-flex>
      <v-flex xs1></v-flex>
      <v-flex xs10>
        <h2 class="text-xs-center mt-2">[接棒團隊]</h2>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                v-for="member in members"
                :key="member.name"
                v-bind="{ [`xs${member.flex}`]: true }"
              >
                <v-card>
                  <v-img :src="member.src" class="member-image" height="200px">
                    <!-- <v-container fill-height fluid pa-2>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span
                            class="headline white--text"
                            v-text="member.title"
                          ></span>
                        </v-flex>
                      </v-layout>
                    </v-container>-->
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">{{ member.name }}</span>
                      <br />
                      <span>{{ member.education }}</span>
                      <br />
                      <span>{{ member.skill }}</span>
                    </div>
                  </v-card-title>

                  <!-- <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>-->
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs1></v-flex>
      <v-flex xs2></v-flex>
      <v-flex xs8>
        <h2 class="text-xs-center mt-2">[合作洽談]</h2>
        <p class="subheading text-xs-center">
          如果你有開設APCS實體課程的需求(6人以上)
          <br />歡迎來信到topcodeschool@gmail.com <br />合作地區:台南東區
        </p>
      </v-flex>
      <v-flex xs2></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: "Jolin",
          src: require("@/assets/members/Jolin.jpg"),
          education: "學歷: 成大資訊系/成大資訊研究所",
          skill: "專長: C/Python",
          flex: 4
        },
        {
          name: "Dagi",
          src: require("@/assets/members/Dagi.jpg"),
          education: "學歷: 成大資訊系/交大資訊研究所",
          skill: "專長: C/Javascript",
          flex: 4
        },
        {
          name: "Chiang",
          src: require("@/assets/members/Chiang.jpg"),
          education: "學歷: 成大資訊系/成大數學研究所",
          skill: "專長: Math",
          flex: 4
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.member-image {
  border-radius: 50%;
}

.hyperlink {
  text-decoration: None;
}
</style>
