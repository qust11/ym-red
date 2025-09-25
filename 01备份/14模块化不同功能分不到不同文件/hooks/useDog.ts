import { ref } from 'vue'
import axios from 'axios'

export default function () {
  let dogList = ref<string[]>([])

  async function getDog() {
    try {
      let res = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogList.value.push(res.data.message)
    } catch (error) {
      alert(error)
    }
  }
  return { dogList, getDog }
}
