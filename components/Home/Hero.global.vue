<template>
    <div class="hero pb-8">
        <div class="container">
            <div class="hero__content-wrapper row">
                <div class="col-full col-md-3 hero__left-box animate__subtitle-in">Antananarivo, MDG {{ localTime }}</div>
                <div class="col-full col-md-3 hero__center-box">
                    <h1 class="text-visually-hidden"><ContentSlot unwrap="p"/></h1>
                    <div class="title-h4 split-type animate__title-in"><ContentSlot unwrap="p"/></div>
                </div>
                <div class="col-full col-md-6 hero__right-box">
                    <ul class="hero__gallery-options display-flex animate__subtitle-in">
                        <li class="hero__gallery-option hero__gallery-option--selected">Carousel</li>
                        <li>,&nbsp;</li>
                        <li class="hero__gallery-option">List</li>
                    </ul>
                    <h3 class="title-h2 split-type animate__subtitle-in">Gallery</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const localTime = useLocalTimeState()
</script>

<style lang="scss" scoped>
.hero {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-end;

    &__content-wrapper {
        align-self: flex-end;

        & > div {
            display: flex;
            align-items: flex-end
        }
    }
    &__right-box {
        justify-content: flex-end;
        flex-direction: column;
    }
    &__gallery-option {
        opacity: 0.4;

        &--selected {
            opacity: 1;
        }
    }
}
</style>