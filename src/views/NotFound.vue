<template>
    <div>Not found boss {{ pathMatch }}</div>
</template>

<script setup>
defineProps({
    pathMatch: {
        type: String,
        default: "",
    },
});
</script>
