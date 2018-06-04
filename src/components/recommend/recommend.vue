<template>
  <div class="recommend">
    <div v-if="sliderData.length" class="slider-wrapper">
      <slider>
        <li v-for="item in sliderData" v-bind:key="item.id">
           <a v-bind:href="item.linkUrl">
             <img v-bind:src="item.picUrl"/>
           </a>
        </li>
      </slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getRecommend } from '../../api/recommend'
import {ERR_OK} from '../../api/config'
import Slider from '../../baseComponents/slider/slider.vue'
export default {
  created () {
    this._getRecommend()
  },
  data () {
    return {
      sliderData: []
    }
  },
  components: {
    'slider': Slider
  },
  methods: {
    _getRecommend () {
      getRecommend().then((result) => {
        if (result.code === ERR_OK) {
          this.sliderData = result.data.slider
        }
      })
    }
  }
}
</script>

<style>

</style>
