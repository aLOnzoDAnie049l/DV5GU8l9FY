// 代码生成时间: 2025-09-23 19:45:28
 * Usage:
 * var loginSystem = new UserLoginSystem();
 * loginSystem.authenticateUser('username', 'password');
 */

class UserLoginSystem {
    /**
     * Initializes the UserLoginSystem instance.
     */
    constructor() {
        this.users = [
            { username: 'admin', password: 'admin123' },
            { username: 'user1', password: 'password1' }
        ];
    }

    /**
     * Authenticates the user with the provided username and password.
     * 
     * @param {string} username - The username to authenticate.
     * @param {string} password - The password to authenticate.
     * @returns {Promise<boolean>} - A promise that resolves to true if the user is authenticated, false otherwise.
     */
    authenticateUser(username, password) {
        return new Promise((resolve, reject) => {
            const user = this.users.find(u => u.username === username);
            if (!user) {
                reject(new Error('User not found'));
                return;
            }

            if (user.password === password) {
                resolve(true);
            } else {
                reject(new Error('Invalid password'));
            }
        });
    }
}

// Example usage:
const loginSystem = new UserLoginSystem();

loginSystem.authenticateUser('admin', 'admin123')
    .then(authenticated => {
        if (authenticated) {
            console.log('User authenticated successfully');
        } else {
            console.log('Authentication failed');
        }
    })
    .catch(error => {
        console.error('Authentication error:', error.message);
    });