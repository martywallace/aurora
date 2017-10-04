<script>
  export default {
    name: '{{ name|pascal }}',
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
  <div class="{{ name|kebab }}">
    <span>{{ name|pascal }}</span>
  </div>
</template>

<style lang="scss">
  .{{ name|kebab }} {
    //
  }
</style>