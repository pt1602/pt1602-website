<script setup lang="ts">
import IconRings from "@/components/icons/IconRings.vue";
import PrimaryOutlineButton from "@/components/PrimaryOutlineButton.vue";
import IconCircle from "@/components/icons/IconCircle.vue";

defineProps<{
    name: string
    subheadline: string
    description: string
    primaryoutlinebuttontext: string
    primaryoutlinebuttonlink: string
}>()
</script>

<template>
    <div class="masthead container position-relative">
        <div class="masthead-profile-img"></div>
        <div class="masthead-content text-center text-md-start mt-md-0">
            <div class="masthead-headline">
                <div class="h1 mb-0" v-if="subheadline" v-html="subheadline"></div>
                <h1 class="h1 mb-0" v-if="name">I'm <span class="masthead-headline-name"><vue-typewriter-effect
                    :strings="['a web developer.', 'a tech enthusiast.', name]"/>
                </span></h1>
            </div>
            <p class="masthead-text">
                {{ description }}
            </p>
            <PrimaryOutlineButton :primaryoutlinebuttontext="primaryoutlinebuttontext"
                                  :primaryoutlinebuttonlink="primaryoutlinebuttonlink"/>
        </div>
        <IconRings/>
        <IconCircle/>
    </div>
</template>

<style scoped lang="scss">
.masthead-profile-img {
    background: url("@/assets/img/philipp-tuchardt.jpg") no-repeat center;
    background-size: cover;
}
</style>
