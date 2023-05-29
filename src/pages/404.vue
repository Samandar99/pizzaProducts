<template>
  <div class="error">
    <h1>Ошибка 404 такая страница не найдена</h1>
    <img src="@/assets/images/404-error-3060993_960_720.webp" alt="" />
    <router-link to="/">на главную</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .error{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }

</style>