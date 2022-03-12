<template>
    <div>okokkkk {{ id }}</div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
    id: {
        type: String,
        default: "",
    },
});
</script>
