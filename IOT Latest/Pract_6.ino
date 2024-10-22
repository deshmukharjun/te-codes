const int tempPin = A0; // Pin where the LM35 is connected

void setup() {
  Serial.begin(9600); // Initialize serial communication at 9600 bits per second
}

void loop() {
  int sensorValue = analogRead(tempPin); // Read the analog value from the sensor
  float voltage = sensorValue * (5.0 / 1023.0); // Convert the analog reading to voltage
  float temperatureC = voltage * 100.0; // Convert the voltage to temperature in Celsius

  Serial.print("Temperature: ");
  Serial.print(temperatureC);
  Serial.println(" °C");

  delay(1000); // Wait for a second before taking another reading
}
