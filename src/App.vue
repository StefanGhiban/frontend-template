<template>
    <div class="bg-purple-300 dark:bg-purple-800 h-screen">
        <img alt="Vue logo" src="./assets/logo.png" />
        <div>okok</div>
        <HelloWorld msg="Hello Vue 3 + Vite" />

        <hr />
        <button
            class="border border-purple-600 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-2xl text-white p-2"
            @click="toggleDark"
        >
            Toggle dark/light mode
        </button>
        <div class="flex gap-x-2 justify-center py-4">
            <router-link :to="{ name: 'Home' }">Home</router-link>
            <router-link :to="{ name: 'About' }">About</router-link>
        </div>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useI18n } from "vue-i18n";
import { inject, onMounted } from "vue";
import { faker } from "@faker-js/faker";
/** On initial load, the preference is based on the system.
 * If system changes, the dark/light preference on the website changes.
 * If user chooses to override the setting, the website will update, but the system
 * change would no longer affect the website until the system setting is the same as the website setting
 * after an initial load.
 */
import { toggleDark } from "@/composables/dark";

const randomName = faker.name.findName();

const i18n = useI18n();

const message = inject(/* key */ "message");

onMounted(() => {
    // Change i18n.locale.value in order to change the locale messages programmatically
    console.log(i18n.locale.value);

    console.log(message);

    console.log(randomName);
});
</script>
