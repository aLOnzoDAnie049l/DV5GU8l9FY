// 代码生成时间: 2025-08-11 13:23:03
// password_encryption_decryption.js

/**
 * This module provides a simple password encryption and decryption tool.
 * @module PasswordTool
 */

const crypto = require('crypto');

/**
 * Encrypts a password using AES-256-CBC encryption algorithm.
 * @param {string} password - The password to encrypt.
 * @param {string} secretKey - The secret key used for encryption.
 * @returns {string} - The encrypted password as a base64 string.
 */
function encryptPassword(password, secretKey) {
    try {
        const iv = crypto.randomBytes(16); // Initialization vector
        const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
        let encrypted = cipher.update(password);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return iv.toString('hex') + ':' + encrypted.toString('hex');
    } catch (error) {
        console.error('Encryption failed:', error);
        throw error;
    }
}

/**
 * Decrypts a password that was encrypted with the encryptPassword function.
 * @param {string} encrypted - The encrypted password as a hex string.
 * @param {string} secretKey - The secret key used for decryption.
 * @returns {string} - The decrypted password.
 */
function decryptPassword(encrypted, secretKey) {
    try {
        const [ivHex, encryptedText] = encrypted.split(':');
        const iv = Buffer.from(ivHex, 'hex');
        const encryptedTextBuf = Buffer.from(encryptedText, 'hex');
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
        let decrypted = decipher.update(encryptedTextBuf);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    } catch (error) {
        console.error('Decryption failed:', error);
        throw error;
    }
}

/**
 * Main function to demonstrate the usage of encryption and decryption.
 */
function main() {
    const secretKey = 'your-secret-key'; // Replace with your actual secret key
    const password = 'your-password';
    
    try {
        const encrypted = encryptPassword(password, secretKey);
        console.log('Encrypted:', encrypted);
        
        const decrypted = decryptPassword(encrypted, secretKey);
        console.log('Decrypted:', decrypted);
    } catch (error) {
        console.error('Error during encryption or decryption:', error);
    }
}

// Run the main function to demonstrate the encryption and decryption.
main();