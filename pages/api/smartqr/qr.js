import QRCode from 'qrcode';
import { toUniURL } from './_smartqr';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Max-Age', 60 * 60 * 24);

  const { ios, android, other } = req.query;
  if (!ios && !android && !other) {
    res.status(400).json({ error: 'Requires atleast one ios, android or other URL' });
    return;
  }

  const url = toUniURL(ios, android, other);
  console.log(url);
  QRCode.toDataURL(url, (err, src) => {
    if (err) {
      res.status(400).json({ error: err.toString() });
      return;
    }

    const base64Data = src.replace(/^data:image\/png;base64,/, '');
    const img = Buffer.from(base64Data, 'base64');

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': img.length
    });
    res.end(img);
  });
}
