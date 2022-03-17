<template>
  <div class="postlist">
      <div v-for="post in posts" :key="post.id" class="post">
          <SinglePost :post="post"/>
      </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost";
export default {
  name: "PostList",
  components: {SinglePost},
  props: ["posts"],
  setup(props) {

  }
}
</script>

<style scoped>
  @media screen and (max-width: 400px){
    .post {
      margin: 0 auto;
      width: 60%;
    }
  }
</style>