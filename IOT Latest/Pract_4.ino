void setup() {
  pinMode(9, OUTPUT); // Initialize pin 9 as an output for the first LED
  pinMode(10, OUTPUT); // Initialize pin 10 as an output for the second LED
}

void loop() {
  digitalWrite(9, HIGH); // Turn the first LED on
  digitalWrite(10, LOW); // Turn the second LED off
  delay(1000); // Wait for a second
  digitalWrite(9, LOW); // Turn the first LED off
  digitalWrite(10, HIGH); // Turn the second LED on
  delay(1000); // Wait for a second
}
