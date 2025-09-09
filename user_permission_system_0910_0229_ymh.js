// 代码生成时间: 2025-09-10 02:29:52
class User {
  #id;
  #permissions;
  
  constructor(id, permissions = []) {
    this.#id = id;
    this.#permissions = permissions;
  }
  
  getID() {
    return this.#id;
  }
  
  getPermissions() {
    return this.#permissions;
  }
  
  hasPermission(permission) {
    return this.#permissions.includes(permission);
  }
  
  addPermission(permission) {
    if (!this.hasPermission(permission)) {
      this.#permissions.push(permission);
    } else {
      throw new Error("Permission already exists");
    }
  }
  
  removePermission(permission) {
    const index = this.#permissions.indexOf(permission);
    if (index > -1) {
      this.#permissions.splice(index, 1);
    } else {
      throw new Error("Permission does not exist");
    }
  }
}

class PermissionManager {
  #users;
  
  constructor() {
    this.#users = new Map();
  }
  
  registerUser(id, permissions = []) {
    if (this.#users.has(id)) {
      throw new Error("User already exists");
    }
    this.#users.set(id, new User(id, permissions));
  }
  
  getUser(id) {
    const user = this.#users.get(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
  
  deleteUser(id) {
    if (!this.#users.has(id)) {
      throw new Error("User not found");
    }
    this.#users.delete(id);
  }
  
  addPermissionToUser(userId, permission) {
    const user = this.getUser(userId);
    user.addPermission(permission);
  }
  
  removePermissionFromUser(userId, permission) {
    const user = this.getUser(userId);
    user.removePermission(permission);
  }
}

// Example usage:

try {
  const manager = new PermissionManager();
  manager.registerUser("user1"); // Register a new user without permissions
  manager.addPermissionToUser("user1", "read"); // Grant a permission to user
  
  const user = manager.getUser("user1"); // Retrieve user
  console.log(user.getPermissions()); // Output permissions
  
  manager.removePermissionFromUser("user1", "read"); // Revoke a permission from user
  console.log(user.getPermissions()); // Output permissions
} catch (error) {
  console.error(error.message);
}