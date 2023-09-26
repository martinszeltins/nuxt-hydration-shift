<template>
    <NuxtLink :to="localePath(props.to)" v-bind="$attrs">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
    const props = defineProps<{
        to: string
    }>()

    const localePath = useLocalePath()
</script>
