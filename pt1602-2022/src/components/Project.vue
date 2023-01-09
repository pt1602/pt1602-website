<script setup lang="ts">
import PrimaryOutlineButton from "@/components/PrimaryOutlineButton.vue";

defineProps<{
    project: ({ name: string; image: string; skills: string[]; buttons: ({ link: string; text: string })[] })
}>()
</script>

<template>
    <div class="project">
        <Tilt>
            <div class="project-image"
                 :style="{'background-image': `url('${project.image}')`}"></div>
        </Tilt>
        <div class="project-description">
            <div class="project-description-title h2 text-uppercase">{{ project.name }}</div>
            <div class="project-description-skills d-flex">
                <p class="me-3 mb-0" v-for="skill in project.skills">{{ skill }}</p>
            </div>
        </div>
        <div class="project-buttons row d-lg-none">
            <div class="col-auto" v-for="button in project.buttons">
                <PrimaryOutlineButton :primaryoutlinebuttontext="button.text" :primaryoutlinebuttonlink="button.link"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
