import { computed, type Ref } from 'vue'

const defaultIdInjection = {
    profix: Math.floor(Math.random() * 10000),
    current: 0
}

export function useId(namespace: string = "er"): Ref<string> {
    const idRef = computed(() =>
        `${namespace}-${defaultIdInjection.profix}-${defaultIdInjection.current++}`
    )
    return idRef
}

export default useId