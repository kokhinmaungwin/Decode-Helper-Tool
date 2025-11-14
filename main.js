(() => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const decodeBtn = document.getElementById('decodeBtn');
  const copyBtn = document.getElementById('copyBtn');
  const clearBtn = document.getElementById('clearBtn');
  const status = document.getElementById('status');

  const decodeMethods = {
  base64: (str) => {
    try {
      return atob(str);
    } catch {
      return null;
    }
  },
  urlDecode: (str) => {
    try {
      return decodeURIComponent(str);
    } catch {
      return null;
    }
  },
  jjencode: (str) => {
    if (!str.includes('$={___:++$')) return null;
    try {
      const decoded = eval(`(function(){return ${str}})()`);
      return decoded || null;
    } catch {
      return null;
    }
  },
  aaencode: (str) => {
    if (!str.startsWith('ﾟωﾟﾉ=')) return null;
    try {
      let result = '';
      eval(str.replace(/ﾟ/g, ''));
      return result || null;
    } catch {
      return null;
    }
  },
  jsfuck: (str) => {
    if (!/[\[\]\(\)\!\+]+/.test(str)) return null;
    try {
      // eslint-disable-next-line no-eval
      const decoded = eval(str);
      return decoded || null;
    } catch {
      return null;
    }
  },
  p_a_c_k_e_r: (str) => {
    if (!str.includes('eval(function(p,a,c,k,e,d)')) return null;
    try {
      const decoded = eval(str);
      return decoded || null;
    } catch {
      return null;
    }
  },
};

  function autoDecode(source) {
  for (const method in decodeMethods) {
    const result = decodeMethods[method](source);
    if (result && result !== source) {
      return { result, method };
    }
  }
  return { result: source, method: 'none' };
}

  decodeBtn.addEventListener('click', () => {
    const source = input.value.trim();
    if (!source) {
      status.textContent = 'Please enter some encoded text first.';
      output.value = '';
      return;
    }
    const { result, method } = autoDecode(source);
    output.value = result;
    status.textContent = method === 'none' ? 'No decode applied.' : `Decoded using: ${method}`;
  });

  copyBtn.addEventListener("click", () => {
  if (!output.value.trim()) return;

  navigator.clipboard.writeText(output.value)
    .then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
    })
    .catch(() => {
      copyBtn.textContent = "Failed";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
    });
});
  
  clearBtn.addEventListener('click', () => {
    input.value = '';
    output.value = '';
    status.textContent = '';
  });
})();
