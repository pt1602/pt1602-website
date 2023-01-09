<script setup lang="ts">
defineProps<{
    primaryoutlinebuttontext: string
    primaryoutlinebuttonlink: string
}>()
</script>

<template>
    <a :href="primaryoutlinebuttonlink" class="btn btn-outline-primary pt-0">{{ primaryoutlinebuttontext }}</a>
</template>
