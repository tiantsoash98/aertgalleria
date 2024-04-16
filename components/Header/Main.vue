<template>
    <header class="header pt-4 pt-md-6 pb-4 pb-md-6">
        <div class="header__content-wrapper container">
            <div class="row">
                <div class="header__logo header__links col-4 col-md-2 col-lg-1">
                    <NuxtLink :to="{ path: '/' }">
                        <IconAertgalleria/>
                    </NuxtLink>
                </div>
                <div class="col-full col-md-5 col-lg-5 col-start-md-4 col-start-lg-4">
                    <ul class="header__links header__links--center-verticaly">
                        <li><NuxtLink to="/">Gallery</NuxtLink></li>
                        <li class="ml-8"><NuxtLink to="/">About</NuxtLink></li>
                        <li class="ml-8"><NuxtLink to="/">Sustainability</NuxtLink></li>
                    </ul>
                </div>
                <div class="col-full col-md-4 col-lg-4">
                    <ul class="header__links header__links--center-verticaly header__links--align-end">
                        <li class="mr-8"><NuxtLink to="/">Search</NuxtLink></li>
                        <li><NuxtLink to="/">Contact us</NuxtLink></li>
                    </ul>
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

    &__logo{
        z-index: var(--z-index-nav);
        display: flex;
        align-items: center;
    }
    &__links {
        display: flex;
        height: 100%;

        &--center-verticaly {            
            align-items: center;
        }
        &--align-end {
            justify-content: flex-end;
        }

    }
}
</style>