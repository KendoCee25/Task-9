function filterPersons(persons, personType, criteria) {
    return persons.filter(function (person) {
        if (person.type !== personType)
            return false;
        return Object.keys(criteria).every(function (key) {
            return person[key] === criteria[key];
        });
    });
}
// Example usage:
var people = [
    { id: 1, name: 'Ify', email: 'ify@example.com', type: 'user' },
    { id: 2, name: 'Kendo', role: 'manager', type: 'admin' },
    { id: 3, name: 'Blessing', email: 'blessing@example.com', type: 'user' }
];
var users = filterPersons(people, 'user', { name: 'Ify' }); // Should return User[]
var admins = filterPersons(people, 'admin', { role: 'manager' }); // Should return Admin[]
console.log(users, admins);
