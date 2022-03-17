<template>
    <div class="post">
      <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'details', params: { id: post.id }}">
          <h2>{{post.title}}</h2>
        <h3 v-if="post.body.length > 20">{{snippet}}...</h3>
        <h3 v-else>{{post.body}}</h3>
      </router-link>
      <span class="tag" v-for="tag in post.tags" :key="tag">
        <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'tag', params: { tag: tag }}">
          #{{tag}}
        </router-link>
      </span>
    </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 20)
    })
    return {snippet}
  }
}
</script>

<style scoped>
  .post {
    text-decoration: none;
    margin: 40px 460px;
    padding: 10px 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid lightgrey;
    background-color: #f4f4f4;
    border-radius: 10px;
    max-width: 1000px;
    min-width: 500px;
  }
  .post h2 {
    display: inline-block;
    position: relative;
    background-color: #ff8800;
    border-radius: 5px;
    color: white;
    padding: 3px 10px;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .tag {
    background-color: lightgrey;
    padding: 3px 8px;
    border-radius: 100px;
    margin-right: 10px;
    transition: 0.2s;
    cursor: pointer;
  }
  .tag:hover {
    background-color: #ff8800;
    color: white;
    padding: 3px 8px;
    border-radius: 100px;
    margin-right: 10px;
  }

</style>