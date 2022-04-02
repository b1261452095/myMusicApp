/*
 * @Description: vux状态管理器
 * @Author: Bhb
 * @Date: 2022-04-02 16:26:55
 * @LastEditTime: 2022-04-02 17:41:34
 * @LastEditors: Bhb
 * @FilePath: \src\store\index.js
 */

//vueX自定义插件

import Vue from 'vue'
import VueX from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from "./actions";



Vue.use(VueX)

const options = {
  state,
  mutations,
  actions
}

const store = new VueX.Store(options)

export default store;
