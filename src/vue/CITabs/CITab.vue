<template lang="pug">
  div.ci-tab(:class="isActive ? 'ci-tab_active' : ''"
    @click="$emit('click')")
    i.ci-tab__icon(v-if="customerIcon" :class="customerIcon")
    i.ci-tab__icon.material-icons(v-if="icon") {{icon}}
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
    },

    customerIcon: {
      type: String,
      default: ''
    },

    icon: {
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
