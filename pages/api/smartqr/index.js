import { SERVER_URL, fromUniURLParams } from './_smartqr';

export default function handler(req, res) {
  const query = req.query;
  const userAgent = req.headers['user-agent'];
  const isIOS = /(iPhone|iPad|iOS)/i.test(userAgent) || false;
  const isAndroid = /Android.*(wv|.0.0.0)/i.test(userAgent) || false;
  
  const urls = fromUniURLParams(query);
  let redirectUrl = urls.other || urls.ios || urls.android || SERVER_URL;
  if (isIOS) {
    redirectUrl = urls.ios;
  } else if (isAndroid) {
    redirectUrl = urls.android;
  }

  res.redirect(301, redirectUrl);
}
