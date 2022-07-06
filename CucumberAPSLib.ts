import axios, { AxiosResponse } from 'axios'

export default class License {
  private static baseURL: string = 'https://aktech.fr'

  public static async init (key: string): Promise<void> {
    try {
      const response: AxiosResponse<any> = await axios.get(
        this.baseURL + '/api/v1/auth/init',{
          headers: {
            Key: key
          }
        })
        return response.data
    } catch (e: any) {
      return e.response.data
    }
  }

  public static async getCsapLink(token: string): Promise<any> {
    return this.baseURL + "/api/v1/auth/csap/login?token=" + token
  }

  public static async getCsapCallback(token: string): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(
        this.baseURL + '/api/v1/auth/csap/callback',{
          params: {
            token: token
          }
        })
      return response.data
    } catch (e: any) {
      return e.response.data
    }
  }

  public static async getCsapEndpoint(token: string): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(
        this.baseURL + '/api/v1/auth/csap/endpoint',{
          headers: {
            Token: token
          }
        })
      return response.data
    } catch (e: any) {
      return e.response.data
    }
  }

  public static async verify(token: string): Promise<any> {

    try {
      const response: AxiosResponse<any> = await axios.get(
        this.baseURL + '/api/v1/auth/verify',{
          params: {
            token: token
          }
        })
      return response.data
    } catch (e: any) {
      return e.response.data
    }
  }
}