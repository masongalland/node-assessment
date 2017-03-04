var tools = require('./users.js')


module.exports = {
    readAll: function(){
        return tools.find('','')
    },
    findUserById: function(userId){
        return tools.findOne('id',userId)
    },
    getAdmins: function(){
        let users = tools.find('type', 'admin');
        if (users){
            return users;
        }else{
            return null;
        }
    },
    getNonAdmins: function(){
        let users = tools.find('type', 'user');
        if (users){
            return users;
        }else{
            return null;
        }
    },
    getUsersByFavorite: function(favorite){
        
        let results = tools.find('favorites', user[key].indexOf(favorite))
        if (results){
            return results;
        }else{
            return null;
        }

    },
    getUsersByAgeLimit: function(age){
        let users = tools.findAge('age', age)
        return users;
    },
    findUserByQuery: function(term, value){
        let upper = value[0].toUpperCase();
        let lastName = upper + value.slice(1).toLowerCase();
        if(term == 'last_name'){
            return tools.find(term, lastName);
        }else if(term == 'email'){
            return tools.find(term, value)
        }

    },
    createUser: function(userObj){
        return tools.add(userObj);
    },
    updateUser: function(userId, obj){
        return tools.update('id', userId, obj)
    },
    removeUser: function(userId){
        return tools.remove('id', userId);
    }
}