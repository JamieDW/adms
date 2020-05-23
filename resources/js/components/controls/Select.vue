<template>
    <label class="block w-full px-2 mt-4 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
        <span class="text-sm font-semibold text-gray-500"><slot/></span>
        <select
            class="block w-full mt-1 text-white shadow form-select bg-gray-600"
            @change="$emit('change', selected)"
            v-model="selected">
            <option v-for="(option, index) in options"
                :value="isObject(option) ? option.value || option.text : option"
                :key="index">
                {{ isObject(option) ? option.text : option }}
            </option>
        </select>
    </label>
</template>
<script>
export default {

    name: 'VSelect',

    props: ['value', 'options'],

    data() {
        return {
            selected: this.value
        }
    },

    created () {

    },

    watch:{
        options(newOptions) {
            this.selected = this.selected || (this.isObject(newOptions[0]) ? newOptions[0].value || newOptions[0].text : newOptions[0])
        }
    },

    methods: {
        isObject(a) {
            return a instanceof Object
        }
    }
}
</script>
