const KEY = [
  [1, 2],
  [3, 5],
]; // Chave fixa 2x2

// Função para criptografar uma mensagem usando a cifra de Hill
function encrypt(message) {
  message = formatMessage(message);
  const plaintext = convertToNumbers(message);
  const ciphertext = new Array(plaintext.length);

  for (let i = 0; i < plaintext.length; i += 2) {
    const block = [plaintext[i], plaintext[i + 1]];
    const encryptedBlock = multiplyMatrix(KEY, block);
    ciphertext[i] = encryptedBlock[0];
    ciphertext[i + 1] = encryptedBlock[1];
  }

  return convertToText(ciphertext);
}

// Função para descriptografar uma mensagem usando a cifra de Hill
function decrypt(ciphertext) {
  const encrypted = convertToNumbers(ciphertext);
  const decrypted = new Array(encrypted.length);

  const inverseKey = invertMatrix(KEY);
  for (let i = 0; i < encrypted.length; i += 2) {
    const block = [encrypted[i], encrypted[i + 1]];
    const decryptedBlock = multiplyMatrix(inverseKey, block);
    decrypted[i] = decryptedBlock[0];
    decrypted[i + 1] = decryptedBlock[1];
  }

  return convertToText(decrypted).replace(/X/g, ""); // Remove os "X" adicionados para completar os blocos
}

// Função auxiliar para formatar a mensagem, adicionando "X" para completar os blocos de tamanho 2
function formatMessage(message) {
  if (message.length % 2 !== 0) {
    message += "X";
  }
  return message;
}

// Função auxiliar para converter uma mensagem em um array de números correspondentes às letras
function convertToNumbers(message) {
  const numbers = new Array(message.length);
  for (let i = 0; i < message.length; i++) {
    numbers[i] = message.charCodeAt(i) - 65; // Assume que a mensagem contém apenas letras maiúsculas
  }
  return numbers;
}

// Função auxiliar para converter um array de números em uma mensagem correspondente
function convertToText(numbers) {
  let text = "";
  for (const number of numbers) {
    text += String.fromCharCode(number + 65); // Assume que a mensagem resultante é composta apenas por letras maiúsculas
  }
  return text;
}

// Função auxiliar para multiplicar uma matriz 2x2 por um vetor 2x1
function multiplyMatrix(matrix, vector) {
  const result = new Array(2);
  result[0] = (matrix[0][0] * vector[0] + matrix[0][1] * vector[1]) % 26; // Realiza o módulo 26 para manter os resultados dentro do alfabeto (letras maiúsculas)
  result[1] = (matrix[1][0] * vector[0] + matrix[1][1] * vector[1]) % 26;
  return result;
}

// Função auxiliar para inverter uma matriz 2x2
function invertMatrix(matrix) {
  const determinant = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  let detInverse = -1;
  for (let i = 0; i < 26; i++) {
    if ((determinant * i) % 26 === 1) {
      detInverse = i;
      break;
    }
  }
  const inverse = new Array(2);
  inverse[0] = [
    (matrix[1][1] * detInverse) % 26,
    (-matrix[0][1] * detInverse) % 26,
  ];
  inverse[1] = [
    (-matrix[1][0] * detInverse) % 26,
    (matrix[0][0] * detInverse) % 26,
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (inverse[i][j] < 0) {
        inverse[i][j] += 26;
      }
    }
  }
  return inverse;
}

function encryptMessage() {
  const plaintext = document.getElementById("plaintext").value;
  const encrypted = encrypt(plaintext);
  document.getElementById("encrypted").textContent = encrypted;
}

function decryptMessage() {
  const ciphertext = document.getElementById("ciphertext").value;
  const decrypted = decrypt(ciphertext);
  document.getElementById("decrypted").textContent = decrypted;
}
