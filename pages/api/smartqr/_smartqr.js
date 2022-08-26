/**
 * Smart QR service
 * Allows one QR code to be scanned and redirects to different websites/app stores depending
 * on the user agent. This can be used to have one QR lead directly to the IOS/android app store.
 */

const SERVER_URL = process.env.SERVER_URL || process.env.VERCEL_URL || 'http://localhost:3000';

const prefixReplacer = 'PRE';
const iosURIPrefix = 'https://apps.apple.com/ph/app';
const androidURIPrefix = 'https://play.google.com/store/apps/details';

export function encodeStoreURI(iosURI, androidURI, otherURI) {
  let result = '?';
  if (iosURI) {
    result += `i=${encodeURIComponent(iosURI.replace(iosURIPrefix, prefixReplacer))}&`;
  }
  if (androidURI) {
    result += `a=${encodeURIComponent(androidURI.replace(androidURIPrefix, prefixReplacer))}&`;
  }
  if (androidURI) {
    result += `o=${encodeURIComponent(otherURI)}&`;
  }
  return result.substr(0, result.length - 1);
}

export function toUniURL(ios, android, other) {
  return `${SERVER_URL}/sqr${encodeStoreURI(ios, android, other)}`;
}

export function extractFullURL(str, prefix) {
  if (prefix && str.substr(0, prefixReplacer.length) === prefixReplacer) {
    return prefix + str.substr(prefixReplacer.length);
  }
  return str;
}

export function fromUniURLParams(params) {
  const ios = extractFullURL(params.i, iosURIPrefix);
  const android = extractFullURL(params.a, iosURIPrefix);
  const other = extractFullURL(params.o);
  return {
    ios,
    android,
    other,
  };
}

export function fromUniURL(urlStr) {
  const url = new URL(urlStr);
  const params = url.searchParams;;
  return fromUniURLParams({
    i: params.get('i'),
    a: params.get('a'),
    o: params.get('o'),
  });
}
