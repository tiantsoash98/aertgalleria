import imagesLoaded from "imagesloaded";

export default () => {
    const imgLoad = ref(null)
    const imgs = ref(null)

    const initImgLoaded = () => { 
        imgs.value = document.querySelectorAll('.img')
        imgLoad.value = imagesLoaded(imgs.value)
        imgLoad.value.on('progress', onProgress)
    }

    const destroyImgLoaded = () => {
        imgLoad.value = null
        imgs.value = null
    }

    function onProgress( instance, image ){
        if(image.isLoaded) {
            image.img.classList.add('img--loaded')
        } 
    }

    return { 
        initImgLoaded,
        destroyImgLoaded
    }
}