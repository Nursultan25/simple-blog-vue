import {ref} from "vue";

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {

        // await new Promise(resolve => {
        //     setTimeout(resolve, 100)
        // })

        try {
            let data = await fetch("https://todoshkaa.herokuapp.com/api/blog/get-all")
            if (!data.ok) {
                throw Error("no data available")
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {posts, error, load}
}

export default getPosts