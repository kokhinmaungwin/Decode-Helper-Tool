const input = document.getElementById("input");
const output = document.getElementById("output");
const decodeBtn = document.getElementById("decodeBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const status = document.getElementById("status");

const worker = new Worker("worker.js");

decodeBtn.onclick = () => {
  const text = input.value.trim();
  if (!text) {
    status.textContent = "Please enter encoded text.";
    return;
  }
  status.textContent = "Decoding...";
  worker.postMessage(text);
};

worker.onmessage = (e) => {
  const { result, method } = e.data;
  output.value = result;
  status.textContent =
    method === "none" ? "No decode applied." : `Decoded with: ${method}`;
};

copyBtn.onclick = () => {
  navigator.clipboard.writeText(output.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
};

clearBtn.onclick = () => {
  input.value = "";
  output.value = "";
  status.textContent = "";
};
