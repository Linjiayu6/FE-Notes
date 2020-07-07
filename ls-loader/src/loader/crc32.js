// Copyright (C) 2014-present  SheetJS

//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at

//        http://www.apache.org/licenses/LICENSE-2.0

//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

// modify by longjiawen@meituan.com

const T = signedCrcTable()

function signedCrcTable () {
  let c = 0
  const table = new Array(256)

  for (let n = 0; n !== 256; ++n) {
    c = n
    c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1))
    c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1))
    c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1))
    c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1))
    c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1))
    c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1))
    c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1))
    c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1))
    table[n] = c
  }

  return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table
}

export default function crc32Str (str, seed) {
  var C = seed ^ -1
  for (let i = 0, L = str.length, c, d; i < L;) {
    c = str.charCodeAt(i++)
    if (c < 0x80) {
      C = (C >>> 8) ^ T[(C ^ c) & 0xFF]
    } else if (c < 0x800) {
      C = (C >>> 8) ^ T[(C ^ (192 | ((c >> 6) & 31))) & 0xFF]
      C = (C >>> 8) ^ T[(C ^ (128 | (c & 63))) & 0xFF]
    } else if (c >= 0xD800 && c < 0xE000) {
      c = (c & 1023) + 64; d = str.charCodeAt(i++) & 1023
      C = (C >>> 8) ^ T[(C ^ (240 | ((c >> 8) & 7))) & 0xFF]
      C = (C >>> 8) ^ T[(C ^ (128 | ((c >> 2) & 63))) & 0xFF]
      C = (C >>> 8) ^ T[(C ^ (128 | ((d >> 6) & 15) | ((c & 3) << 4))) & 0xFF]
      C = (C >>> 8) ^ T[(C ^ (128 | (d & 63))) & 0xFF]
    } else {
      C = (C >>> 8) ^ T[(C ^ (224 | ((c >> 12) & 15))) & 0xFF]
      C = (C >>> 8) ^ T[(C ^ (128 | ((c >> 6) & 63))) & 0xFF]
      C = (C >>> 8) ^ T[(C ^ (128 | (c & 63))) & 0xFF]
    }
  }
  return (C ^ -1) >>> 0
}
