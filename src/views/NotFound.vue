<template>
    <div>Not found boss {{ pathMatch }}</div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
    pathMatch: {
        type: String,
        default: "",
    },
});
</script>
