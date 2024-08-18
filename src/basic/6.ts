// Завдання
// const mango = {
//         name: 'Mango',
//         age: 30,
//         email: 'john@example.com',
//         address: {
//             city: 'New York',
//             country: 'USA'
//         }
//     };
    
//     const poly = {
//         name: 'Mango',
//         age: 30,
//         email: 'john@example.com'
//     };

type Email = {
    city: string,
    country: string
}
interface User {
    name: string,
    age: number,
    email: string,
    address?: Email,
}


const mango: User = {
        name: 'Mango',
        age: 30,
        email: 'john@example.com',
        address: {
            city: 'New York',
            country: 'USA'
        }
    };
    
    const poly: User = {
        name: 'Mango',
        age: 30,
        email: 'john@example.com'
    };

    console.log(poly)
    console.log(mango)

    