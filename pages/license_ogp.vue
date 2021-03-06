<template lang="html">
<div>
  <div class="container absolute px-1 lg:px-2 xl:px-2" id="main">
    <div id="license">
      <ReactiveLicense :name="name" :birthday="birthday" :address="address" :license_name="license_name" :qualifications="qualifications"></ReactiveLicense>
    </div>
  </div>
</div>
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
      birthday: '平成○年○月○日生',
      address: '○○県○○市○○町',
      license_name: '運転免許証',
      qualifications: '眼鏡等',
    }
  },
  computed: {
  },
  methods: {
  },
  async asyncData({ query }) {
    let ret = {};
    ["name", "birthday", "address", "license_name", "qualifications"].forEach(key=>{
      if (query[key]){
        ret[key] = decodeURIComponent(query[key].replace(/\+/g, ' '))
      }
    })
    return ret;
  }
}
</script>

<style>
body{
  width: 1200px;
  height: 630px;
}
</style>
