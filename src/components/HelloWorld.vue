<template>
    <h1>{{ msg }}</h1>
    <h1>{{ test }}</h1>

    <div class="text-4xl font-black text-red-600">{{ $t("testObj.ok") }}</div>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
    msg: {
        type: String,
        default: "",
    },
});

const test =
    props.msg !== ""
        ? props.msg
        : props.msg === "okok"
        ? "kookk"
        : props.msg === "kkk"
        ? "kkk"
        : "okkkk";

const count = ref(0);
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
