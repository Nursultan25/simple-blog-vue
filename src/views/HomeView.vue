<template>
  <div class="home">
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import getPosts from "@/composables/getPosts";
import Spinner from "@/components/Spinner";


export default {
  name: 'HomeView',
  setup() {
    const {posts, error, load} = getPosts()

    load()

    return { posts, error }
  },
  components: {
    PostList,
    Spinner
  }
}
</script>

<style>
  .home {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  .create {
    text-decoration: none;
    margin: 20px 30px;
    display: block;
    font-size: 24px;
    color: #9e9e9e;
  }
</style>
