<script setup lang="ts">
defineProps<{
    primaryoutlinebuttontext: string
    primaryoutlinebuttonlink: string
    primaryoutlinebuttontargetblank?: boolean
}>()
</script>

<template>
    <a :href="primaryoutlinebuttonlink" :target="primaryoutlinebuttontargetblank ? '_blank' : '_parent'" class="btn btn-outline-primary pt-0">{{ primaryoutlinebuttontext }}</a>
</template>
