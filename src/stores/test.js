import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * composition api kind of store, as in a setup function
 */
export const useTestStore = defineStore("test", () => {
    const count = ref(0);
    function increment() {
        count.value++;
    }

    return { count, increment };
});
