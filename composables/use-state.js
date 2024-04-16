export const usePageLoaderState = () => useState("pageLoaderState", () => "load") // load / loading / loaded
export const useLocalTimeState = () => useState("localTime", () => "12:00")