<script setup>
import HelloWorld from './components/HelloWorld.vue'
import UserList from '@/components/UserList.vue';
</script>

<template>
  <header>
    <img alt="BRM logo" class="logo" src="../public/logo_BRM.png" width="auto" height="auto" />

    <div class="wrapper">
      <HelloWorld msg="Prueba técnica con Vue.js" />
    </div>
  </header>

  <main>
    <UserList />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
