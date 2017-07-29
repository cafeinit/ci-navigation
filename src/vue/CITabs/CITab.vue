<template lang="pug">
  div.ci-tab(:class="isActive ? 'ci-tab_active' : ''"
    @click="$emit('click')")
    span.ci-tab__text(v-if="text") {{text}}
    slot
</template>

<script>
/**
 * @fileoverview CITab
 * @author burning (www.cafeinit.com)
 * @version 2017.07.28
 */

export default {
  name: 'ci-tab',

  props: {
    text: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isActive: false
    }
  }
}
</script>
