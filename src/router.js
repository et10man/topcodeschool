import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Author from "./views/Author.vue";
import APCSArchive from "./views/courses/apcs/archive/APCSArchive.vue";
// 2016-03-05_觀念題
import Concept_Problem_2016_03_05_1 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_1.vue";
import Concept_Problem_2016_03_05_2 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_2.vue";
import Concept_Problem_2016_03_05_3 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_3.vue";
import Concept_Problem_2016_03_05_4 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_4.vue";
import Concept_Problem_2016_03_05_5 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_5.vue";
import Concept_Problem_2016_03_05_6 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_6.vue";
import Concept_Problem_2016_03_05_7 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_7.vue";
import Concept_Problem_2016_03_05_8 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_8.vue";
import Concept_Problem_2016_03_05_9 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_9.vue";
import Concept_Problem_2016_03_05_10 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_10.vue";
import Concept_Problem_2016_03_05_11 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_11.vue";
import Concept_Problem_2016_03_05_12 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_12.vue";
import Concept_Problem_2016_03_05_13 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_13.vue";
import Concept_Problem_2016_03_05_14 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_14.vue";
import Concept_Problem_2016_03_05_15 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_15.vue";
import Concept_Problem_2016_03_05_16 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_16.vue";
import Concept_Problem_2016_03_05_17 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_17.vue";
import Concept_Problem_2016_03_05_18 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_18.vue";
import Concept_Problem_2016_03_05_19 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_19.vue";
import Concept_Problem_2016_03_05_20 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_20.vue";
import Concept_Problem_2016_03_05_21 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_21.vue";
import Concept_Problem_2016_03_05_22 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_22.vue";
import Concept_Problem_2016_03_05_23 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_23.vue";
import Concept_Problem_2016_03_05_24 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_24.vue";
import Concept_Problem_2016_03_05_25 from "./views/courses/apcs/archive/concept/2016-03-05/Concept_Problem_2016_03_05_25.vue";
// 2016-10-29_觀念題
import Concept_Problem_2016_10_29_1 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_1.vue";
import Concept_Problem_2016_10_29_2 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_2.vue";
import Concept_Problem_2016_10_29_3 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_3.vue";
import Concept_Problem_2016_10_29_4 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_4.vue";
import Concept_Problem_2016_10_29_5 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_5.vue";
import Concept_Problem_2016_10_29_6 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_6.vue";
import Concept_Problem_2016_10_29_7 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_7.vue";
import Concept_Problem_2016_10_29_8 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_8.vue";
import Concept_Problem_2016_10_29_9 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_9.vue";
import Concept_Problem_2016_10_29_10 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_10.vue";
import Concept_Problem_2016_10_29_11 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_11.vue";
import Concept_Problem_2016_10_29_12 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_12.vue";
import Concept_Problem_2016_10_29_13 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_13.vue";
import Concept_Problem_2016_10_29_14 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_14.vue";
import Concept_Problem_2016_10_29_15 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_15.vue";
import Concept_Problem_2016_10_29_16 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_16.vue";
import Concept_Problem_2016_10_29_17 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_17.vue";
import Concept_Problem_2016_10_29_18 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_18.vue";
import Concept_Problem_2016_10_29_19 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_19.vue";
import Concept_Problem_2016_10_29_20 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_20.vue";
import Concept_Problem_2016_10_29_21 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_21.vue";
import Concept_Problem_2016_10_29_22 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_22.vue";
import Concept_Problem_2016_10_29_23 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_23.vue";
import Concept_Problem_2016_10_29_24 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_24.vue";
import Concept_Problem_2016_10_29_25 from "./views/courses/apcs/archive/concept/2016-10-29/Concept_Problem_2016_10_29_25.vue";
// 2017-03-04_觀念題
import Concept_Problem_2017_03_04_1 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_1.vue";
import Concept_Problem_2017_03_04_2 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_2.vue";
import Concept_Problem_2017_03_04_3 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_3.vue";
import Concept_Problem_2017_03_04_4 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_4.vue";
import Concept_Problem_2017_03_04_5 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_5.vue";
import Concept_Problem_2017_03_04_6 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_6.vue";
import Concept_Problem_2017_03_04_7 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_7.vue";
import Concept_Problem_2017_03_04_8 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_8.vue";
import Concept_Problem_2017_03_04_9 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_9.vue";
import Concept_Problem_2017_03_04_10 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_10.vue";
import Concept_Problem_2017_03_04_11 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_11.vue";
import Concept_Problem_2017_03_04_12 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_12.vue";
import Concept_Problem_2017_03_04_13 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_13.vue";
import Concept_Problem_2017_03_04_14 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_14.vue";
import Concept_Problem_2017_03_04_15 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_15.vue";
import Concept_Problem_2017_03_04_16 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_16.vue";
import Concept_Problem_2017_03_04_17 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_17.vue";
import Concept_Problem_2017_03_04_18 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_18.vue";
import Concept_Problem_2017_03_04_19 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_19.vue";
import Concept_Problem_2017_03_04_20 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_20.vue";
import Concept_Problem_2017_03_04_21 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_21.vue";
import Concept_Problem_2017_03_04_22 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_22.vue";
import Concept_Problem_2017_03_04_23 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_23.vue";
import Concept_Problem_2017_03_04_24 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_24.vue";
import Concept_Problem_2017_03_04_25 from "./views/courses/apcs/archive/concept/2017-03-04/Concept_Problem_2017_03_04_25.vue";
// 2016-03-05_實作題

