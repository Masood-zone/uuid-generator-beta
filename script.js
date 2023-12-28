function generateUUID() {
  // Generate random hexadecimal digits
  let digits = "0123456789abcdef";
  let n = digits.length;

  // Generate random hexadecimal digits and concatenate them to form the UUID
  let UUID = "";
  for (let i = 0; i < 32; i++) {
    UUID += digits[Math.floor(Math.random() * n)];
  }

  // Add hyphens to the UUID to seperate it into groups
  UUID =
    UUID.substring(0, 8) +
    "-" +
    UUID.substring(8, 12) +
    "-" +
    UUID.substring(12, 16) +
    "-" +
    UUID.substring(16, 20) +
    "-" +
    UUID.substring(20, 32);

  return UUID;
}

const person1 = {
  id: generateUUID(),
  name: "John",
};
const person2 = {
  id: generateUUID(),
  name: "John",
};
const person3 = {
  id: generateUUID(),
  name: "John",
};
console.log(person1, person2, person3);
