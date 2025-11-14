# Decode Helper Tool

A simple browser-based decode helper supporting multiple encoding formats such as Base64, URL encoding, JJEncode, AAEncode, JSFuck, and P_A_C_K_E_R encoded strings.

## Features

- Auto-detect and decode encoded strings with multiple popular encoding methods
- Decode Base64, URL encoding, JJEncode, AAEncode, JSFuck, and P_A_C_K_E_R
- Clear input and output easily
- Display decoding method used

## Usage

1. Paste your encoded text into the input box.
2. Click the **Decode** button.
3. The decoded result will appear in the output box.
4. Use the **Clear** button to reset input and output.

## ⚠️ Important Security Notice

This tool uses JavaScript's `eval()` function internally to decode some encoding formats such as JJEncode, AAEncode, JSFuck, and P_A_C_K_E_R.

- **Warning:** `eval()` executes code as JavaScript and can run malicious scripts if used with untrusted or unknown input.
- Do **NOT** paste or decode any suspicious or untrusted code.
- Use this tool only with trusted or verified encoded content.
- Running malicious code through `eval()` may compromise your browser or device security.
- The author of this tool is **NOT responsible** for any damage or security issues caused by misuse.

## License

MIT License © 2025 [Khin Maung Win]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software...

---

## Admin (Author) Liability Disclaimer

This software is provided "as is", without warranty of any kind.  
The author/admin is NOT responsible or liable for any damages, losses, or issues arising from the use, misuse, or inability to use this software by users.  
Users accept all risks related to execution of any code, including code that involves `eval` or similar potentially unsafe operations.  
Please use with caution and only on trusted inputs.

---

**By using this tool, you agree to the above conditions and understand the risks involved with using `eval()`.**
