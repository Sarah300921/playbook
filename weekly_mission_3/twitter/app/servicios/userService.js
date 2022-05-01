// JavaScript source code

const User = require('./../../app/model/userclass'  )
class UserService {
    
    static create(id, username, name, bio) {
        return new User(id, username, name, "no bio")
    }

    static getInfo(User) {
        return Object.values(User)       
    }

    static updateBio(user, bio) {
        user.setBio = bio
    }

    static updateUserUsername(user, newUsername) {
        user.setUsername = newUsername
    }

    static getAllUsernames(users) {
        const usersUsernames = users.map(user => user.username)
        return usersUsernames
    }
 
}
module.exports = User
console.log("dsd model")
module.exports = UserService