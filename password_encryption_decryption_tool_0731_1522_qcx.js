// 代码生成时间: 2025-07-31 15:22:02
class PasswordEncryptionDecryptionTool {
  // The Caesar cipher shift value
  static shift = 3;

  /**
   * Encrypts the given password using the Caesar cipher method
   *
   * @param {string} password - The password to encrypt
   * @returns {string} - The encrypted password
   */
  encryptPassword(password) {
    try {
      // Check if password is valid
      if (!password) {
        throw new Error('Password cannot be empty.');
      }

      // Encrypt the password using the Caesar cipher method
      let encryptedPassword = '';
      for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i);
        // Check if the character is an alphabet
        if (char.match(/[a-zA-Z]/)) {
          let code = char.charCodeAt(0);
          // Adjust ASCII code for 'a' and 'A'
          if (code >= 65 && code <= 90) {
            code = ((code - 65 + PasswordEncryptionDecryptionTool.shift + 26) % 26) + 65;
          } else if (code >= 97 && code <= 122) {
            code = ((code - 97 + PasswordEncryptionDecryptionTool.shift + 26) % 26) + 97;
          }
          encryptedPassword += String.fromCharCode(code);
        } else {
          // Non-alphabet characters are added as is
          encryptedPassword += char;
        }
      }
      return encryptedPassword;
    } catch (error) {
      console.error('Encryption error:', error.message);
      return '';
    }
  }

  /**
   * Decrypts the given encrypted password using the Caesar cipher method
   *
   * @param {string} encryptedPassword - The encrypted password to decrypt
   * @returns {string} - The decrypted password
   */
  decryptPassword(encryptedPassword) {
    try {
      // Check if encrypted password is valid
      if (!encryptedPassword) {
        throw new Error('Encrypted password cannot be empty.');
      }

      // Decrypt the password using the Caesar cipher method
      let decryptedPassword = '';
      for (let i = 0; i < encryptedPassword.length; i++) {
        let char = encryptedPassword.charAt(i);
        // Check if the character is an alphabet
        if (char.match(/[a-zA-Z]/)) {
          let code = char.charCodeAt(0);
          // Adjust ASCII code for 'a' and 'A'
          if (code >= 65 && code <= 90) {
            code = ((code - 65 - PasswordEncryptionDecryptionTool.shift + 26) % 26) + 65;
          } else if (code >= 97 && code <= 122) {
            code = ((code - 97 - PasswordEncryptionDecryptionTool.shift + 26) % 26) + 97;
          }
          decryptedPassword += String.fromCharCode(code);
        } else {
          // Non-alphabet characters are added as is
          decryptedPassword += char;
        }
      }
      return decryptedPassword;
    } catch (error) {
      console.error('Decryption error:', error.message);
      return '';
    }
  }
}

// Example usage:
const encryptionTool = new PasswordEncryptionDecryptionTool();
let password = 'HelloWorld!';
let encrypted = encryptionTool.encryptPassword(password);
console.log('Encrypted:', encrypted);
let decrypted = encryptionTool.decryptPassword(encrypted);
console.log('Decrypted:', decrypted);
