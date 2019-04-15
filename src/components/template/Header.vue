<template>
  <mt-header fixed :title="title">
    <router-link to="" slot="left">
      <mt-button icon="back" @click="URlbutt()"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    URlbutt() {
      this.$router.back(-1);
    }
  }
};
</script>

<style>
</style>
