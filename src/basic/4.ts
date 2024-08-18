// Завдання
// function showMessage(message) {
//       console.log(message);
//     }
    
//     function calc(num1, num2) {
//       return num1 + num2;
//     }
    
//     function customError() {
//       throw new Error('Error');
//     }
    
function showMessage(message: string): void {
      console.log(message);
    }

    showMessage("hi")
    
    function calc(num1: number, num2: number): number {
      return num1 + num2;
    }

    // console.log(calc(10, 5));
    const result = calc(10, 5);
    console.log(result);
    
    function customError(): never {
  throw new Error("Error");
}
console.log(customError());

