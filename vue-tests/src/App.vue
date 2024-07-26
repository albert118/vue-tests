<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import PvIcon from './components/PvIcon.vue';
import { Size } from './components/Size.ts';
</script>

<template>
  <div style="display: flex; justify-content: space-evenly">
    <PvIcon :size="Size.Large" icon="vite" class="logo" alt="Vite logo" href="https://vitejs.dev/" />
    <PvIcon :size="Size.Large" icon="vue" class="logo vue" alt="Vue logo" href="https://vuejs.org/" />
  </div>
  <div style="display: flex; justify-content: space-around">
    <PvIcon icon="calendar" class="fill-special p-8" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* demo the fill class option and how we can get fancy now */
.fill-special {
  fill: #fff;
  will-change: filter;
  transition: filter 300ms;
}

.fill-special:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
