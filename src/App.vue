<template>
  <div id="app">
    <transition
        v-on:after-enter="afterEnter"
        v-on:after-leave="afterLeave"
    >
      <router-view class="transition"/>
    </transition>

  </div>
</template>

<script>


export default {
  name: "App",
  components: {},
  methods: {
    afterEnter: () => {
      window.scrollTo(0, 0);
    },
    afterLeave: () => {

    }
  }
};
</script>

