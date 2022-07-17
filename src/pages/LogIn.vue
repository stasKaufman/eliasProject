<template>
  <BaseLayout pageTitle="פרחי עמליה">
    <!-- Inputs with labels -->
    <ion-list>
      <ion-item  class="ion-padding">
        <ion-label>User Name</ion-label>
        <ion-input v-model="login.username" type="text"></ion-input>
      </ion-item>
      <ion-item  class="ion-padding">
        <ion-label>Password</ion-label>
        <ion-input v-model="login.password" type="password"></ion-input>
      </ion-item>
      <ion-button @click="submit" expand="full" class="ion-padding">Submit</ion-button>
    </ion-list>
  </BaseLayout>
</template>

<script>
import { IonLabel, IonInput, IonItem } from '@ionic/vue';

export default ({
  components: { IonLabel, IonInput, IonItem },
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      console.log(this.login)
    }
  }
});
</script>