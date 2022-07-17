<template>
  <BaseLayout pageTitle="Flower Page">
    <ion-row v-if="flower">
      <ion-col size="12" size-sm>
        <ion-img :src="flower.url"></ion-img>
      </ion-col>
      <ion-col size="12" size-sm>
        <div class="ion-text-start ion-text-capitalize">
         <h2>{{flower.name}}</h2>
          <!-- List of Text Items -->
          <ion-list>
            <ion-item>
              <ion-label>ID</ion-label>
              <ion-label class="ion-text-end">{{flower.id}}</ion-label>
            </ion-item>
            <ion-item class="ion-justify-content-between">
              <ion-label>color</ion-label>
              <ion-label class="ion-text-end">{{flower.color}}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>season</ion-label>
              <ion-label class="ion-text-end">{{flower.season}}</ion-label>
            </ion-item>
          </ion-list>
        </div>
      </ion-col>
    </ion-row>
  </BaseLayout>
</template>

<script>
import { IonRow, IonCol, IonList, IonItem, IonLabel } from '@ionic/vue';

export default ({
  mounted () {
    this.$store.dispatch('loadFlowers');
  },
  computed: {
    flowerId() {
      console.log('flowerPage', this.$route.params.id)
      return this.$route.params.id;
    },
    flower () {
      return this.$store.getters.getFlowerById(this.flowerId);
    }
  },
  name: 'FlowerPage',
  components: {
    IonRow,
    IonCol,
    IonList, 
    IonItem, 
    IonLabel
  }
});
</script>

