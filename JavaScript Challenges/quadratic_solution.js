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
