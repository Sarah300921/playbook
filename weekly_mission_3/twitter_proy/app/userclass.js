// JavaScript source code
class user {
    constuctor(id, username, name, bio) {
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }

    get fechaC (){
        return this.dateCreated;
    }
    get fechaU (){
        return this.lastUpdate;
    }
    get getUsername(){
        return this.username;
    }
    get getBio() {
        return this.bio;
    }
    set setUsername (newUsername){
        this.username=newUsername
    }
    set setBio (neBio){
        this.bio = newBio
    }
}
