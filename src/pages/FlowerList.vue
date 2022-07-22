<template>
  <BaseLayout pageTitle="Flower List">
    <ion-searchbar animated v-model="text"></ion-searchbar>
    <!-- List of Text Items -->
    <ion-list>
        <ion-item v-for="flower in filteredFlowerList"  :key="flower.id" @click="goToFlowerPage(flower.id)">
            <ion-thumbnail slot="start">
                <ion-img :src="flower.url" :alt="flower.name"></ion-img>
            </ion-thumbnail>
            <ion-label>
            {{flower.name}}
            </ion-label>
        </ion-item>
    </ion-list>
  </BaseLayout>
</template>

<script>
import {IonSearchbar, IonThumbnail, IonList, IonItem, IonLabel, IonImg } from '@ionic/vue';

export default ({
  name: 'FlowerList',
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    this.flowerList()
    // this.$store.dispatch('loadFlowers');
  },
  computed: {
    filteredFlowerList () {
      const text = this.text.toUpperCase();
      let finalResult = this.flowerList;
      if (text)
      {
        finalResult = this.flowerList.filter(flower =>
        {
          const { name, id } = flower;
          const searchParams = [name, id];
          const isTextInSearchParam = searchParams.join(' ').toUpperCase().indexOf(text) !== -1
          if (isTextInSearchParam) return flower;
        });
      }

      return finalResult
    }
  },
  methods: {
    async flowerList () {
      try {
        const flowerList = await this.$http.get('/flowers');
        return flowerList
      } catch (error) {
        console.error(error)
      }

      // return this.$store.getters.flowerList;
    },
    todologin () {
       this.$router.push({ name: 'LogIn'})
    },
    goToFlowerPage(flowerId) {
      this.$router.push({ name: 'FlowerPage', params: { id: flowerId }})
    }
  },
  components: {
    IonList, 
    IonItem, 
    IonLabel,
    IonThumbnail,
    IonImg,
    IonSearchbar
  }
});
</script>