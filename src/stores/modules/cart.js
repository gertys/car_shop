

state = {
  cart: [],
};

getters = {
  CART: state => {
    return state.cart;
  },
};

mutations = {
    ADD_ITEM: (state, payload) => {
        state.cart.push(payload);
    },
    REMOVE_ITEM: (state) => {
        state.cart.shift();
    }
};

actions = {
  SAVE_ITEM: (context, payload) => {
    context.commit('ADD_ITEM', payload);
  },
  DELETE_ITEM: (context, payload) => {
    context.commit('REMOVE_ITEM', payload)
  }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};