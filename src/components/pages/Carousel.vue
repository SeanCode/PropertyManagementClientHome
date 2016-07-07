<style>

  #carousel-container {
    float: left;
    width: 684px;
    height: 360px;
  }

  .item > img {
    width: 684px;
    height: 360px !important;
  }

  .carousel-indicators {
    position: absolute;
    bottom: 0;
  }

  .active {
    background-color: #009661 !important;
  }

</style>

<template>
  <div id="carousel-container" class="carousel slide">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-container" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-container" data-slide-to="1"></li>
      <li data-target="#carousel-container" data-slide-to="2"></li>
      <li data-target="#carousel-container" data-slide-to="3"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="../../assets/carousel_1.png" alt="First slide">
      </div>
      <div class="item">
        <img src="../../assets/carousel_2.png" alt="Second slide">
      </div>
      <div class="item">
        <img src="../../assets/carousel_3.png" alt="Third slide">
      </div>
      <div class="item">
        <img src="../../assets/carousel_4.png" alt="Fourth slide">
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {}
    }
  }

</script>
