<script>
  import { Modal } from 'aurora-framework';

  export default {
    components: { Modal },

    data() {
      return {
        message: 'Welcome!'
      };
    }
  }
</script>

<template>
  <div id="app">
    <modal :visible="true">
      <p>{{ message }}</p>
    </modal>
  </div>
</template>