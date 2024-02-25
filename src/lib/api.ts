import { appConfig } from "@/config/app";
import COOKIE_KEYS from "@/lib/cookie-keys";
import axios, {
  CustomParamsSerializer,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import Cookies from "js-cookie";
import qs from "qs";

/**
 * @class Base
 * @abstract
 */
abstract class Base {
  /**
   * @static
   * @protected
   * @memberof Base
   */
  protected static DEFAULT_CONFIG: AxiosRequestConfig = {
    baseURL: appConfig.apiBaseUrl,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    paramsSerializer: ((params: string) =>
      qs.stringify(params, {
        indices: false,
      })) as unknown as CustomParamsSerializer,
  };
  /**
   * @static
   * @protected
   * @memberof Base
   */
  protected static instance: AxiosInstance = axios.create(this.DEFAULT_CONFIG);

  /**
   * @param {string} token
   * @returns {void}
   * @memberof Base
   * @static
   */
  static setToken(token: string): void {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

/**
 * @class ApiRequest
 * @abstract
 */
export default abstract class ApiRequest extends Base {
  /**
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof ApiRequest
   */
  static get<T = void, Error = void, Data = any>(
    url: string,
    config?: AxiosRequestConfig<Data>
  ) {
    return this.send<T, Error>(url, { ...config, method: "get" });
  }

  /**
   * @param {string} url
   * @param {any} [data]
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof ApiRequest
   */
  static async post<T = void, Error = void>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return await this.send<T, Error>(url, { ...config, method: "post", data });
  }

  /**
   * @param {string} url
   * @param {any} [data]
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof ApiRequest
   */
  static put<T = void, Error = void>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this.send<T, Error>(url, { ...config, method: "put", data });
  }

  /**
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof ApiRequest
   */
  static delete<T = void, Error = void>(
    url: string,
    config?: AxiosRequestConfig
  ) {
    return this.send<T, Error>(url, { ...config, method: "delete" });
  }

  /**
   * @param {string} url
   * @param {any} [data]
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof ApiRequest
   */
  static patch<T = void, Error = void>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return this.send<T, Error>(url, { ...config, method: "patch", data });
  }

  /**
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @static
   * @private
   * @memberof ApiRequest
   */
  private static async send<T = void, Error = void>(
    url: string,
    config?: AxiosRequestConfig
  ) {
    try {
      const token = Cookies.get(COOKIE_KEYS.userToken);

      if (token) {
        this.setToken(token);
      }

      const conf = { ...this.DEFAULT_CONFIG, ...config };
      const response = await ApiRequest.instance.request<
        T,
        AxiosResponse<T>,
        Error
      >({
        ...conf,
        url,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
