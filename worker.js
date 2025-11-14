function decodeBase64(str) {
  try { return atob(str); } catch { return null; }
}

function decodeURL(str) {
  try { return decodeURIComponent(str); } catch { return null; }
}

function decodeJSFuck(str) {
  if (!/[\[\]\(\)\!\+]{10,}/.test(str)) return null;
  try { return eval(str); } catch { return null; }
}

function decodeJJ(str) {
  if (!str.includes('$={') && !str.includes('$_=')) return null;
  try { return eval(str); } catch { return null; }
}

function decodeAA(str) {
  if (!str.startsWith("ﾟ")) return null;
  try { return eval(str); } catch { return null; }
}

function decodePacker(str) {
  if (!str.includes("eval(function(p,a,c,k,e,d)")) return null;
  try { return eval(str); } catch { return null; }
}

const methods = {
  base64: decodeBase64,
  url: decodeURL,
  jsfuck: decodeJSFuck,
  jjencode: decodeJJ,
  aaencode: decodeAA,
  packer: decodePacker,
};

self.onmessage = (e) => {
  const src = e.data;

  for (const key in methods) {
    const decoded = methods[key](src);
    if (decoded && decoded !== src) {
      self.postMessage({ result: decoded, method: key });
      return;
    }
  }

  self.postMessage({ result: src, method: "none" });
};
