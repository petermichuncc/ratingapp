var rest = require('../server/controllers/rest');

module.exports = function(app){

  // find all songs route
  app.get('/sites', rest.findAll);
  
  // find one song route
  app.get('/sites/:id', rest.findOne);
  
  // Add song route
  app.post('/sites', rest.add);
  
  // Update song route
  app.put('/sites/:id', rest.update);
  
  // Delete song route
  app.del('/sites/:id', rest.remove);
};