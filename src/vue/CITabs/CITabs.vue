<template lang="pug">
  div.ci-tabs(:class="className")
    slot
</template>

<script>
/**
 * @fileoverview CITabs
 * @author burning (www.cafeinit.com)
 * @version 2017.07.30
 */

export default {
  name: 'ci-tabs',

  props: {
    index: {
      type: Number,
      default: 0
    },

    modifier: {
      type: String,
      default: ''   // column
    },

    direction: {
      type: String,
      default: ''   // horizontal, vertical
    },
  },

  data() {
    return {
      myIndex: this.index
    }
  },

  computed: {
    className() {
      let name = []
      if (this.modifier) {
        name = this.modifier.split(' ')
      }

      if (this.direction) {
        name.push(this.direction)
      }

      name = name.map((item) => {
        return ('ci-tabs_' + item)
      })

      return name
    }
  },

  watch: {
    index(val) {
      this.modifyChildren()
    }
  },

  mounted() {
    this.$children.forEach((child, index) => {
      child.$on('click', () => {
        this.myIndex = index
        this.modifyChildren()
        this.$emit('click-item', index)
      })
    })

    this.modifyChildren()
  },

  methods: {
    modifyChildren() {
      this.$children.forEach((child, index) => {
        child.isActive = (index === this.myIndex)
      })
    }
  }
}
</script>
