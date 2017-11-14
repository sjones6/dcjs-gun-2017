gun.get('spencer').put({name: 'spencer'})

// same as ...
var spencer = gun.get('spencer')
spencer.put({name: 'spencer'})

// Let's make some relationships
var spencer = gun.get('spencer').put({name: 'spencer'})
var lucy = gun.get('lucy')
spencer.get('boss').put(lucy)

spencer.val(console.log)
spencer.get('boss').val(console.log)

// Let's do some more relationships
var projects = gun.get('projects');
var proj1 = projects.get('proj1').put({name: 'some cool JS project'});
projects.set(proj1)
spencer.get('project').put(proj1)
lucy.get('manages').put(proj1)

// Make a set
var employees = gun.get('employees')
var spencer = gun.get('spencer').put({name: 'spencer'})
var lucy = gun.get('lucy').put({name: 'lucy'})

employees.set(spencer)
employees.set(lucy)

// Get stuff out of the set:
employees.val(console.log)
employees.map().val(console.log)

// Get real-time updates from the set:
employees.map().on(console.log)
lucy.get('underlings').set(spencer)

