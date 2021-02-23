<template lang="pug">
div
  #header.container.fixed.right-0.left-0.top-0.bg-white.px-1.z-10
    #title-area
      span#title-logo.font-serif.text-3xl.w-8
        span.italic じょそっこ免許証

  #main.container.absolute(class="px-1 lg:px-2 xl:px-2")
    <LisenseSvg />
</template>

<script>
import LisenseSvg from '@/assets/images/lisense.svg'

export default {
  components: {
    LisenseSvg
  },
  data () {
    return {
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
  top: 120px
}
</style>
