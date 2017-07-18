<script>
  import icon from './icon.vue';

  export default {
    name: 'aurora-dropdown',

    components: { icon },

    props: {
      value: {
        type: Object,
        default: null
      },
      options: {
        type: Array,
        default: () => []
      },
      placeholder: {
        type: String,
        default: 'Please select...'
      }
    },

    computed: {
      empty() {
        return !this.value || !this.value.value;
      },

      formattedOptions() {
        return this.options.map(option => {
          if (typeof option === 'string') {
            return {
              value: option,
              text: option
            };
          } else {
            return {
              value: ('value' in option) ? option.value : null,
              text: ('text' in option) ? option.text : ''
            };
          }
        });
      },

      formattedValue() {
        return !this.empty ? this.value : {
          value: null,
          text: ''
        };
      }
    },

    data() {
      return {
        open: false
      } 
    },

    methods: {
      pick(option) {
        this.$emit('input', option);
      },

      show() {
        this.open = true;
        this.$emit('show');
      },

      hide() {
        this.open = false;
        this.$emit('hide');
      },

      toggle(event) {
        // Go back to the start of the list.
        this.$el.querySelector('.aurora-dropdown-options').scrollTop = 0;

        if (this.open) {
          this.hide();
        } else {
          if (window) {
            // Collapse when clicking anywhere in the app.
            const collapse = event => {
              this.hide();
              window.removeEventListener('click', collapse);
            };

            window.addEventListener('click', collapse);
          }

          this.show();
        }
      }
    }
  }
</script>

<template>
  <div @click.stop.prevent="toggle" class="aurora-dropdown" :data-value="formattedValue.value" :class="{ 'aurora-dropdown--empty': empty, 'aurora-dropdown--open': open }">
    <span class="aurora-dropdown-text" :class="{ 'aurora-dropdown-text--placeholder': empty }">
      <template v-if="empty">{{ placeholder }}</template>
      <template v-else>{{ formattedValue.text }}</template>
    </span>

    <span class="aurora-dropdown-icon">
      <icon :type="open ? 'chevron-up' : 'chevron-down'"></icon>
    </span>

    <ul class="aurora-dropdown-options" :data-total-options="options.length" v-show="open">
      <li v-for="(option, index) in formattedOptions" :key="index">
        <button class="aurora-dropdown-option-button" @click.prevent="pick(option)" :data-value="option.value">
          <slot :option="option">{{ option.text }}</slot>
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  @import "../scss/vars/theme";
  @import "../scss/mixins/component";

  .aurora-dropdown {
    @include inline-component;

    cursor: pointer;

    &--open {
      .aurora-dropdown-text {
        border-bottom-left-radius: 0;
      }

      .aurora-dropdown-icon {
        border-bottom-right-radius: 0;
      }
    }
  }

  .aurora-dropdown-text, .aurora-dropdown-icon {
    @include border;

    display: inline-block;
    float: left;
    padding: 0 6px;
    height: $aurora-theme-control-size;
    background: #FFF;
  }

  .aurora-dropdown-text {
    border-top-left-radius: $aurora-theme-border-radius-small;
    border-bottom-left-radius: $aurora-theme-border-radius-small;
    border-right: none;
    min-width: 160px;

    &--placeholder {
      color: #AAA;
    }
  }

  .aurora-dropdown-icon {
    @include dim-action;

    border-top-right-radius: $aurora-theme-border-radius-small;
    border-bottom-right-radius: $aurora-theme-border-radius-small;
  }

  .aurora-dropdown-options {
    @include border;

    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    background: #FFF;
    border-top: none;
    border-bottom-left-radius: $aurora-theme-border-radius-small;
    border-bottom-right-radius: $aurora-theme-border-radius-small;
    max-height: $aurora-theme-control-size * 10;
    overflow: auto;
    box-shadow: 0 2px 3px rgba(#000, 0.1);

    li + li {
      border-top: 1px solid #EEE;
    }
  }

  .aurora-dropdown-option-button {
    display: block;
    width: 100%;
    line-height: 1.2;
    padding: 8px 6px;
    text-align: left;

    &:hover {
      background: #EEE;
    }
  }
</style>