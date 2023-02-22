<template>
  <div class="logo">
    <router-link class="logo__link" :to="{ name: 'home' }">
      <img src="../assets/images/logo.png" alt="" class="logo__img" />
      <h1 class="logo__text">Фото русской глубинки</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MyLogo',
}
</script>
