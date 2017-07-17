<script>
  import icon from './icon.vue';

  export default {
    name: 'aurora-modal',

    components: { icon },

    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      click(event) {
        if (this.visible && event.target === event.currentTarget) {
          this.$emit('click-out');
        }
      },

      close() {
        if (this.visible) this.$emit('close');
      }
    },

    mounted() {
      this.$watch('visible', visible => this.$emit(visible ? 'show' : 'hide'));
    }
  }
</script>

<template>
  <transition name="aurora-modal-transition">
    <div @click.prevent="click" class="aurora-modal-container" v-if="visible">
      <div class="aurora-modal">
        <div class="aurora-modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
  @import "../scss/theme";

  .aurora-modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition-duration: 300ms;
    padding: 10px;
    z-index: 10;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;

    &.aurora-modal-transition-enter, &.aurora-modal-transition-leave-active {
      &:before {
        opacity: 0;
      }
      
      .aurora-modal {
        opacity: 0;
        margin-top: -30px;
      }
    }

    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(#000, 0.7);
      transition: all 300ms ease-in-out;
    }
  }

  .aurora-modal {
    @include component;
    @include rounded;

    max-width: 500px;
    top: 50%;
    margin: 0 auto;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    background: #FFF;
    overflow: auto;
    max-height: 100%;
    box-shadow: 0 4px 6px rgba(#000, 0.2);
    transition: all 300ms ease-in-out;
  }

  .aurora-modal-body {
    position: relative;
    padding: 20px;
  }
</style>