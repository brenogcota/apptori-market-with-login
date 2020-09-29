import * as SecureStore from 'expo-secure-store';

export default class Secure {
  static async setKey(key: string, value: any) {
    try {
      const jsonValue = JSON.stringify(value);
      await SecureStore.setItemAsync(key, jsonValue);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  static async get(key: string) {
    try {
      const value = await SecureStore.getItemAsync(key);
      return value != null ? JSON.parse(value) : null;
    } catch (err) {
      console.log(err);
    }
  }

  static async remove(key: string) {
    try {
      await SecureStore.deleteItemAsync(key);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
