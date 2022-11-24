<template>
  <div class="memo">
    <div class="action">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="d in state.data" :key="d.id" @click="edit(d.id)">
        {{ d.content }}
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      example: "",
    };
  },
  setup() {
    const state = reactive({
      data: [],
    });
    const add = () => {
      const content = prompt("내용을 입력해주세요.");

      axios.post("/api/memos", { content: content }).then((res) => {
        state.data = res.data;
      });
    };

    const edit = (i) => {
      const content = prompt("내용을 입력해주세요", state.data[i]);
      console.log(content);
      axios.put("/api/memos/" + i, { content }).then((res) => {
        state.data = res.data;
      });
    };

    axios.get("/api/memos").then((res) => {
      state.data = res.data;
    });

    return { state, add, edit };
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.memo {
  .act {
    padding: 10px 10px 5px 5px;
    text-align: right;
  }
  ul {
    list-style: none;
    padding: 15px;
    margin: 0;

    li {
      padding: 15px;
      margin: 10px 0;
      border: 1px solid #eee;
    }
  }
}
</style>
