import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
      flowerList: []
    },
    getters: {
        flowerList: state => state.flowerList,
        getFlowerById: (state) => (id) => {
            return state.flowerList.find(flower => flower.id === id)
          }
    },
    actions: {
        loadFlowers ({ commit}) {
            const dummyFlowerData = [
                {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Chartzit24-1-09.jpg',
                    name: 'pyrethrum',
                    color: 'white',
                    id: '304',
                    season: 'winter'
                }, {
                    url: 'https://findingseaturtles.com/wp-content/uploads/2019/02/AZ-Homecomeing-Chrysanthemum.jpg',
                    name: 'Chrysanthemum',
                    color: 'red',
                    id: '365',
                    season: 'winter' 
                }, {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Chrysanthemum_lavandulifolium.jpg',
                    name: 'Northern dendranthema',
                    color: 'yellow',
                    id: '432',
                    season: 'summer' 
                }
            ];
            commit('setFlowerList', {flowerData: dummyFlowerData})
        },
        login () {
           // ...
        }
    },
    mutations: {
     setFlowerList(state, payload) {
        state.flowerList = payload.flowerData;
     },
     isloggedin () {
        // ...
     }
    }
  })