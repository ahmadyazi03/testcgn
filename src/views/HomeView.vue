<template>
  <div class="home">
      <div class="relative h-32 w-auto " dir="rtl">
        <div class="absolute top-10 right-10 ">

          <div v-if="showST" class="grid grid-cols-2 gap-x-4 outer">

            <div class="block w-32 h-4 inner">

            </div>
            <div class="block1 w-16 h-4 gap-x-4 inner">

            </div>
          </div>

        </div>
      </div>

      <div class="container_frame">
        <img class="zoom img_center" @mouseover="showST = true,isGrayScale=false,zoomImage=true" @mouseout="showST=false,isGrayScale=true,zoomImage=false" :class="{grayscale:isGrayScale}" src="@/assets/images/image1.png"/>
        <div class="title topleftbox" >{{ title }}</div>
        <div class="bottomleftbox subtitle_parent">
          <router-link to="/about" :class="{subtitle_parent:showSTParent}">
            <div @mouseover="showSTParent=true,showST=true,mainColor=false" @mouseout="showSTParent=false,mainColor=true">
              <div class="grid grid-cols-4">
                <Transition name="slide-fade" >
                  <div v-if="showST"  class="subtitle col-span-3" :class="{yellow_color:!mainColor}">{{ subTitle }}</div>
                </Transition>
                <Transition name="slide-fade-r">
                  <img v-if="showST" class="col-span-1 p-3" :src="getImg()"/>
                </Transition>

              </div>
            </div>
          </router-link>



        </div>

      </div>
      <div class="relative h-32 w-auto">
        <div class="absolute bottom-10 left-10">
          <div v-if="showST" class="grid grid-cols-2 gap-x-4">
            <div class="block w-32 h-4 ">

            </div>
            <div class="block1 w-16 h-4 gap-x-4">

            </div>
          </div>
        </div>
      </div>

    </div>


</template>
<script>
        export default {
        components: {

        },
          data(){
            return {
              title:"We Create",
              subTitle:"Awesome Things",showST:true,
              showSTParent:false,
              mainColor:true,
              isGrayScale:false,
              zoomImage:true,
              tabIndex:0
            }
          },
        methods: {
        goBack() {
        this.$router.push({
        name: "home"
        });
        },
          getImg(){

            if(this.mainColor){
              return "/src/assets/images/arrow1y.svg"
            }else{
              return "/src/assets/images/arrow1.svg"
            }
          }
        }
        };
</script>


<style >
.container_frame{
  position:relative;

  height:600px;
  margin: 100px;
}
.img_center {
  position:absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  margin: auto;

}

div.topleftbox {
  position:absolute;
  left:-50px;
  top:-100px;
}
div.bottomleftbox {
  position:absolute;
  left:-50px;
  bottom:-50px;
}
div.block{
  background-color:#FFB800;
  animation: mymove 2s;
}
div.block1{
  background-color:#FFB800;
  animation: mymove1 2s;
}
</style>
<style >
body{
  background: url("@/assets/images/image2.png"), lightgray 50% / cover no-repeat;
}
.grayscale { filter: grayscale(100%); }
.title{
  color: #FFB800;
  font-size: 185px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.subtitle_parent:hover{
  animation: added 0.3s;
  background-color:#FFB800;
  color: white !important;
  padding: 20px;
  border-radius: 20px;
}
.subtitle_parent{
  width: 60%;
}
.subtitle{
  color: #FFB800;
  font-family: Montserrat;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline-block;
}
.white_color{
  color: white !important;

}
.yellow_color{
  color: white !important;

}
.arrow{
  width: 146px;
  height: 0px;
  flex-shrink: 0;
}


</style>

<style >

.slide-fade-enter-active {
  /*transition: all 0.3s ease-out;*/
  animation: added 0.3s;
}

.slide-fade-leave-active {
  animation: added 0.3s reverse;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  /*transform: translateX(20px);*/
  /*opacity: 0;*/
}

.slide-fade-r-enter-active {
  /*transition: all 0.3s ease-out;*/
  animation: removed 0.3s reverse;

}

.slide-fade-r-leave-active {
  animation: removed 0.3s ;
}

.slide-fade-r-enter-from,
.slide-fade-r-leave-to {
  /*transform: translateX(20px);*/
  /*opacity: 0;*/
}

@keyframes added {
  from {
    opacity: 0;
    translate: -100px 0;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes removed {
  from {
    opacity: 1;
    translate: 300px 0;
  }
  to {
    opacity: 0;
    translate: 800px 0;
  }
}
</style>

<style >
.zoom {
  padding: 50px;
  transition: transform .2s; /* Animation */
}

.zoom:hover {
  transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

</style>
<style >
.grow-leave-active {
  animation: grow 0.3s reverse;
}
.grow-enter-active {
  /*transition: all 0.3s ease-out;*/
  animation: grow 0.3s;
}
@keyframes grow {
  from {
    width: 0px;
  }

  to {
    width: 100%;
  }
}

@keyframes mymove {
  from {width: 0px;}
  to {width: 8rem; }
}
@keyframes mymove1 {
  from {width: 0px;}
  to {width: 4rem; }
}

</style>
