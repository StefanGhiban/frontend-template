<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>okok</div>
    <HelloWorld msg="Hello Vue 3 + Vite" />

    <hr />
    <div class="flex gap-x-2 justify-center py-4">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <hr />
    <router-view></router-view>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";
import { inject } from "vue";
import { faker } from '@faker-js/faker';

const randomName = faker.name.findName();
const randomCity = faker.address.city();
const randomBear = faker.animal.bear();
const randomAdverb = faker.word.adverb();

const i18n = useI18n();

const message = inject(/* key */ "message");

onMounted(() => {
    // Change i18n.locale.value in order to change the locale messages programmatically
    console.log(i18n.locale.value);

    console.log(message);

    console.log(randomName)
    console.log(randomCity)
    console.log(randomBear);
    console.log(randomAdverb)
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
