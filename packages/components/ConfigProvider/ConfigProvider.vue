<script setup lang="ts">
import type {ConfigProviderProps} from './types'
import { provideGlobalConfig } from './hooks';

defineOptions({
    name:'ErConfigProvider'
})

const props = defineProps<ConfigProviderProps>()
</script>

<template></template>

<style scoped></style>