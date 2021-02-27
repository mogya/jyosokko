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
      div(class="relative mb-3 flex justify-center md:flex md:items-center")
        label(class="block text-black-500 font-bold text-right text-sm mr-1 leading-9")
          | おなまえ
        input(
          v-model="name",
          placeholder="山田 花子",
          autofocus="autofocus", 
          class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight"
        )  
      div(class="relative mb-3 flex justify-center md:flex md:items-center")
        label(class="block text-black-500 font-bold text-right text-sm mr-1 leading-9")
          | 生年月日
        input(
          v-model="birthday",
          placeholder="平成○○年○○月○○日生",
          autofocus="autofocus", 
          class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight"
        )
      div(class="relative mb-3 flex justify-center md:flex md:items-center")
        label(class="block text-black-500 font-bold text-right text-sm mr-1 leading-9")
          | 住所
        input(
          v-model="address",
          placeholder="○○県○○市○○町",
          autofocus="autofocus", 
          class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight"
        )
      div(class="relative mb-3 flex justify-center md:flex md:items-center")
        label(class="block text-black-500 font-bold text-right text-sm mr-1 leading-9")
          | 条件
        input(
          v-model="qualifications",
          placeholder="眼鏡等",
          autofocus="autofocus", 
          class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight"
        )
      div(class="relative mb-3 flex justify-center md:flex md:items-center")
        label(class="block text-black-500 font-bold text-right text-sm mr-1 leading-9")
          | 運転免許証
        input(
          v-model="license_name",
          placeholder="運転免許証",
          autofocus="autofocus", 
          class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight"
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
      birthday: '平成01年 01月 01日生',
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
        { hid: 'og:description', property: 'og:description', content: this.meta_description,  },
        { hid: 'og:url', property: 'og:url', content: "https://jyosokko.com/license/" },
        { hid: 'og:image', property: 'og:image', content: this.ogp_url },
        { hid: 'og:image:width', property: 'og:image:width', content: "1135" },
        { hid: 'og:image:height', property: 'og:image:height', content: "595" },
        { hid: 'twitter:card', property: 'twitter:card', content: "summary_large_image" },
      ],
    }
  }
}
</script>

<style>
body{
  width: 1200px;
}
#main{
  top:  45px
}
#license{
  margin-bottom: 10px;
}
#textareas{
  width: 1200px;
}
#textareas label{
  width: 5rem;
}
</style>
