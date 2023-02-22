<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link
          class="nav__link"
          :to="{ name: 'home' }"
          :class="{ active: routeName === 'home' }"
        >
          <i class="bi bi-house"></i> На главную</router-link
        >
      </li>
      <li class="nav__item">
        <router-link
          class="nav__link"
          :to="{ name: 'news' }"
          :class="{ active: routeName === 'news' }"
          ><i class="bi bi-patch-exclamation"></i> Новости</router-link
        >
      </li>
      <li class="nav__item">
        <router-link
          class="nav__link"
          :class="{ active: routeName === 'gallery' }"
          :to="{ name: 'gallery' }"
          ><i class="bi bi-images"></i> Галерея</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MyNav',
  computed: {
    routeName() {
      return this.$route.name
    },
  },
}
</script>
