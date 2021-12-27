<template>
  <router-view />
</template>

<script setup>
import { useRouter } from "vue-router";
const isLoggedIn = !!localStorage.getItem("isLoggedIn");
if (!isLoggedIn) {
  useRouter().push({
    name: "login",
  });
}
</script>

<style></style>
