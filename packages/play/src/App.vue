<script setup lang="ts">
import type {DropdownItemProps} from '@er-ui-element/components'
const confirm = () => {
  console.log('确认')
}
const cancel = () => {
  console.log('取消')
}
const items:DropdownItemProps[] = [
  {command:'1',label:'Action 1'},
  {command:'2',label:'Action 2'},
  {command:'3',label:'Action 3'},
  {command:'4',label:'Action 4'},
]
</script>

<template>
  <er-button type="primary" size="samll">test</er-button>
  <er-collapse :modelValue="['a']">
    <er-collapse-item title="标题A">
      <div>this is a content</div>
    </er-collapse-item>
  </er-collapse>
  <er-alert>
    <slot>
      this is content
    </slot>
  </er-alert>
  <er-popconfirm title="确认信息" @confirm="confirm" @cancel="cancel">
    <er-button>点击确认</er-button>
  </er-popconfirm>
  <er-dropdown :items="items">
    this is dropdown
  </er-dropdown>
</template>

<style scoped>
</style>
