const int knockSensor = A0; // Knock sensor connected to analog pin A0
const int piezoPin = 8;     // Piezo element connected to digital pin 8
const int threshold = 100;  // Threshold for detecting a knock

void setup() {
  pinMode(piezoPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(knockSensor);
  Serial.println(sensorValue);

  if (sensorValue > threshold) {
    playTune();
  }
  delay(100); // Small delay to avoid multiple detections
}

void playTune() {
  // Define the melody notes and their durations
  int melody[] = {262, 294, 330, 349, 392, 440, 494, 523};
  int noteDurations[] = {4, 4, 4, 4, 4, 4, 4, 4}; // Quarter notes

  for (int thisNote = 0; thisNote < 8; thisNote++) {
    int noteDuration = 1000 / noteDurations[thisNote];
    tone(piezoPin, melody[thisNote], noteDuration);
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    noTone(piezoPin);
  }
}
