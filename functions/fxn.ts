function myFunction(income: number, taxRate: number): number {
  return income * taxRate;
}

console.log(myFunction(1000, 0.2)); 


function calculateTax(income: number, taxRate: number): number {
  if(income < 0) {
    throw new Error("Income cannot be negative");
  }
  if(taxRate < 0 || taxRate > 1) {
    throw new Error("Tax rate must be between 0 and 1");
  }
  return income * taxRate;
}

console.log(calculateTax(1000, 0)); // 200
console.log(calculateTax(2000, 0.3)); // 600
console.log(calculateTax(3000, 0.4)); // 1200
console.log(calculateTax(4000, 1)); // 4000