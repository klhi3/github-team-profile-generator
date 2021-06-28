const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {

      super(name, id, email);
      this.github = github;

    }

    //github username 
    getGitHub(){
        return this.github;
    }
  
    getRol(){
        return 'Engineer';
   }
}
  
  module.exports = Engineer;