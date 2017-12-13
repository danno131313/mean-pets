const mongoose = require("mongoose");
const Pet = mongoose.model('Pet');
const User = mongoose.model('User');

module.exports = {
    index: function(req, res) {
        return res.json({content: "It's working"});
    },
    
    createPet: function(req, res) {
        Pet.create(req.body, function(err, pet) {
            if(err) return err;
            return res.json(pet);
        })
    },
    
    getPets: function(req, res) {
        Pet.find({}, function(err, pets) {
            
            if(err) return err;
            console.log("looking up pets");
            console.log(pets);
            
            return res.json(pets);

        })
    },
    
    addLike: function(req, res) {

        Pet.findById(req.params.id, function(err, pet) {
            if(err) return err;
            
            User.findById(req.session.user._id, function(err, user) {
                if(err) return err;
                
                for(let like of pet.likes) {
                    if(String(like) == String(user._id)) {
                        return;
                    }
                }
                
                pet.likes.push(user);
                pet.save();
            })
        })
        
        return res.json({ status: true });
    },
    
    login: function(req, res) {
        User.find(req.body, (err, users) => {
            if(err) return err;
            
            if (users.length > 0) {
                req.session.user = users[0];
                return res.json(users);
            } else {
                User.create(req.body, (err, user) => {
                    if(err) return err;
                    req.session.user = user;
                    return res.json(user);
                });
            }
        });
    },
    
    getsession: function(req, res) {
        console.log("GETTING SESSION", req.session);
        return res.json(req.session);
    },
    
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/');
    }
    
}
