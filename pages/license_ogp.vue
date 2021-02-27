<template lang="pug">
div
  #main.container.absolute(class="px-1 lg:px-2 xl:px-2")
    #license
      ReactiveLicense(
        :name = "name",
        :birthday = "birthday",
        :address = "address",
        :license_name = "license_name",
        :qualifications = "qualifications"
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
  },
  methods: {
  },
}
</script>

<style>
body{
  width: 1200px;
}
</style>
