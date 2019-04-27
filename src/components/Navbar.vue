<template>
  <div>
    <v-toolbar app color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ this.$companyName }}</span>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-btn flat to="/">
        <span class="mr-2">首頁</span>
      </v-btn>
      <v-menu offset-y ml-4>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on">課程</v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            :to="item.route"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- <v-btn flat>
        <router-link to="/author">作者</router-link>
      </v-btn>-->
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "APCS歷屆考題與解析", route: "/courses/apcs/archive" }
        // { title: "APCS觀念題基礎培訓", route: "/apcs/concept"},
        // { title: "APCS實作題基礎培訓", route: "/apcs/implement" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
