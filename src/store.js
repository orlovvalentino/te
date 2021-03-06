import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    name: '',
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, resp) {
      state.status = 'success';
      state.token = resp.data.token;
      state.user = resp.data.user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: 'http://localhost:3000/login', data: user, method: 'POST' })
          .then((resp) => {
            const token = resp.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', resp);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: 'http://localhost:3000/register', data: user, method: 'POST' })
          .then((resp) => {
            const token = resp.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', resp);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error', err);
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common.Authorization;
        resolve();
      });
    },
  },
});
