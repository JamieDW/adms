<template>
<img
    @load="updateSizes"
    ref="image"
	:src="src"
    :srcset="srcset"
    :sizes="sizes"
    :width="imageWidth"
    >
</template>
<script>
export default {

	name: 'ResponsiveImage',

	props: ['image', 'fallbackImage'],

	data () {
		return {
			sizes: '1px',
			defaultImage: this.fallbackImage,
		};
	},

	methods: {
		calculateWidth () {
			return Math.ceil( (this.$refs.image.getBoundingClientRect().width / window.innerWidth) * 100);
		},
		updateSizes () {
			this.sizes = this.calculateWidth() + 'vw';
		},
	},

	computed: {
		imageWidth () {
			return this.image ? this.image.width : null;
		},
		src () {
			return (this.image && this.image.url) ? this.image.url : this.defaultImage;
		},
		srcset () {
			return this.image ? this.image.src_set : this.src;
		},
	},
}
</script>
