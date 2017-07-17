<script>
  import icon from './icon.vue';

  export default {
    name: 'aurora-checkbox',

    components: { icon },

    props: {
      value: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      toggle() {
        this.$emit(this.value ? 'uncheck' : 'check');
        this.$emit('input', !this.value);
      }
    }
  }
</script>

<template>
  <span class="aurora-checkbox" role="checkbox" :aria-checked="value ? 'true' : 'false'" @click.prevent="toggle" :class="{ 'aurora-checkbox--checked': value }">
    <icon type="check"></icon>
  </span>
</template>

<style lang="scss">
  @import "../scss/theme";

  .aurora-checkbox {
    @include inline-component;
    @include border;
    @include rounded;

    width: $aurora-control-size;
    background: #FFF;
    cursor: pointer;
    text-align: center;
    overflow: hidden;
    color: #DDD;

    &:hover {
      color: #AAA;
    }

    &--checked, &--checked:hover {
      color: $aurora-theme-primary;
    }
  }
</style>