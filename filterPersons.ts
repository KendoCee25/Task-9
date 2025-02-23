type User = {
    id: number;
    name: string;
    email: string;
    type: 'user';
  };
  
  type Admin = {
    id: number;
    name: string;
    role: string;
    type: 'admin';
  };
  
  type Person = User | Admin;
  
  type FilterCriteria<T> = Partial<Omit<T, 'type'>>;
  
  function filterPersons<T extends 'user' | 'admin'>(
    persons: Person[],
    personType: T,
    criteria: FilterCriteria<T extends 'user' ? User : Admin>
  ): (T extends 'user' ? User[] : Admin[]) {
    return persons.filter(person => {
      if (person.type !== personType) return false;
      return Object.keys(criteria).every(key => 
        (person as any)[key] === (criteria as any)[key]
      );
    }) as any;
  }
  
  // Example usage:
  const people: Person[] = [
    { id: 1, name: 'Ify', email: 'ify@example.com', type: 'user' },
    { id: 2, name: 'Kendo', role: 'manager', type: 'admin' },
    { id: 3, name: 'Blessing', email: 'blessing@example.com', type: 'user' }
  ];
  
  const users = filterPersons(people, 'user', { name: 'Ify' }); // Should return User[]
  const admins = filterPersons(people, 'admin', { role: 'manager' }); // Should return Admin[]
console.log(users, admins);