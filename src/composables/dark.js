import { useDark, useToggle } from "@vueuse/core";

/** Dark mode functionality */
export const isDark = useDark();
export const toggleDark = useToggle(isDark);
