import {url} from '../config/server/constantes';
import axios from 'axios';
export default class API {
  static login(data: any, path: string) {
    return axios.post(url + path, data, {
      headers: {'Content-Type': 'application/json'},
    });
  }
  static register(data: any, path: string) {
    return axios.post(url + path, data);
  }
  static sendEmailRegister(path: string, token: string) {
    return axios.get(url + path, {headers: {Authorization: token}});
  }
  static forgotPassword(path: string, data: any) {
    return axios.post(url + path, data);
  }
  static sendEmailPassword(path: string, token: string) {
    return axios.get(url + path, {headers: {Authorization: token}});
  }
  static getLisAddress(data: any, path: string, token?: string) {
    return axios.post(url + path, data, {headers: {Authorization: token}});
  }
  static getProducts(path: string, token: string) {
    return axios.get(url + path, {headers: {Authorization: token}});
  }
  static getCategories(path: string, token: string) {
    return axios.get(url + path, {headers: {Authorization: token}});
  }
}
