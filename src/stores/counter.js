import { defineStore } from "pinia";

/**
 * classic approach to a store. kind of options api way
 */
export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
    },
});
