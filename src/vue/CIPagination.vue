<template lang="pug">
  div.ci-pagination
    a.material-icons(v-if="isShowLast" href="javascript:;" @click="onClickItem(1)") first_page
    a.material-icons(v-if="isShowNext" href="javascript:;" @click="onClickItem(prevPage)") chevron_left

    a(v-for="page in pages" v-bind:key="page"
      v-bind:class="(page == currentPage) ? 'ci-active' : ''"
      href="javascript:;" @click="onClickItem(page)") {{page}}

    a.material-icons(v-if="isShowNext" href="javascript:;" @click="onClickItem(nextPage)") chevron_right
    a.material-icons(v-if="isShowLast" href="javascript:;" @click="onClickItem(totalPage)") last_page
</template>

<script>
/**
 * @fileoverview CIPagination
 * @author burning (www.cafeinit.com)
 * @version 2017.09.07
 */

export default {
  name: 'ci-pagination',

  props: {
    page: {
      type: [ Number, String ],
      default: 1
    },

    totalPage: {
      type: [ Number, String ],
      default: 1
    },

    showCount: {     // 显示按钮个数
      type: [ Number, String ],
      default: 9
    },

    isShowNext: {
      type: Boolean,
      default: false
    },

    isShowLast: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentPage: Number(this.page)
    }
  },

  watch: {
    page(val, oldVal) {
      if (val != oldVal) {
        this.currentPage = val
      }
    }
  },

  computed: {
    pages() {
      let pages = []
      let x = parseInt(this.showCount / 2)
      let start = this.currentPage - x
      start = (start <= 0) ? 1 : start
      let end = start + this.showCount - 1
      end = (end > this.totalPage) ? this.totalPage : end
      start = end - this.showCount + 1
      start = (start <= 0) ? 1 : start

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    },

    prevPage() {
      let page = this.currentPage - 1
      page = (page <= 0) ? 1 : page

      return page
    },

    nextPage() {
      let page = this.currentPage + 1
      page = (page >= this.totalPage) ? this.totalPage : page
      // console.log('nextPage', page)
      return page
    }
  },

  methods: {
    onClickItem(page) {
      this.currentPage = page
      this.$emit('click-item', page)
    }
  }
}
</script>
