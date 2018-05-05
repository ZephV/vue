<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-arrow">&#xe600;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/veribles.styl'
  .header
    display:flex
    height:.86rem
    line-height:.86rem
    background-color:$bgColor
    color:#fff
    .header-left
      float:left
      width:.64rem
      .icon-back
        text-align:center
        font-size:.4rem
    .header-input
      flex 1
      margin-top:.12rem
      padding-left:.2rem
      height:.62rem
      line-height:.62rem
      background-color:#fff
      border-radius:.1rem
      color:#ccc
    .header-right
      float:right
      width:1.24rem
      text-align:center
      .icon-arrow
        margin-left:-.04rem
        font-size:.24rem
</style>
