<template lang="html">
<div>
  <div class="container fixed right-0 left-0 top-0 bg-white px-1 z-10" id="header">
    <div id="title-area"><span class="font-serif text-3xl w-8" id="title-logo"><span class="italic">じょそっこ免許証</span></span></div>
  </div>
  <div class="container absolute px-1 lg:px-2 xl:px-2" id="main">
    <div id="license">
      <ReactiveLicense :name="name" :birthday="birthday" :address="address" :license_name="license_name" :qualifications="qualifications"></ReactiveLicense>
    </div>
    <div id="textareas">
      <div class="relative mb-3 flex justify-center md:flex md:items-center">
        <label class="block text-black-500 font-bold text-right text-sm mr-1 leading-9">おなまえ</label>
        <input class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight" v-model="name" placeholder="山田 花子" autofocus="autofocus"/>
      </div>
      <div class="relative mb-3 flex justify-center md:flex md:items-center">
        <label class="block text-black-500 font-bold text-right text-sm mr-1 leading-9">生年月日</label>
        <input class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight" v-model="birthday" placeholder="平成○○年○○月○○日生" autofocus="autofocus"/>
      </div>
      <div class="relative mb-3 flex justify-center md:flex md:items-center">
        <label class="block text-black-500 font-bold text-right text-sm mr-1 leading-9">住所</label>
        <input class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight" v-model="address" placeholder="○○県○○市○○町" autofocus="autofocus"/>
      </div>
      <div class="relative mb-3 flex justify-center md:flex md:items-center">
        <label class="block text-black-500 font-bold text-right text-sm mr-1 leading-9">条件</label>
        <input class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight" v-model="qualifications" placeholder="眼鏡等" autofocus="autofocus"/>
      </div>
      <div class="relative mb-3 flex justify-center md:flex md:items-center">
        <label class="block text-black-500 font-bold text-right text-sm mr-1 leading-9">運転免許証</label>
        <input class="flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-1 text-gray-700 leading-tight" v-model="license_name" placeholder="運転免許証" autofocus="autofocus"/>
      </div>
      <div class="relative mb-3 flex justify-left md:flex md:items-left">
        <p>
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <a class="underline" :href="share_url">オリジナル免許証をtwitterでシェア</a>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ReactiveLicense from '@/components/ReactiveLicense.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter)

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
    title: function(){
      return `${this.name}さんの${this.license_name}`
    },
    ogp_url: function(){
      let url = "https://ogp-builder.com/6EcZK9/https://jyosokko.com/license_ogp/?";
      ["name", "birthday", "address", "license_name", "qualifications"].forEach(key=>{
        url = url + `${key}=${encodeURI(this.$data[key])}&`
      })
      return url.replace(/&$/, '');
    },
    share_url: function(){
      return `https://twitter.com/intent/tweet?text=${encodeURI(this.title)}&url=${encodeURIComponent(this.page_url)}`
    },
    page_url: function(){
      let url = "https://jyosokko.com/license/?";
      ["name", "birthday", "address", "license_name", "qualifications"].forEach(key=>{
        url = url + `${key}=${encodeURI(this.$data[key])}&`
      })
      return url.replace(/&$/, '');
    }
  },
  methods: {
  },
  created() {
    if (process.client) {
      const query = this.$route.query;
      ["name", "birthday", "address", "license_name", "qualifications"].forEach(key=>{
        if (query[key]){
          this.$set(this.$data, key, decodeURIComponent(query[key].replace(/\+/g, ' ')));
        }
      }, this);
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { property: 'og:title', content: this.title },
        { property: 'og:type', content: "article" },
        { property: 'og:url', content: this.page_url },
        { property: 'og:image', content: this.ogp_url },
        { property: 'og:image:width', content: "1135" },
        { property: 'og:image:height', content: "595" },
        { property: 'twitter:card', content: "summary_large_image" },
      ],
    }
  },
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
