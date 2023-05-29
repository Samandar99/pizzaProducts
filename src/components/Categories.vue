<template>
  <div class="menu__foods container">
    <div v-for="link in links" :key="link.url">
      <router-link :to="link.url">
        <div class="menu__link">
          <span>{{ link.title }}</span>
            <i class="bx bxs-pizza"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["links"],
};
</script>

<style></style>