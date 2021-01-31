# ceasarsCipher
// This is a Caesars Cipher
function rot13(str) {
  let answer = "";
  let firstHalf = "abcdefghijklm".toUpperCase();
  let lastHalf = "nopqrstuvwxyz".toUpperCase();

  for (let i = 0; i < str.length; i += 1) {
    let toDecode = str[i];

    if (firstHalf.indexOf(toDecode) >= 0) {
      answer += lastHalf[firstHalf.indexOf(toDecode)];
    } else if (lastHalf.indexOf(toDecode) >= 0) {
      answer += firstHalf[lastHalf.indexOf(toDecode)];
    } else {
      answer += toDecode;
    }
  }

  return answer;
}
