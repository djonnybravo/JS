function remove (string) {
  if (string.endsWith("!")) {
    return string.substring(0, string.length - 1);
  }
  return string;
}