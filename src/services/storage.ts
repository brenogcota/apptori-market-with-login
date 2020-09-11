import AsyncStorage from '@react-native-community/async-storage';

export default class Storage {
  static async setKey(key: string, value: any) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  static async get(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (err) {
      console.log(err);
    }
  }

  static async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
