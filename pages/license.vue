<template lang="pug">
div
  #header.container.fixed.right-0.left-0.top-0.bg-white.px-1.z-10
    #title-area
      span#title-logo.font-serif.text-3xl.w-8
        span.italic じょそっこ免許証

  #main.container.absolute(class="px-1 lg:px-2 xl:px-2")
    #license
      ReactiveLicense(
        :name = "name",
        :birthday = "birthday",
        :address = "address",
        :license_name = "license_name",
        :qualifications = "qualifications"
      )
    #textareas
      label(class="block text-black-500 font-bold text-right text-sm mr-1 leading-9" style="width: 10rem;")
        | おなまえ
      textarea(
        v-model="name",
        placeholder="山田 花子",
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
      name: '○○ ○○',
      birthday: '平成○○年○○月○○日生',
      address: '○○県○○市○○町',
      license_name: '運転免許証',
      qualifications: '眼鏡等',
    }
  },
  computed: {
    meta_description: function(){
      return `${this.name}さんの${this.license_name}`
    },
    ogp_url: function(){
      return `https://ogp-builder.com/6EcZK9/https://jyosokko.com/license_ogp/`
    }
  },
  methods: {
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.meta_description },
        { hid: 'og:type', property: 'og:type', content: "article" },
        { hid: 'og:title', property: 'og:title', content: "じょそっこどっとこむ" },
        { hid: 'og:description', property: this.meta_description,  },
        { hid: 'og:url', property: 'og:url', content: "https://jyosokko.com/license/" },
        { hid: 'og:image', property: 'og:image', content: this.ogp_url },
      ],
    }
  }
}
</script>

<style>
#main{
  top:  45px
}
</style>
