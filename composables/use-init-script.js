export default () => {
    // Lenis scroll
    const { initLenis, destroyLenis } = useLenis()
    // Img loaded
    const { initImgLoaded, destroyImgLoaded } = useImgLoaded()
    // Split types
    const { initSplitType, destroySplitType } = useSplitType()
    // Split types
    const { initLocalTime, destroyLocalTime } = useLocalTime()
    // Page load
    const { initPageLoader, destroyPageLoader } = usePageLoader()


    const init = () => {
        initImgLoaded()
        initSplitType()
        initLocalTime()
        // Play Page loader out when everything ready if first load
        initPageLoader()
        initLenis()
    }

    const destroy = () => {
        destroyImgLoaded()
        destroySplitType()
        destroyLocalTime()
        destroyPageLoader()
        destroyLenis()
    }

    return { 
        init,
        destroy 
    }
}