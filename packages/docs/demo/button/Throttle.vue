<script setup>
// import { ErMessage } from "er-ui-element";

function handleClose() {
  // ErMessage.info("close callback");
  console.log('btn-click')
}
</script>

<template>
  <p>
    <er-button @click="handleBtnClick"> with throttle</er-button>
    <er-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</er-button
    >
  </p>
</template>