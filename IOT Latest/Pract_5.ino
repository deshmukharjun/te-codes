void setup() {
  Serial.begin(9600); // Initialize serial communication at 9600 bits per second
  Serial.println("Enter a number:"); // Prompt the user to enter a number
}

void loop() {
  if (Serial.available() > 0) { // Check if data is available to read
    int number = Serial.parseInt(); // Read the number entered by the user
    int squaredNumber = number * number; // Calculate the square of the number
    Serial.print("The square of ");
    Serial.print(number);
    Serial.print(" is ");
    Serial.println(squaredNumber);
    Serial.println("Enter another number:"); // Prompt the user to enter another number
  }
}
