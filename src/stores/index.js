import { createStore } from "vuex"

export default createStore({
    state: {
        cart: [],
    },
    getters: {
        CART: state => {
            return state.cart;
          },
    },

    mutations: {
        ADD_ITEM: (state, payload) => {
            state.cart.push(payload);
        },
        DELETE_ITEM: (state) => {
            state.cart.pop();
        }
    },

    actions: {
        addItem: (context, payload) => {
            context.commit('ADD_ITEM', payload);
          },
          deleteItem: (context, payload) => {
            context.commit('DELETE_ITEM', payload)
          }
    },
})