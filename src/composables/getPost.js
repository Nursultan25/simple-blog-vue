import {ref} from "vue";

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {

            /*await new Promise(resolve => {
                setTimeout(resolve, 100)
            })*/

            let data = await fetch("https://todoshkaa.herokuapp.com/api/blog/get/" + id)
            if (!data.ok) {
                throw Error("post with id " + id + " does not exist")
            }
            post.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {post, error, load}
}

export default getPost