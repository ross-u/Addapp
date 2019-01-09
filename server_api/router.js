const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
const controller = require('./controllers/index');

router.post('/user', controller.addUser);
router.get('/user', controller.getAllUsers);
router.put('/user/:id', controller.updateUser);
router.delete('/user/:id', controller.deleteUser);

router.post('/contact', controller.addContact);
router.get('/contact', controller.getAllContacts);
router.put('/contact/:id', controller.updateContact);
router.delete('/contact/:id', controller.deleteContact);

router.get('/*', () => {
  this.status = 404;
  this.body = _404;
});

let _404;
fs.readFile('./404.html', 'utf8', (err, data) => {
  if (err) _404 = 'The requested URL was not found on this server.';
  else _404 = data;
});

module.exports = router;
