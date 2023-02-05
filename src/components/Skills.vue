<script setup lang="ts">
import IconRings from "@/components/icons/IconRings.vue";

defineProps<{
    skillunit: string
    skills: ({ name?: string; experience?: number })[]
}>()
</script>

<template>
    <div class="skills container position-relative mt-lg-0">
        <div class="row">
            <div class="skill col-md-6 col-lg-4 text-center text-md-start" v-for="skill in skills">
                <div class="skill-name h2 fancyHover" :class="skill.name.toLowerCase()" v-if="skill.name">{{ skill.name }}</div>
                <p class="skill-experience mb-0" v-if="skill.experience">{{ skill.experience }}&nbsp;Jahr<span v-if="skill.experience > 1">e</span>&nbsp;{{ skillunit }}</p>
            </div>
        </div>
        <IconRings/>
    </div>
</template>
