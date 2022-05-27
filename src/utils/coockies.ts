/*import Cookies from 'js-cookie';

export function setCookie(
  key: string,
  value: string | object,
  options?: Cookies.CookieAttributes,
) {
  Cookies.set(key, value, {
    ...options,
    secure: process.env.NODE_ENV === 'production' ? true : false,
  });
}

export function getCookie(key: string) {
  return Cookies.get(key);
}

export function removeCookie(key: string) {
  return Cookies.remove(key);
}

export async function getCookiePromisse(key: string) {
  return new Promise(resolve => {
    if (Cookies.get(key) != undefined) {
      resolve(Cookies.get(key));
    } else {
      //TODO quando cookie tiver implementdo, colocar setTimeoutOut para uns 2s
      setTimeout(() => resolve(Cookies.get(key)), 0);
    }
  });
}
*/
