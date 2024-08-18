// Завдання
// type Errors = {
//       email?: string[];
//       firstName?: string[];
//       lastName?: string[];
//       phone?: string[];
//     };
    
//     type Form = {
//       email: string | null;
//       firstName: string | null;
//       lastName: string | null;
//       phone: string | null;
//       errors: Errors;
//     };
    
//     // Реалізуйте Params так, 
//     // щоб унеможливити поле 'errors' з типу Form
//     type Params = Form;

type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };
  
  // Реалізуйте Params так,
  // щоб унеможливити поле 'errors' з типу Form
  type Params = Omit<Form, "errors">;
  let param: Params = {
    email: 'selanta19@gmail.com',
    firstName: 'Liza',
    lastName: 'Zaichenko',
    phone: '0983128032',
  };
  
  console.log(param);

    