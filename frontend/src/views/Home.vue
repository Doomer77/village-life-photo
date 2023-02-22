<template>
  <div class="home">
    <my-side-bar />
    <my-header />
  </div>
</template>

<script>
import MySideBar from '@/components/SideBar'
import MyHeader from '@/components/Header'

export default {
  name: 'MyHome',
  components: {
    MySideBar,
    MyHeader,
  },
}
</script>
