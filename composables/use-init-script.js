export default () => {
    // Lenis scroll
    const { initLenis, destroyLenis } = useLenis()
    // Split types
    const { initSplitType, destroySplitType } = useSplitType()
    // Page load
    const { initPageLoader, destroyPageLoader } = usePageLoader()


    const init = () => {
        initSplitType()
        // Play Page loader out when everything ready if first load
        initPageLoader()
        initLenis()
    }

    const destroy = () => {
        destroySplitType()
        destroyPageLoader()
        destroyLenis()
    }

    return { 
        init,
        destroy 
    }
}