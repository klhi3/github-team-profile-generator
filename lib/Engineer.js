const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, githubUsername) {

      super(name, id, email);
      this.githubUsername = githubUsername;

    }

    getGitHub(){
        return this.githubUsername;
    }
  
    getRol(){
        return `'Engineer'`;
  }
}
  
  module.exports = Engineer;