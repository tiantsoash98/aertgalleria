<template>
    <div>
        <h1>Aertgalleria</h1>
    </div>
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