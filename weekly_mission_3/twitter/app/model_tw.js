// JavaScript source code

const User = require('./../model/userclass'  )
class userService {
    
    static create(id, username, name, bio) {
        let bio = bio
    }

    set setBio(defaultBio) {
        bio = defaultBio
    }

    static getInfo(User) {
        return Object.values(User)       
    }

    static updateUserUsername(User, newUsername) {
        User.setUsername = newUsername
    }

    static getAllUsernames(User) {
        const usersusernames = users.map(user => user.username)
        return usersUsernames
    }
 
}
module.exports = User

module.exports = userService