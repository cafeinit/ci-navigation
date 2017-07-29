<template lang="pug">
  div.view-tabs
    //- h2.app-title Tabs

    ci-tabs
      ci-tab(v-for="(item, index) in tabs" :key="index"
        :text="item.title" @click="tabsItemOnClick(item)")

    ci-tabs(modifier="bottom-line")
      ci-tab(v-for="(item, index) in tabs" :key="index"
        :text="item.title" @click="tabsItemOnClick(item)")

    ci-tabs.ci-bottom-fixed(modifier="column")
      ci-tab(v-for="(item, index) in tabs" :key="index"
        :text="item.title" @click="tabsItemOnClick(item)")
</template>

<script>
export default {
  name: 'view-tabs',

  data() {
    return {
      tabs: [
        { title: 'TAB A', value: 111 },
        { title: 'TAB B', value: 222 },
        { title: 'TAB C', value: 333 },
      ]
    }
  },

  methods: {
    tabsItemOnClick(data) {
      console.log('tabsItemOnClick', data)
    }
  }
}
</script>
