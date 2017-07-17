<script>
  export default {
    name: 'aurora-multiselect',
    
    props: {
      value: {
        type: Array,
        default: () => []
      },
      
      options: {
        type: Array,
        required: true,

        validator: value => {
          for (let option of value) {
            return ('id' in option) && ('text' in option);
          }
        }
      },

      max: {
        type: Number,
        default: 0
      }
    },

    computed: {
      full() { return this.max > 0 && this.value.length === this.max; },
      empty() { return this.value.length === 0; }
    },

    methods: {
      toggle(option) {
        if (!this.isSelected(option)) {
          if (this.full) {
            // Full.
          } else {
            this.value.push(option);
            this.$emit('select', option);
          }
        } else {
          this.value.splice(this.optionIndex(option), 1);
          this.$emit('deselect', option);
        }

        this.$emit('input', this.value);
      },

      isSelected(option) {
        return this.optionIndex(option) >= 0;
      },

      optionIndex(option) {
        for (let i = 0; i < this.value.length; i++) {
          if (this.value[i].id === option.id) return i;
        }

        return -1;
      }
    }
  }
</script>

<template>
  <ul class="aurora-multiselect" :class="{ full, empty }">
    <li v-for="(option, index) in options" :key="index">
      <button class="aurora-multiselect-option" :class="{ 'aurora-multiselect-option--selected': isSelected(option) }" @click.prevent="toggle(option)">
        <slot :option="option">{{ option.text }}</slot>
      </button>
    </li>
  </ul>
</template>

<style lang="scss">
  @import "../scss/vars/theme";
  @import "../scss/mixins/component";

  .aurora-multiselect {
    list-style: none;
    margin: -2px;

    li {
      display: inline;
    }
  }

  .aurora-multiselect-option {
    @include border;
    @include rounded;
    @include dim-action;

    height: $aurora-control-size;
    padding: 0 6px;
    margin: 2px;

    &--selected, &--selected:hover {
      background: $aurora-theme-primary;
      color: #FFF;
      padding: 1px 7px;
      border: none;
    }
  }
</style>