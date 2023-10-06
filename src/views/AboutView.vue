<template>
  <div class="about">
      <div v-if="show==1" key="1">
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <div class="grid grid-cols-12 back_container"  @click="back()">
              <img src="@/assets/images/arrow_left.svg"/> <label class="pb-6" style="color: white">Back</label>
            </div>

            <ul class="mt-6 " style="margin-top: 300px;position: absolute;z-index: 99">
              <li v-for="(n,index) in nav">

                <div class="grid grid-cols-6 float-left" @click="setActive(index)">
                  <div :class="{invisible:!n.active}" class="col-span-2 content-center m-6 mw-200">
                    <div class="block1"></div>
                  </div>
                  <label class="col-span-4 pl-12 text-clip text-left" :class="{yellowc:n.active}">
                    {{ n.title }}</label>
                </div>

              </li>
            </ul>
          </div>


            <div class="p_container col-span-8">
              <div class=" bg-tint bg1" :class="{[animClass]:true}" >
              </div>
              <div class="container">
                <div class="card_container">
                  <div class="top_block"></div>
                  <div class="topl_block"></div>
                  <div class="card">
                    <div class="title">
                      Our People Come First
                    </div>
                    <div class="subtitle">
                      We are independently owned, strategic creative agency forever curious and ready to transform the way business is done.
                    </div>
                  </div>
                  <button class="my-4 mx-1 font-extrabold btn_more" >Learn More</button>
                </div>
              </div>
            </div>


        </div>
      </div>
      <div v-else-if="show==2" key="2">
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <div class="grid grid-cols-12 back_container"  @click="back()">
              <img src="@/assets/images/arrow_left.svg"/> <label class="pb-6" style="color: white">Back</label>
            </div>

            <ul class="mt-6 " style="margin-top: 300px;position: absolute;z-index: 99">
              <li v-for="(n,index) in nav">

                <div class="grid grid-cols-6 float-left" @click="setActive(index)">
                  <div :class="{invisible:!n.active}" class="col-span-2 content-center m-6 mw-200">
                    <div class="block1"></div>
                  </div>
                  <label class="col-span-4 pl-12 text-clip text-left" :class="{yellowc:n.active}">
                    {{ n.title }}</label>
                </div>

              </li>
            </ul>
          </div>
          <div class="p_container col-span-8">
            <div class="bg-tint bg2" :class="{[animClass]:true}" >
            </div>
            <div class="container" >
              <div class="item_card">
                <div class="card1" ref="cd1">
                  <div class="title">
                    We Know You Have
                  </div>
                  <div data-text="Problem" class="title blink" >
                    Problem
                  </div>
                </div>
                <div class="center_gap">
                  <div class="btn_center" @click="scrollCard" @mouseover="playHover('enter')" @mouseout="playHover('leave')">
                    <div style="margin:auto;position:absolute;left:10px;right:10px;top:10px;bottom:10px">
                      <div class="play" ><div class="play-button" :class="{'play-button-h':rp_class}"></div></div>
                    </div>
                  </div>

                </div>
                <div class="card1" ref="cd2" >
                  <div class="title">
                    We Solve Your
                  </div>
                  <div data-text="Problem" class="title blink" >
                    Problem
                  </div>
                </div>

                <div class="card1" >
                  <div class="title">

                  </div>
                  <div data-text="Problem" class="title blink" >

                  </div>
                </div>


              </div>
            </div>
          </div>




        </div>
      </div>
      <div v-else key="3">
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <div class="grid grid-cols-12 back_container"  @click="back()">
              <img src="@/assets/images/arrow_left.svg"/> <label class="pb-6" style="color: white">Back</label>
            </div>

            <ul class="mt-6 " style="margin-top: 300px;position: absolute;z-index: 99">
              <li v-for="(n,index) in nav">

                <div class="grid grid-cols-6 float-left" @click="setActive(index)">
                  <div :class="{invisible:!n.active}" class="col-span-2 content-center m-6 mw-200">
                    <div class="block1"></div>
                  </div>
                  <label class="col-span-4 pl-12 text-clip text-left" :class="{yellowc:n.active}">
                    {{ n.title }}</label>
                </div>

              </li>
            </ul>
          </div>
          <div class="p_container col-span-8">
            <div class=" bg-tint bg3" :class="{[animClass]:true}" >
            </div>
            <div  class="container" style="animation: appear 1s ease-in">
              <div class="card_container">
                <div class="top_block"></div>
                <div class="topl_block"></div>
                <div class="card_form">
                  <div class="title_form font-extrabold">
                    Type your
                  </div>
                  <div class="title_form font-extrabold">
                    beautiful name
                  </div>
                  <input placeholder="in here of Course :)" class="input_custom"/>
                  <div class="title_form font-extrabold">
                    Problem
                  </div>
                  <div class="title_form font-extrabold">
                    Protect your email address
                  </div>
                  <input placeholder="but not in here" class="input_custom mb-5"/>

                  <button class="my-2 mx-4 text-center font-extrabold btn_submit" >Submit</button>
                </div>

                <div class="bottom_block"></div>
                <div class="bottomr_block"></div>
              </div>
            </div>
            </div>

        </div>
      </div>
    </div>
</template>
<style scoped>
@import "@/assets/about.css";
.bg1{
  width:100%;height:1000px;background: url('@/assets/images/image3.png') !important;background-size: 100% 100% !important;
}
.bg2{
  width:100%;height:1000px;background: url('@/assets/images/bg2.png') !important;background-size: 100% 100% !important;
}
.bg3{
  width:100%;height:1000px;background: url('@/assets/images/bg3.png') !important;background-size: 100% 100% !important;
}
.play-button {
  clip-path: polygon(0 0, 50% 50%, 0 100%);

  position: relative;
  width: 80px;
  height: 50px;
  left: 25px;
  background: #fff;
}
.play-button-h{
  background: #FFB800 !important;
}
</style>
<script>
export default {
  components: {

  },
  data(){return{title: 'We Create ',subTitle:"Awesome Things",stShow:true,
    nav:[{title:"About Us",active:true},{title:"Our Product",active:false},{title:"Contact Us",active:false}]
    ,lastNav:0, show: 1,animClass:"slide-top",cd_index:1,rp_class:false
  }},
  methods:{

    scrollCard(){

      if(this.cd_index==1){
        this.$refs["cd2"].scrollIntoView({ behavior: "smooth" });
        this.cd_index=2;
      }else{
        this.$refs["cd1"].scrollIntoView({ behavior: "smooth" });
        this.cd_index=1;
      }
   //    this.$refs["bottom"].scrollBy({ behavior: "smooth",left:10 });
   //    this.$refs["bottom"].scrollTo(500,0)

    },
    setActive(index) {
      this.show=index+1;
      this.nav[index].active = true;
      if(index!==this.lastNav){
        this.nav[this.lastNav].active=false;
      }
      if(index<this.lastNav){
        this.animClass="slide-top";
      }else{
        this.animClass="slide-bottom";
      }
      this.lastNav=index;

    },
    back() {
      this.$router.push({
        name: "home"
      });
    },
    playHover(opt){
      if(opt=='enter'){
        this.rp_class=true;
      }else{
        this.rp_class=false;
      }
    }

  },

};
</script>
