<template>
  <div class="loading">
    <SyncOutlined spin style="font-size: 30px;" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { SyncOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  setup () {
    return {

    }
  },
  components: {
    SyncOutlined
  }
})
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
</style>
