<template>
  <div class="ground">
    <Header />
    <Memo />
    <Footer />
  </div>
</template>
<script>
import Header from "./HeaderCom.vue";
import Footer from "./FooterCom.vue";
import Memo from "./MemoCom.vue";
export default {
  components: { Header, Footer, Memo },
  data() {
    return {
      example: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
