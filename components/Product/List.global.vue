<template>
    <div class="product-list">
        <ContentSlot unwrap="p"/>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.product-list {
    padding-left: var(--container-horizontal-padding);
    display: flex;
    gap: var(--column-gap);
    flex-wrap: nowrap;
}
</style>