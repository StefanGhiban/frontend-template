<template>
    <div>
        {{ test }}
    </div>
    <button type="button" @click="increment">
        {{ counter.count }}
    </button>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "../stores/counter";
// import { useTestStore } from "../stores/test";

const test = ref("testing");

const counter = useCounterStore();
function increment() {
    counter.increment();
}

// const testing = useTestStore();
</script>
