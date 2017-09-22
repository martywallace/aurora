<script>
  import Icon from './Icon.vue';

  const Events = {
    INPUT: 'input',
    UNCHECK: 'uncheck',
    CHECK: 'check'
  };

  export default {
    name: 'Checkbox',

    components: { Icon },

    props: {
      value: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      toggle() {
        this.$emit(this.value ? Events.UNCHECK : Events.CHECK);
        this.$emit(Events.INPUT, !this.value);
      }
    }
  }
</script>

<template>
  <span @click.prevent="toggle" class="aurora-checkbox" role="checkbox" :class="{ 'aurora-checkbox--checked': value }">
    <icon type="check"></icon>
  </span>
</template>

<style lang="scss">
  @import "../scss/vars/theme";
  @import "../scss/mixins/component";

  .aurora-checkbox {
    @include inline-component;
    @include border;
    @include rounded;

    width: $aurora-theme-control-size;
    background: #FFF;
    cursor: pointer;
    text-align: center;
    overflow: hidden;
    color: #DDD;
    transition: all 250ms ease-in-out;

    &:hover {
      color: #AAA;
    }

    &--checked, &--checked:hover {
      background: $aurora-theme-primary;
      border: 1px solid $aurora-theme-primary;
      color: #FFF;
    }
  }
</style>