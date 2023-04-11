import { createStore } from "vuex"

export default createStore({
    state: {
        cart: [],
        user: null,
    },
    getters: {
        CART: state => {
            return state.cart;
        },
        USER: state => {
            return state.user
        }
    },

    mutations: {
        ADD_ITEM: (state, payload) => {
            state.cart.push(payload);
        },
        DELETE_ITEM: (state) => {
            state.cart.pop();
        },
        SET_USER: (state, token) => {
            state.user = token
        }
    },

    actions: {
        addItem: (context, payload) => {
            context.commit('ADD_ITEM', payload);
          },
        deleteItem: (context, payload) => {
            context.commit('DELETE_ITEM', payload)
        },
        setUser: (context, token) => {
            context.commit('SET_USER', token)
        }
    },
})