<script setup lang="ts">
import PrimaryOutlineButton from "@/components/PrimaryOutlineButton.vue";
import Project from "@/components/Project.vue";

defineProps<{
    projectsheadline: string
    primaryoutlinebuttontext: string
    primaryoutlinebuttonlink: string
    projects: ({ name: string; image: string; skills: string[]; buttons: ({ link: string; text: string; target: boolean })[] })[]
}>()
</script>

<template>
    <div class="projects container">
        <div class="row projects-headline">
            <div class="col-6">
                <div class="h1 mb-0" v-if="projectsheadline">{{ projectsheadline }}</div>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center">
                <PrimaryOutlineButton :primaryoutlinebuttontext="primaryoutlinebuttontext"
                                      :primaryoutlinebuttonlink="primaryoutlinebuttonlink"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6" v-for="project in projects">
                <Project :project="project"/>
            </div>
        </div>
    </div>
</template>
