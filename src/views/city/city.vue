<script setup>

</script>

<template>
  <div class="city top-page">
    <h2>city</h2>
    <template v-for="item in 100" :key="item">
      <div>hhh1{{ item }}</div>
    </template>
  </div>
</template>


<style lang="less" scoped>
.city {}
</style>