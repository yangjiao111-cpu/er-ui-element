<script setup lang="ts">
import {computed, ref,provide} from 'vue';
import { isNil, omit } from 'lodash-es';
import {useId} from '@er-ui-element/hooks'
import Tooltip from '../Tooltip/Tooltip.vue'
import { type TooltipInstance } from '../Tooltip';
import DropdownItem from './DropdownItem.vue'
import {type ButtonInstance,ErButton,ErButtonGroup } from '../Button';
import type {
    DropdownProps,
    DropdownEmits,
    DropdownInstance,
    DropdownContext,
    DropdownItemProps
} from './types';

import { DROPDOWN_CTX_KEY } from './constants';

defineOptions({
    name:'ErDropdown',
    inheritAttrs:false
})

const props = withDefaults(defineProps<DropdownProps>(),{
    hideOnClick:true,
    item:()=>[] as DropdownItemProps[]
})
const slots = defineSlots()
const emits = defineEmits<DropdownEmits>()

const tooltipRef = ref<TooltipInstance>()
const triggerRef = ref<ButtonInstance>()

const tooltipProps = computed(() =>
  omit(props, ["items", "hideAfterClick", "size", "type", "splitButton"])
);
function handleItemClick(e:DropdownItemProps){
    props.hideOnClick && tooltipRef.value?.hide()
    !isNil(e.command) && emits('command',e.command)
}

provide<DropdownContext>(DROPDOWN_CTX_KEY,{
    handleItemClick,
    size:computed(()=>props.size)
})

defineExpose<DropdownInstance>({
    open:() => tooltipRef.value?.show(),
    close:() => tooltipRef.value?.hide()
})
</script>

<template>
    <div
    class="er-dropdown"
    :id="`dropdown-${useId().value}`"
    :class="{ 'is-disabled': props.disabled }"
  >
    <tooltip
      ref="tooltipRef"
      v-bind="tooltipProps"
      :virtual-triggering="splitButton"
      :virtual-ref="triggerRef"
      @visible-change="$emit('visible-change', $event)"
    >
      <er-button-group
        :type="type"
        :size="size"
        :disabled="disabled"
        v-if="splitButton"
      >
        <er-button @click="$emit('click', $event)">
          <slot name="default"></slot>
        </er-button>
        <er-button ref="triggerRef" icon="angle-down" />
      </er-button-group>
      <slot v-else name="default"></slot>

      <template #content>
        <ul class="er-dropdown__menu">
          <slot name="dropdown">
            <template
              v-for="item in items"
              :key="item.command ?? useId().value"
            >
              <dropdown-item v-bind="item" />
            </template>
          </slot>
        </ul>
      </template>
    </tooltip>
  </div>
</template>

<style scoped>
@import './style.css';

:deep(.er-button-group) {
  & > :last-child {
    padding: 5px 7px;
  }
}
</style>