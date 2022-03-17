<template>
  <div class="details">
    <div v-if="error">{{error}}</div>
      <div v-if="post" class="post">
        <h2>{{post.title}}</h2>
        <p class="pre">{{post.body}}</p>
        <span class="tag" v-for="tag in post.tags">
            <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'tag', params: { tag: tag }}">
              #{{tag}}
            </router-link>
        </span>
      </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner";

export default {
  name: "Details",
  components: {Spinner},
  props: ['id'],
  setup(props) {
    const { post, error, load } = getPost(props.id)

    load()

    return { post, error }
  }
}
</script>

<style scoped>
.details {
  text-decoration: none;
  position: relative;
  margin-left: 15%;
  justify-content: center;
  padding: 20px 30px ;
  border-bottom: 2px solid lightgrey;
  border-radius: 10px;
  max-width: 1000px;
  min-width: 500px;
}
.details h2 {
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
  cursor: pointer;
  transition: 0.2s;
}

.tag:hover {
  background-color: #ff8800;
  color: white;
  padding: 3px 8px;
  border-radius: 100px;
  margin-right: 10px;
}
</style>