<template>
  <div>
    <bounce-loader
      v-bind:loading="isLoadinf"
      v-bind:color="'#68d391'"
      v-bind:size="100"
    />
    <px-assets-table v-if="!isLoadinf" v-bind:assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'
export default {
  name: 'Home',
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
      isLoadinf: false
    }
  },

  created() {
    this.isLoadinf = true
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoadinf = false))
  }
}
</script>
