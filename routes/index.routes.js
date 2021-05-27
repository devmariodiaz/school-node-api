const states = require('./states.routes');
const profiles = require('./profile.routes');

const routes = (app) => {
    app.use('/api/states', states);
    app.use('/api/profiles', profiles);
};

module.exports = routes;

// module.exports = function(app) {
//     //console.log(app);
//     app.use('/states', states);
//     //app.use('/auth');
// };