<script>
  export default {
    name: '{{ name }}',
    components: { },

    props: {
      // Your component's properties.
      // ...
    },

    data() {
      return {
        // Your component's internal data.
        // ..
      };
    },

    methods: {
      // Your component's methods.
      // ...
    }
  }
</script>

<template>
  <div class="{{ name }}">
    <span>{{ name }}</span>
  </div>
</template>

<style lang="scss">
  .{{ name }} {
    //
  }
</style>