<template>
  <div class="about">
    <h1>This is the Gallery page</h1>
  </div>
</template>

<script>
  import globalStore from '../store'

  console.log(globalStore.productList);

  export default {
    name: 'Gallery',

  }
</script>
