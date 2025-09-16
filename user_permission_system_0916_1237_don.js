// 代码生成时间: 2025-09-16 12:37:41
// Define the User class
class User {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role; // 'admin', 'editor', 'viewer'
    }

    // Grant permissions based on role
    getPermissions() {
        switch (this.role) {
            case 'admin':
                return ['create', 'read', 'update', 'delete'];
            case 'editor':
                return ['read', 'update'];
            case 'viewer':
                return ['read'];
            default:
                throw new Error('Invalid role');
        }
    }
}

// Define the PermissionManager class
class PermissionManager {
    constructor() {
        this.users = [];
    }

    // Add a user to the system
    addUser(user) {
        if (!(user instanceof User)) {
            throw new Error('Invalid user object');
        }
        this.users.push(user);
    }

    // Remove a user from the system
    removeUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }

    // Check if a user has a specific permission
    hasPermission(userId, permission) {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user.getPermissions().includes(permission);
    }
}

// Example usage
try {
    const permissionManager = new PermissionManager();

    const user1 = new User(1, 'Alice', 'admin');
    const user2 = new User(2, 'Bob', 'editor');
    const user3 = new User(3, 'Charlie', 'viewer');

    permissionManager.addUser(user1);
    permissionManager.addUser(user2);
    permissionManager.addUser(user3);

    console.log(permissionManager.hasPermission(1, 'create')); // true
    console.log(permissionManager.hasPermission(2, 'delete')); // false
    console.log(permissionManager.hasPermission(3, 'read')); // true

    permissionManager.removeUser(2);
    console.log(permissionManager.hasPermission(2, 'read')); // throws User not found error
} catch (error) {
    console.error(error.message);
}