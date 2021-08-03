<template>
  <div class="sidebar bg-white">
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss">

.sidebar {
  width: 100%;
  max-width: 240px;
  height: calc( 100vh - 64px );
  top: 64px;
  left: 0;
  position: fixed;
}

</style>