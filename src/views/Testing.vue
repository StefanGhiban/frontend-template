<template>
    <div>okokkkk {{ id }}</div>
</template>

<script setup>
defineProps({
    id: {
        type: String,
        default: "",
    },
});
</script>
