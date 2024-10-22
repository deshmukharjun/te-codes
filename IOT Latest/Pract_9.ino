const int tempPin = A0; // Pin where the LM35 is connected
float maxTemp = -1000.0; // Initialize to a very low value
float minTemp = 1000.0; // Initialize to a very high value

void setup() {
  Serial.begin(9600); // Initialize serial communication at 9600 bits per second
  Serial.println("Temperature Monitoring Started");
}

void loop() {
  int sensorValue = analogRead(tempPin); // Read the analog value from the sensor
  float voltage = sensorValue * (5.0 / 1023.0); // Convert the analog reading to voltage
  float temperatureC = voltage * 100.0; // Convert the voltage to temperature in Celsius
  float temperatureF = temperatureC * 9.0 / 5.0 + 32.0; // Convert Celsius to Fahrenheit

  // Update max and min temperatures
  if (temperatureF > maxTemp) {
    maxTemp = temperatureF;
  }
  if (temperatureF < minTemp) {
    minTemp = temperatureF;
  }

  // Print the current, max, and min temperatures
  Serial.print("Current Temperature: ");
  Serial.print(temperatureF);
  Serial.println(" °F");
  Serial.print("Max Temperature: ");
  Serial.print(maxTemp);
  Serial.println(" °F");
  Serial.print("Min Temperature: ");
  Serial.print(minTemp);
  Serial.println(" °F");

  delay(1000); // Wait for a second before taking another reading
}
