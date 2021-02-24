<template lang="pug">
div
  #header.container.fixed.right-0.left-0.top-0.bg-white.px-1.z-10
    #title-area
      span#title-logo.font-serif.text-3xl.w-8
        span.italic じょそっこ免許証

  #main.container.absolute(class="px-1 lg:px-2 xl:px-2")
    #license
      ReactiveLicense(
        :name="name"
      )
    #textarea
      textarea(
        v-model="name",
        placeholder="おなまえ", 
        autofocus="autofocus", 
        class="inline shadow border border-gray-700 rounded w-full py-2 px-3 text-black-700 leading-tight md:block focus:outline-none focus:shadow-outline"
      )  
</template>

<script>
import ReactiveLicense from '@/components/ReactiveLicense.vue'

export default {
  components: {
    ReactiveLicense
  },
  data () {
    return {
      name: '○○ ○○'
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style>
#main{
  top:  45px
}
</style>
