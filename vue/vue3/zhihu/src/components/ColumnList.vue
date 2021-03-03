<template>
  <div class="list">
    <a-list item-layout="vertical" size="large" :data-source="columnList">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #extra>
            <img
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #avatar><a-avatar :src="item.avatar.url" /></template>
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {
  },
  props: {
    list: {
      type: Array as PropType<any>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list
    })
    return {
      columnList
    }
  }
})
</script>

<style scoped>
.list{
  width: 100%;
  padding: 0 100px;
}
</style>
