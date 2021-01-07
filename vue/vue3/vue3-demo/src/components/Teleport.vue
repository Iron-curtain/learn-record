<template>
  <div class="confirm-model">
    <button @click="isOpen = true">打开</button>
    <teleport to="#foot-container">
      <div v-if="isOpen">
        <p>打发打发士大夫的撒</p>
      <button @click="isOpen = false">取消</button>
    </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let isOpen = ref(false)
    return { isOpen }
  }
}
</script>

<style>

</style>