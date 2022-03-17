<template>
    <div class="create">
        <form @submit.prevent="handleCreate">
          <label for="title">Title</label>
          <input v-model="title" type="text" id="title" required>

          <label for="content">Content</label>
          <textarea v-model="body" id="content" required></textarea>

          <label for="tag">Tags (hit enter to add a tag)</label>
          <input v-model="tag" type="text" id="tag"
                 @keydown.space.prevent="handleEnter"
                 @keydown.enter.prevent="handleEnter">
          <div v-for="tag in tags" :key="tag" class="tags">
            #{{tag}}
          </div>

          <button>Add post</button>
        </form>
    </div>
</template>

<script>
import {ref} from "vue";
import router from "@/router";

export default {
  name: "CreateForm",
  setup() {
    const title = ref("")
    const body = ref("")
    const tag = ref("")
    const tags = ref([])

    const handleEnter = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value.trim())
      }
      tag.value = ""
    }

    const handleCreate = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value
      }

      await fetch("https://todoshkaa.herokuapp.com/api/blog/create", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(post)
      }).then(router.push("/"))
    }

    return {title, tags, body, tag, handleEnter, handleCreate}
  }
}
</script>

<style scoped>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    font-size: 14px;
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    outline: none;
    padding: 10px;
    border: 2px solid #c8c8c8;
    transition: 0.2s;
    color: #626262;
  }
  textarea:focus {
    box-shadow: 0 0 5px 2px rgba(255, 136, 0, 0.57);
  }
  input:focus {
    box-shadow: 0 0 5px 2px rgba(255, 136, 0, 0.51);
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
    background-color: #ff8800;
    padding: 3px 8px;
    border-radius: 5px;
  }
  button {
    display: block;
    margin-top: 30px;
    background: transparent;
    border: 2px solid #ff8800;
    border-radius: 5px;
    color: black;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    background: #ff8800;
    color: white;
  }
  button:active {
    background: transparent;
    color: black;
  }
  .tags {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>