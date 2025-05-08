 let employee: { id: number; name: string; } = { id: 1, name: "" };
 employee.name = "John Doe";

 let employee2: { id: number; name?: string; } = { id: 1 };
    employee2.name = "wwe";

let employee3: { readonly id: number; name?: string; } = { id: 1 };

console.log(employee); // { id: 1, name: 'John Doe' }
console.log(employee2); // { id: 1, name: 'John Doe' }
console.log(employee3); // { id: 1, name: 'John Doe' }