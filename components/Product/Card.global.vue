<template>
    <article class="product-card animate__card-in">
        <div class="product-card__infos title-h6 mt-4">
            <div class="product-card__title">{{ title }}</div>
            <div class="product-card__more">more</div>
        </div>
        <figure class="product-card__img-wrapper">
            <nuxt-img
                :src="img.src"
                class="product-card__img img img-load" 
                sizes="sm:80vw md:40vw lg:40vw 80vw"
                :alt="img.alt"
                :width="img.width"
                :height="img.height"
                loading="lazy"
            />
        </figure>
    </article>
</template>

<script setup>
const props = defineProps({
    title: String,
    img: Object,
})
</script>

<style lang="scss" scoped>
.product-card {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 23vw;
    aspect-ratio: 8/9;
    
    &__infos {
        order: 2;
        display: flex;
        justify-content: space-between;
    }
    &__img-wrapper {
        height: 100%;
        flex: 1;
        order: 1;
    }
}
</style>