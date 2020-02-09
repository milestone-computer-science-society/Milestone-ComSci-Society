function mccarthy(n) {
  if (n > 100) {
    return n - 10;
  } else {
    return mccarthy(mccarthy(n + 11));
  }
}
