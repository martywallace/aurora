<script>
  import icon from './icon.vue';

  export default {
    name: 'aurora-counter',

    components: { icon },

    props: {
      value: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: Number.MIN_VALUE
      },
      max: {
        type: Number,
        default: Number.MAX_VALUE
      }
    },

    methods: {
      increment() {
        if (this.value < this.max) {
          this.$emit('increment');
          this.$emit('input', this.value + 1);
        }
      },

      decrement() {
        if (this.value > this.min) {
          this.$emit('decrement');
          this.$emit('input', this.value - 1);
        }
      }
    },

    mounted() {
      if (this.min > 0) this.$emit('input', this.min);
    }
  }
</script>

<template>
  <span class="aurora-counter" :data-value="value">
    <button class="aurora-counter-action aurora-counter-decrement" @click.prevent="decrement"><icon type="minus"></icon></button>
    <span class="aurora-counter-value">{{ value }}</span>
    <button class="aurora-counter-action aurora-counter-increment" @click.prevent="increment"><icon type="plus"></icon></button>
  </span>
</template>

<style lang="scss">
  @import "../scss/vars/theme";
  @import "../scss/mixins/component";

  .aurora-counter {
    @include inline-component;
    @include rounded;
  }

  .aurora-counter-value, .aurora-counter-action {
    display: inline-block;
    height: $aurora-control-size;
    line-height: $aurora-control-size;
    padding: 0 6px;
    float: left;
  }

  .aurora-counter-value {
    width: 50px;
    text-align: center;
    background: #FFF;
    border-top: 1px solid $aurora-theme-strong-border-color;
    border-bottom: 1px solid $aurora-theme-strong-border-color;
  }

  .aurora-counter-action {
    @include dim-action;
    @include border;

    font-size: 12px;
    width: $aurora-control-size;

    .aurora-icon {
      line-height: $aurora-control-size;
    }

    &:first-child {
      border-top-left-radius: $aurora-border-radius-small;
      border-bottom-left-radius: $aurora-border-radius-small;
    }

    &:last-child {
      border-top-right-radius: $aurora-border-radius-small;
      border-bottom-right-radius: $aurora-border-radius-small;
    }
  }
</style>