import axios from "axios";
import { useCounterStore } from "@/stores/counter";

export function configAxios() {
    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

    axios.interceptors.request.use(function (config) {
        /**
         * Configure logic for jwt token when a user is logged in in the future
         */
        const counter = useCounterStore();
        config.headers.Authorization = `Bearer ${counter.count + 2}`;
        return config;
    });
}
