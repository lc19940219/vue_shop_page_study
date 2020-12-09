import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS,RECEIVE_USER_INFO} from "./mutation-type";
import {reqAddress, reqShops, reqFoodCategorys,reqUserInfo} from "../api";

export default {
  async getAddress({commit, state}) {

    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address=result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getShop({commit, state}) {

    const {latitude,longitude}=state
    const result = await reqShops(longitude,latitude)
    if (result.code === 0) {
      const shops=result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  async getFoodCategorys({commit, state}) {

    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys=result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  recordUser({commit, state},user) {

    commit(RECEIVE_USER_INFO, {user})
  },
  async getUserInfo({commit, state}) {

    const result = await reqUserInfo()
    if (result.code === 0) {
      const user=result.data
      commit(RECEIVE_USER_INFO, {user})
    }
  }
}
