<template>
  <h1 align="center" style="font-size: 5rem">FAQ</h1>
  <main style="margin-bottom: 5rem">
    <div class="container">
        <vue-collapsible-panel-group class="faq-container">
        <vue-collapsible-panel :expanded="false" class="faq-one">
          <!-- faq question -->
          <template #title class="faq-page">What is an FAQ Page?</template>
          <!-- faq answer -->
          <template #content class="faq-body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              saepe sequi, illum facere necessitatibus cum aliquam id illo omnis
              maxime, totam soluta voluptate amet ut sit ipsum aperiam.
              Perspiciatis, porro!
            </p>
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false" class="faq-one">
          <!-- faq question -->
          <template #title class="faq-page">What is an FAQ Page?</template>
          <!-- faq answer -->
          <template #content class="faq-body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              saepe sequi, illum facere necessitatibus cum aliquam id illo omnis
              maxime, totam soluta voluptate amet ut sit ipsum aperiam.
              Perspiciatis, porro!
            </p>
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false" class="faq-one">
          <!-- faq question -->
          <template #title class="faq-page">What is an FAQ Page?</template>
          <!-- faq answer -->
          <template #content class="faq-body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              saepe sequi, illum facere necessitatibus cum aliquam id illo omnis
              maxime, totam soluta voluptate amet ut sit ipsum aperiam.
              Perspiciatis, porro!
            </p>
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
  </main>
</template>

<script>
import {
  VueCollapsiblePanel,
  VueCollapsiblePanelGroup,
} from "@dafcoe/vue-collapsible-panel";
export default {
  components: {
    VueCollapsiblePanel,
    VueCollapsiblePanelGroup,
  },
  data() {
    return {
      isActive: false,
      // toggler = !toggler
      //   toggle(){
      //     if(!this.isActive){
      //       this.isActive=true
      //     }else{
      //       this.isActive=false
      //     }
      //   }
    };
  },
};
</script>