import Implement_Problem_2016_03_05_1 from "./views/courses/apcs/archive/implement/2016-03-05/Implement_Problem_2016_03_05_1.vue";
import Implement_Problem_2016_03_05_2 from "./views/courses/apcs/archive/implement/2016-03-05/Implement_Problem_2016_03_05_2.vue";
import Implement_Problem_2016_03_05_3 from "./views/courses/apcs/archive/implement/2016-03-05/Implement_Problem_2016_03_05_3.vue";
import Implement_Problem_2016_03_05_4 from "./views/courses/apcs/archive/implement/2016-03-05/Implement_Problem_2016_03_05_4.vue";
// 2016-10-29_實作題
import Implement_Problem_2016_10_29_1 from "./views/courses/apcs/archive/implement/2016-10-29/Implement_Problem_2016_10_29_1.vue";
import Implement_Problem_2016_10_29_2 from "./views/courses/apcs/archive/implement/2016-10-29/Implement_Problem_2016_10_29_2.vue";
import Implement_Problem_2016_10_29_3 from "./views/courses/apcs/archive/implement/2016-10-29/Implement_Problem_2016_10_29_3.vue";
import Implement_Problem_2016_10_29_4 from "./views/courses/apcs/archive/implement/2016-10-29/Implement_Problem_2016_10_29_4.vue";
// 2017-03-06_實作題
import Implement_Problem_2017_03_06_1 from "./views/courses/apcs/archive/implement/2017-03-06/Implement_Problem_2017_03_06_1.vue";
import Implement_Problem_2017_03_06_2 from "./views/courses/apcs/archive/implement/2017-03-06/Implement_Problem_2017_03_06_2.vue";
import Implement_Problem_2017_03_06_3 from "./views/courses/apcs/archive/implement/2017-03-06/Implement_Problem_2017_03_06_3.vue";
import Implement_Problem_2017_03_06_4 from "./views/courses/apcs/archive/implement/2017-03-06/Implement_Problem_2017_03_06_4.vue";
// 2017-10-28_實作題
import Implement_Problem_2017_10_28_1 from "./views/courses/apcs/archive/implement/2017-10-28/Implement_Problem_2017_10_28_1.vue";
import Implement_Problem_2017_10_28_2 from "./views/courses/apcs/archive/implement/2017-10-28/Implement_Problem_2017_10_28_2.vue";
import Implement_Problem_2017_10_28_3 from "./views/courses/apcs/archive/implement/2017-10-28/Implement_Problem_2017_10_28_3.vue";
import Implement_Problem_2017_10_28_4 from "./views/courses/apcs/archive/implement/2017-10-28/Implement_Problem_2017_10_28_4.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/author",
      name: "Author",
      component: Author
    },
    {
      path: "/courses/apcs/archive",
      name: "apcs",
      component: APCSArchive,
      children: [
        // 2016-03-05_觀念題
        {
          path: "concept/2016-03-05/1",
          component: Concept_Problem_2016_03_05_1
        },
        {
          path: "concept/2016-03-05/2",
          component: Concept_Problem_2016_03_05_2
        },
        {
          path: "concept/2016-03-05/3",
          component: Concept_Problem_2016_03_05_3
        },
        {
          path: "concept/2016-03-05/4",
          component: Concept_Problem_2016_03_05_4
        },
        {
          path: "concept/2016-03-05/5",
          component: Concept_Problem_2016_03_05_5
        },
        {
          path: "concept/2016-03-05/6",
          component: Concept_Problem_2016_03_05_6
        },
        {
          path: "concept/2016-03-05/7",
          component: Concept_Problem_2016_03_05_7
        },
        {
          path: "concept/2016-03-05/8",
          component: Concept_Problem_2016_03_05_8
        },
        {
          path: "concept/2016-03-05/9",
          component: Concept_Problem_2016_03_05_9
        },
        {
          path: "concept/2016-03-05/10",
          component: Concept_Problem_2016_03_05_10
        },
        {
          path: "concept/2016-03-05/11",
          component: Concept_Problem_2016_03_05_11
        },
        {
          path: "concept/2016-03-05/12",
          component: Concept_Problem_2016_03_05_12
        },
        {
          path: "concept/2016-03-05/13",
          component: Concept_Problem_2016_03_05_13
        },
        {
          path: "concept/2016-03-05/14",
          component: Concept_Problem_2016_03_05_14
        },
        {
          path: "concept/2016-03-05/15",
          component: Concept_Problem_2016_03_05_15
        },
        {
          path: "concept/2016-03-05/16",
          component: Concept_Problem_2016_03_05_16
        },
        {
          path: "concept/2016-03-05/17",
          component: Concept_Problem_2016_03_05_17
        },
        {
          path: "concept/2016-03-05/18",
          component: Concept_Problem_2016_03_05_18
        },
        {
          path: "concept/2016-03-05/19",
          component: Concept_Problem_2016_03_05_19
        },
        {
          path: "concept/2016-03-05/20",
          component: Concept_Problem_2016_03_05_20
        },
        {
          path: "concept/2016-03-05/21",
          component: Concept_Problem_2016_03_05_21
        },
        {
          path: "concept/2016-03-05/22",
          component: Concept_Problem_2016_03_05_22
        },
        {
          path: "concept/2016-03-05/23",
          component: Concept_Problem_2016_03_05_23
        },
        {
          path: "concept/2016-03-05/24",
          component: Concept_Problem_2016_03_05_24
        },
        {
          path: "concept/2016-03-05/25",
          component: Concept_Problem_2016_03_05_25
        },
        // 2016-10-29_觀念題
        {
          path: "concept/2016-10-29/1",
          component: Concept_Problem_2016_10_29_1
        },
        {
          path: "concept/2016-10-29/2",
          component: Concept_Problem_2016_10_29_2
        },
        {
          path: "concept/2016-10-29/3",
          component: Concept_Problem_2016_10_29_3
        },
        {
          path: "concept/2016-10-29/4",
          component: Concept_Problem_2016_10_29_4
        },
        {
          path: "concept/2016-10-29/5",
          component: Concept_Problem_2016_10_29_5
        },
        {
          path: "concept/2016-10-29/6",
          component: Concept_Problem_2016_10_29_6
        },
        {
          path: "concept/2016-10-29/7",
          component: Concept_Problem_2016_10_29_7
        },
        {
          path: "concept/2016-10-29/8",
          component: Concept_Problem_2016_10_29_8
        },
        {
          path: "concept/2016-10-29/9",
          component: Concept_Problem_2016_10_29_9
        },
        {
          path: "concept/2016-10-29/10",
          component: Concept_Problem_2016_10_29_10
        },
        {
          path: "concept/2016-10-29/11",
          component: Concept_Problem_2016_10_29_11
        },
        {
          path: "concept/2016-10-29/12",
          component: Concept_Problem_2016_10_29_12
        },
        {
          path: "concept/2016-10-29/13",
          component: Concept_Problem_2016_10_29_13
        },
        {
          path: "concept/2016-10-29/14",
          component: Concept_Problem_2016_10_29_14
        },
        {
          path: "concept/2016-10-29/15",
          component: Concept_Problem_2016_10_29_15
        },
        {
          path: "concept/2016-10-29/16",
          component: Concept_Problem_2016_10_29_16
        },
        {
          path: "concept/2016-10-29/17",
          component: Concept_Problem_2016_10_29_17
        },
        {
          path: "concept/2016-10-29/18",
          component: Concept_Problem_2016_10_29_18
        },
        {
          path: "concept/2016-10-29/19",
          component: Concept_Problem_2016_10_29_19
        },
        {
          path: "concept/2016-10-29/20",
          component: Concept_Problem_2016_10_29_20
        },
        {
          path: "concept/2016-10-29/21",
          component: Concept_Problem_2016_10_29_21
        },
        {
          path: "concept/2016-10-29/22",
          component: Concept_Problem_2016_10_29_22
        },
        {
          path: "concept/2016-10-29/23",
          component: Concept_Problem_2016_10_29_23
        },
        {
          path: "concept/2016-10-29/24",
          component: Concept_Problem_2016_10_29_24
        },
        {
          path: "concept/2016-10-29/25",
          component: Concept_Problem_2016_10_29_25
        },
        // 2017-03-04_觀念題
        {
          path: "concept/2017-03-04/1",
          component: Concept_Problem_2017_03_04_1
        },
        {
          path: "concept/2017-03-04/2",
          component: Concept_Problem_2017_03_04_2
        },
        {
          path: "concept/2017-03-04/3",
          component: Concept_Problem_2017_03_04_3
        },
        {
          path: "concept/2017-03-04/4",
          component: Concept_Problem_2017_03_04_4
        },
        {
          path: "concept/2017-03-04/5",
          component: Concept_Problem_2017_03_04_5
        },
        {
          path: "concept/2017-03-04/6",
          component: Concept_Problem_2017_03_04_6
        },
        {
          path: "concept/2017-03-04/7",
          component: Concept_Problem_2017_03_04_7
        },
        {
          path: "concept/2017-03-04/8",
          component: Concept_Problem_2017_03_04_8
        },
        {
          path: "concept/2017-03-04/9",
          component: Concept_Problem_2017_03_04_9
        },
        {
          path: "concept/2017-03-04/10",
          component: Concept_Problem_2017_03_04_10
        },
        {
          path: "concept/2017-03-04/11",
          component: Concept_Problem_2017_03_04_11
        },
        {
          path: "concept/2017-03-04/12",
          component: Concept_Problem_2017_03_04_12
        },
        {
          path: "concept/2017-03-04/13",
          component: Concept_Problem_2017_03_04_13
        },
        {
          path: "concept/2017-03-04/14",
          component: Concept_Problem_2017_03_04_14
        },
        {
          path: "concept/2017-03-04/15",
          component: Concept_Problem_2017_03_04_15
        },
        {
          path: "concept/2017-03-04/16",
          component: Concept_Problem_2017_03_04_16
        },
        {
          path: "concept/2017-03-04/17",
          component: Concept_Problem_2017_03_04_17
        },
        {
          path: "concept/2017-03-04/18",
          component: Concept_Problem_2017_03_04_18
        },
        {
          path: "concept/2017-03-04/19",
          component: Concept_Problem_2017_03_04_19
        },
        {
          path: "concept/2017-03-04/20",
          component: Concept_Problem_2017_03_04_20
        },
        {
          path: "concept/2017-03-04/21",
          component: Concept_Problem_2017_03_04_21
        },
        {
          path: "concept/2017-03-04/22",
          component: Concept_Problem_2017_03_04_22
        },
        {
          path: "concept/2017-03-04/23",
          component: Concept_Problem_2017_03_04_23
        },
        {
          path: "concept/2017-03-04/24",
          component: Concept_Problem_2017_03_04_24
        },
        {
          path: "concept/2017-03-04/25",
          component: Concept_Problem_2017_03_04_25
        },

        // 2016-03-05_實作題
        {
          path: "implement/2016-03-05/1",
          component: Implement_Problem_2016_03_05_1
        },
        {
          path: "implement/2016-03-05/2",
          component: Implement_Problem_2016_03_05_2
        },
        {
          path: "implement/2016-03-05/3",
          component: Implement_Problem_2016_03_05_3
        },
        {
          path: "implement/2016-03-05/4",
          component: Implement_Problem_2016_03_05_4
        },
        // 2016-10-29_實作題
        {
          path: "implement/2016-10-29/1",
          component: Implement_Problem_2016_10_29_1
        },
        {
          path: "implement/2016-10-29/2",
          component: Implement_Problem_2016_10_29_2
        },
        {
          path: "implement/2016-10-29/3",
          component: Implement_Problem_2016_10_29_3
        },
        {
          path: "implement/2016-10-29/4",
          component: Implement_Problem_2016_10_29_4
        },
        // 2017-03-06_實作題
        {
          path: "implement/2017-03-06/1",
          component: Implement_Problem_2017_03_06_1
        },
        {
          path: "implement/2017-03-06/2",
          component: Implement_Problem_2017_03_06_2
        },
        {
          path: "implement/2017-03-06/3",
          component: Implement_Problem_2017_03_06_3
        },
        {
          path: "implement/2017-03-06/4",
          component: Implement_Problem_2017_03_06_4
        },
        // 2017-10-28_實作題
        {
          path: "implement/2017-10-28/1",
          component: Implement_Problem_2017_10_28_1
        },
        {
          path: "implement/2017-10-28/2",
          component: Implement_Problem_2017_10_28_2
        },
        {
          path: "implement/2017-10-28/3",
          component: Implement_Problem_2017_10_28_3
        },
        {
          path: "implement/2017-10-28/4",
          component: Implement_Problem_2017_10_28_4
        }
      ]
    }
  ]
});
