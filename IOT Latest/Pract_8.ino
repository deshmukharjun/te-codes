// Pin connected to the sensor output
const int sensorPin = A0;

void setup() {
  // Initialize serial communication at 9600 bits per second
  Serial.begin(9600);
}

void loop() {
  // Read the sensor value (analogRead gives a value between 0 and 1023)
  int sensorValue = analogRead(sensorPin);
  
  // Convert the analog value to temperature in Celsius
  // LM35 outputs 10mV per degree Celsius, 0°C corresponds to 0V
  float temperature = (sensorValue * (5.0 / 1024.0)) * 100;
  
  // Send the temperature value to the serial monitor
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");

  // Wait a second before taking another reading
  delay(1000);
}
