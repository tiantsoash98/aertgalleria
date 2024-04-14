<template>
    <div class="page-loader" v-if="pageLoaderState != 'loaded'">
        <div class="page-loader__frame overlay"></div>
        <div class="page-loader__wrapper">
            <div class="page-loader__slides">
                <div class="page-loader__slide page-loader__slide--visible">Tiantsoa Rabemananjara</div>
                <div class="page-loader__slide page-loader__slide--overflow">Web designer</div>
                <div class="page-loader__slide page-loader__slide--overflow">Creative developer</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const pageLoaderState = usePageLoaderState()
</script>

<style lang="scss" scoped>
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
        background-color: var(--color-neutral-950);
    }
    &__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__slides {
        overflow: hidden;
    }
    &__slide {
        width: 100%;
        text-wrap: nowrap;
        text-align: center;

        &--overflow {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
        }
    }
}
</style>