const home = require("../controllers/home");

module.exports = (app) => {
    app.get("/test", (req, res) => {
        home.index(req, res);
    });
    
    app.post("/login", (req, res) => {
        home.login(req, res);
    });
    
    app.post('/pets', (req, res) => {
        home.createPet(req, res);
    });
    
    app.get('/pets', (req, res) => {
        home.getPets(req, res);
    });
    
    app.get('/pets/:id/addLike', (req, res) => {
        home.addLike(req, res);
    });
    
    app.get('/getsession', (req, res)=>{
        home.getsession(req,res);
    });
    
    app.get('/logout', (req, res) => {
        home.logout(req, res);
    });
}
