<template>
  <!-- <div class="fixed top-0 right-0 m-6">
    <Transition name="slide-fade">
      <div
        v-if="message"
        :class="{
          'bg-red-200 text-red-900': message.type === 'error',
          'bg-green-200 text-green-900': message.type === 'success'
        }"
        class="p-6 pr-10 rounded-lg shadow-md"
        style="min-width: 240px"
      >
        <button
          class="absolute top-0 right-0 px-3 py-2 opacity-75 cursor-pointer hover:opacity-100"
        >
          &times;
        </button>
        <div class="flex items-center">
          {{ message.text }}
        </div>
      </div>
    </Transition>
  </div> -->

  <div class="flex max-w-sm p-6 mx-auto bg-white rounded-lg shadow-xl">
    <div class="flex-shrink-0">
      <svg class="w-12 h-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#2397B3" offset="0%"></stop><stop stop-color="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#73DFF2" offset="0%"></stop><stop stop-color="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
    </div>
    <div class="pt-1 ml-6">
      <h4 class="text-xl leading-tight text-gray-900">ChitChat</h4>
      <p class="text-base leading-normal text-gray-600">You have a new message!</p>
    </div>
  </div>

</template>



<script>
export default {
    name: 'VFlashMessage',
    data() {
        return {
        message: null
        };
    },
    mounted() {
        let timer;
        Bus.$on('flash-message', message => {
        clearTimeout(timer);

        this.message = message;

        timer = setTimeout(() => {
            this.message = null;
        }, 5000);
        });
    }
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(400px);
  opacity: 0;
}
</style>
