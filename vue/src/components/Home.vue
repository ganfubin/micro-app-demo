<template>
    <div>111111</div>
</template>
<script>
  import {onMounted} from 'vue';
  import {getCommonFn} from 'common/utils'

  export default {
    name: 'Home',
    setup() {
      onMounted(() => {
        getCommonFn();
        console.log('mounted!')
      })
    }
  }
</script>