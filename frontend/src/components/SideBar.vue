<template>
  <div class="sidebar">
    <my-logo />
    <my-nav />
  </div>
</template>

<script>
import MyLogo from '@/components/Logo'
import MyNav from '@/components/Nav'
export default {
  name: 'MySideBar',
  components: { MyLogo, MyNav },
}
</script>
