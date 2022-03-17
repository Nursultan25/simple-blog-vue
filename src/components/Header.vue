<template>
  <div class="header">
    <router-link to="/">
    <h1><button class="logo">Vue Blog</button></h1>
    </router-link>
    <nav>
      <router-link style="text-decoration: none; color: inherit;" to="/">
        <button class="navrow">
          Home
        </button>
      </router-link>

      <router-link style="text-decoration: none; color: inherit;" to="/create">
        <button class="navrow">
          Create new post
        </button>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

  .header {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  header h1 {
    font-size: 48px;
  }
  .logo {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 48px;
    font-family: Nunito;
  }
  .navrow {
    font-family: Nunito;
    color: #474747;
    border: none;
    background: none;
    font-size: 20px;
    transition: 0.2s;
    border-radius: 5px;
    padding: 3px 8px;
    margin-left: 10px;
    cursor: pointer;
  }
  .navrow:hover {
    font-size: 22px;
  }
  .navrow:focus {
    font-size: 20px;
    color: white;
    background-color: grey;
  }
</style>