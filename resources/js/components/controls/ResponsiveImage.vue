<template>
<img
    :src="image.url"
    :srcset="image.src_set"
    sizes="1px"
    onload="if(this.dataset.sized===undefined){this.sizes=Math.ceil(this.getBoundingClientRect().width/window.innerWidth*100)+'vw';this.dataset.sized=''}"
    data-sized=""
>
</template>
<script>
export default {
    name: 'ResponsiveImage',
    props: ['image'],
}
</script>
