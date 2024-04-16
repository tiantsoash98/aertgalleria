<template>
    <main class="page mt-24" id="top">
        <ContentDoc>
        </ContentDoc>
    </main>
</template>

<script setup>
const { init, destroy } = useInitScript()

useHead({
    title: 'Aertgalleria',
})


onMounted(() => {
    init()
})

onBeforeUnmount(() => {
    destroy()
})
</script>

<style lang="scss" scoped>

</style>