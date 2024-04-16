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

        if(document.querySelector('.page-loader__logo'))
            tl.add(timelineLogoIn())

        if(document.querySelector('.page-loader__slides'))
            tl.add(timelineSlidesIn(), '+=0.7')

        if(document.querySelector('.page-loader__slides'))
            tl.add(timelineSlidesOut(), '-=0.6')

        if(document.querySelector('.page-loader__frame'))
            tl.add(timelineLoaderFrame(), '-=1.1')

        if(document.querySelector('.animate__title-in'))
            tl.add(timelineTitleIn(), '-=1s')

        if(document.querySelector('.animate__card-in'))
            tl.add(timelineCardIn(), '-=0.85s')

        if(document.querySelector('.animate__subtitle-in'))
            tl.add(timelineSubtitleIn(), '<')

        return tl
    }

    function timelineSlidesIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 1.3,
                ease: "expo.out"
            },
        })  

        tl
            .to('.page-loader__slide', {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                stagger: 0.4
            })

        return tl
    }

    function timelineSlidesOut (){
        const tl = gsap.timeline({
            defaults: {
                duration: 1.1,
                ease: "expo.in"
            },
        })  

        tl
            .to('.page-loader__slide', {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                stagger: {
                    each: 0.4,
                    from: "end"
                }
            })

        return tl
    }

    // Animate title reveal
    function timelineLogoIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: "power2.out"
            },
        })  

        tl
            .to('.page-loader__logo path', { 
                y: 0,
                stagger: 0.03,
            })

        return tl
    }

    function timelineLogoOut (){
        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: "power2.out"
            },
        })  

        tl
            .to('.page-loader__logo path', { 
                y: '-132px',
                stagger: 0.03
            })

        return tl
    }

    // Animate Page loader frame out
    function timelineLoaderFrame (){
        const tl = gsap.timeline({
            defaults: {
                duration: 2,
                ease: "expo.inOut"
            },
        })  

        tl
            .to('.page-loader', { y: '-100vh' })

        return tl
    }

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

    function timelineCardIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 1.2,
                ease: "power1.out"
            },
        })  

        tl
            .from('.animate__card-in', { 
                opacity: 0,
                xPercent: 50,
                stagger: 0.15
            })

        return tl
    }

    function timelineSubtitleIn (){
        const tl = gsap.timeline({
            defaults: {
                duration: 0.6,
                ease: "expo.in"
            },
        })  

        tl
            .from('.animate__subtitle-in ', { 
                opacity: 0
            })

        return tl
    }

    return { 
        initPageLoaderAnimate,
        destroyPageLoaderAnimate,
        playPageLoaderOut,
    }
}