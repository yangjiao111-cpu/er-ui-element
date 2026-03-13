<script setup lang="ts">
import type {DropdownItemProps} from '@er-ui-element/components'
import { ErNotification } from 'er-ui-element'
import { ErMessage } from 'er-ui-element'
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
const openSuccess = () => {
  ErMessage({
    type:'success',
    showClose:true,
    message:'this is a message'
  })
}

const openNotification = () => {
  ErNotification({
    title:'Prompt',
    message:'this is a message',
    duration:0,
    position:'bottom-right'
  })
}
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
  <er-button @click="openSuccess">click to get message of success</er-button>
  <er-button @click="openNotification">click to open notification</er-button>
</template>

<style scoped>
</style>
