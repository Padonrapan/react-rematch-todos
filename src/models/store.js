import { init } from "@rematch/core";

const count = {
  state: {
    value: "abc",
    list: [1, 2, 3]
  },
  reducers: {
    handleChange(state, payload) {
      return {
        ...state,
        ...payload
      };
    },
    handlekeyDown(state, payload) {
      return {
        ...state,
        ...payload
      };
    },
    handleDeleteItem(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

const store = init({
  name: "store",
  models: {
    count
  }
});

export default store;
