<template>
    <h1 align="center" style="font-size: 5rem">FAQ</h1>
    <main style="margin-bottom: 5rem">
       <section class="faq-container">
            <div class="faq-one">
                <!-- faq question -->
                <h1 class="faq-page" :class="{active : isActive}" @click="toggle">What is an FAQ Page?</h1>
                <!-- faq answer -->
                <div class="faq-body">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                        aperiam.
                        Perspiciatis, porro!</p>
                </div>
            </div>
            <hr class="hr-line">
            <div class="faq-two">
                <!-- faq question -->
                <h1 class="faq-page" :class="{active : isActive}" @click="toggle">Why do you need an FAQ page?</h1>
                <!-- faq answer -->
                <div class="faq-body">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                        aperiam.
                        Perspiciatis, porro!</p>
                </div>
            </div>
            <hr class="hr-line">
            <div class="faq-three">
                <!-- faq question -->
<h1 class="faq-page" :class="{active : isActive}" @click="toggle">Does it improves the user experience of a website?</h1>
                <!-- faq answer -->
                <div class="faq-body">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                        aperiam.
                        Perspiciatis, porro!</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default{
    data(){
        return{
            isActive: false,
      // toggler = !toggler
      toggle(){
        if(!this.isActive){
          this.isActive=true
        }else{
          this.isActive=false
        }
      }
        }
    }
}
</script>