// Page loader animations
export default () => {
    let timelineLoaderOut = null
    const defaultEase = ref("")
    const { gsap, CustomEase } = useGsap()

    // Init animate on mounted
    const initPageLoaderAnimate = () => {
        defaultEase.value = getComputedStyle(document.body).getPropertyValue('--default-ease') || "power2.inOut"

        // Init open timeline
        timelineLoaderOut = gsap.timeline()
        timelineLoaderOut.add(timelineLoaderOutAnimations())
        timelineLoaderOut.pause()
    }

    const destroyPageLoaderAnimate = () => {
        // Dispose here
    }
        
    // Play loader animation out
    const playPageLoaderOut = () => {
        if(timelineLoaderOut)
            return timelineLoaderOut.restart()  
    }


    function timelineLoaderOutAnimations () {
        const tl = gsap.timeline()  


        return tl
    }


    // Animate title reveal
    function timelineTitleIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.out"
            },
        })  

        tl
            .from('.animate__title-in .split-type--word', { 
                yPercent: 100,
                stagger: 0.04,
            })

        return tl
    }


    return { 
        initPageLoaderAnimate,
        destroyPageLoaderAnimate,
        playPageLoaderOut,
    }
}