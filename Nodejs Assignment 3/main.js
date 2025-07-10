import User, { validateEmail } from './user.js';

const user = new User('Darur Vinay');
console.log(user.getInfo());

const email = 'vinaydarur123@gmail.com';
console.log(`Is "${email}" a valid email?`, validateEmail(email));
