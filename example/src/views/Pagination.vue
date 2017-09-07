<template lang="pug">
  div.view-pagination
    h2.app-title Pagination

    ci-pagination(:page="page" :total-page="totalPage"
      is-show-next="true" is-show-last="true")
</template>

<script>
export default {
  name: 'view-pagination',

  data() {
    return {
      page: 5,
      totalPage: 15
    }
  },

  methods: {
    paginationItemOnClick(data) {
      console.log('paginationItemOnClick', data)
    }
  }
}
</script>
