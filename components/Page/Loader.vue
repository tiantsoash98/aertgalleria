<template>
    <div class="page-loader container" v-if="pageLoaderState != 'loadedd'">
        <div class="page-loader__frame overlay"></div>
        <div class="page-loader__wrapper row">
            
            <div class="page-loader__logo-wrapper col-2 col-start-6">
                <IconAertgalleria class="page-loader__logo"/>
            </div>            
            <div class="page-loader__slides">
                <nuxt-img
                    src="/aertgalleria-3.webp"
                    class="page-loader__slide" 
                    sizes="sm:80vw md:40vw lg:40vw 80vw"
                    alt="Aertgalleria"
                    loading="eager"
                />
                <nuxt-img
                    src="/aertgalleria-1.webp"
                    class="page-loader__slide" 
                    sizes="sm:80vw md:40vw lg:40vw 80vw"
                    alt="Aertgalleria"
                    loading="eager"
                />
                <nuxt-img
                    src="/aertgalleria-2.webp"
                    class="page-loader__slide" 
                    sizes="sm:80vw md:40vw lg:40vw 80vw"
                    alt="Aertgalleria"
                    loading="eager"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const pageLoaderState = usePageLoaderState()
</script>

<style lang="scss">
.page-loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100dvh;
    z-index: var(--z-index-loader);

    &__frame {
        height: 100dvh;
        width: 100%;
        background-color: var(--color-neutral-0);
    }
    &__wrapper {
        width: 100%;
        height: 100%;
    }
    &__logo-wrapper {
        display: flex;
        align-items: center;
        z-index: 1;
    }
    &__logo {
        overflow: hidden;

        & path {
            transform: translateY(132px);
        }
    }
    &__slides {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25vw;
        aspect-ratio: 8/9;
        z-index: 2;
        
    }
    &__slide {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        position: absolute;
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);

        &:nth-child(2) {
            transform: scale(0.5);
            left: 40%;
            top: 40%;
            z-index: 2;
        }
        &:nth-child(3) {
            transform: scale(0.4);
            left: -60%;
            top: -10%;
            z-index: 3;
        }
    }
    
}
</style>