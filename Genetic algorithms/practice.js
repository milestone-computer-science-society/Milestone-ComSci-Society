//
// ComSci: Practice
//

// McCarthy function
function mccarthy(n) {
   if (n > 100) {
      return n - 10;
   } else {
      return mccarthy(mccarthy(n + 11));
   }
}

// Quadratic
function quadratic(a, b, c) {
   if (b * b < 4 * a * c) {
      return [];
   } else if (b * b === 4 * a * c) {
      return [-b / (2 * a)];
   } else {
      let d = Math.sqrt(b * b - 4 * a * c);
      return [(-b + d) / (2 * a), (-b, -d) / (2 * a)];
   }
}

// Fahrenheit to celsius
function FahrenheitToCelsius(temperature) {
   return (temperature - 32) * 5 / 9;
}

// Celsius to fahrenheit
function CelsiusToFahrenheit(temperature) {
   return temperature * 9 / 5 + 32;
}
