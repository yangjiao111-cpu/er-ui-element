<script setup lang="ts">
import {ErLoading, type DropdownItemProps} from '@er-ui-element/components'
import { ErNotification } from 'er-ui-element'
import { ErMessage } from 'er-ui-element'
import {ErMessageBox} from 'er-ui-element'
import { ErInput } from '@er-ui-element/components/Input'
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

function openConfirm(){
  ErMessageBox.confirm("proxy will fhidoshfiodshfd")
  .then((action)=>{
    ErMessage.info('dsadsa')
  }).catch((action)=>{
    ErMessage.warning('fdsfdsf')
  })
}
function openLoading(){
  const _loading = ErLoading.service({
    lock:true,
    text:'加载中...',
    fullscreen:true
  });
  setTimeout(()=>{
    _loading.close();
  },2000);
}

function openLoading2(){
  const _loading = ErLoading.directive({
    lock:true,
    text:'加载中...'
  });
  setTimeout(()=>{
    _loading.close();
  },2000);
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
  <er-button @click="openConfirm">测试MessageBox</er-button>
  <ErInput></ErInput>
  <er-button @click="openLoading">click to open _loading</er-button>
  <er-button v-loading>用指令方式打开loading</er-button>
</template>

<style scoped>
</style>
