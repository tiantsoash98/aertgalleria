<template>
    <header class="header pt-4 pt-md-8">
        <div class="header__content-wrapper container">
            <div class="row">
                <div class="header__logo col-4 col-md-3 col-lg-3">
                    <NuxtLink :to="{ path: '/' }">Tiantsoa Rabemananjara</NuxtLink>
                </div>
            </div>
        </div>
        
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: var(--z-index-nav);
    top: 0;
    left: 0;
    right: 0;
    mix-blend-mode: difference;

    &__logo{
        z-index: var(--z-index-nav);
    }
}
</style>