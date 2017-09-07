<template lang="pug">
  div.view-index
    h2.app-title Index

    ci-list
      ci-list-body
        ci-list-cell(title="Pagination" extend-icon="chevron_right"
          @click="toUrl('pagination')")
        ci-list-cell(title="Tabs" extend-icon="chevron_right"
          @click="toUrl('tabs')")
</template>

<script>
export default {
  name: 'view-index',

  methods: {
    toUrl(url) {
      // console.log('toUrl', url)
      this.$router.push(url)
    }
  }
}
</script>
