import cep from 'cep-promise';
export default class ZipCodeHelp {
  public static getAddres(zipcode: string): Promise<any> {
    return cep(zipcode);
  }
}
