console.log('This is step 1')

var user = {}
console.log('Create User:         ', user);
user.name = 'John'
console.log('set name as John:    ', user);
user.surname = 'Mike'
console.log('set surname as Mike: ', user);
user.name = 'Peter'
console.log('set name as Peter:   ', user);
delete(user.name)
console.log('delete name:         ', user);