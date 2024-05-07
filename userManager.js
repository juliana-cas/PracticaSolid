class UserManager {
    constructor() {
      this.users = [];
    }
  
    registerUser(user) {
      this.users.push(user);
      if (user.type === "wholesale buyer") {
        console.log("Registration successful as a wholesale buyer !");
      } else {
        console.log("Registration successful as a occasional buyer!");
      }
    }
  
    updateUser(id, newInfo) {
      const user = this.findUserById(id);
      if (user) {
        Object.assign(user, newInfo);
      } else {
        console.log("User not found");
      }
    }
  
    deleteUser(id) {
      this.users = this.users.filter(user => user.id !== id);
    }
  
    findUserById(id) {
      return this.users.find(user => user.id === id);
    }
  
    classifyUsersByType(type) {
      return this.users.filter(user => user.type === type);
    }
  }