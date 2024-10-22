#include <DHT.h>

#define DHTPIN 2      // Pin where the DHT11 is connected
#define DHTTYPE DHT11   // DHT 11 
#define BUZZER 8     // Pin where the buzzer is connected
#define THRESHOLD_TEMP 30  // Threshold temperature in Celsius

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  float temperature = dht.readTemperature();
  
  if (isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" *C");

  if (temperature > THRESHOLD_TEMP) {
    digitalWrite(BUZZER, HIGH);  // Turn on the buzzer
  } else {
    digitalWrite(BUZZER, LOW);   // Turn off the buzzer
  }
  delay(2000); // Wait for 2 seconds before reading again
}
