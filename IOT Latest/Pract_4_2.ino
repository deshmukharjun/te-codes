const int greenLED = 9;
const int yellowLED = 10;
const int redLED = 11;

void setup() {
  Serial.begin(9600);
  pinMode(greenLED, OUTPUT);
  pinMode(yellowLED, OUTPUT);
  pinMode(redLED, OUTPUT);
  digitalWrite(greenLED, LOW);
  digitalWrite(yellowLED, LOW);
  digitalWrite(redLED, LOW);
}

void loop() {
  if (Serial.available() > 0) {
    char input = Serial.read();
    if (input == 'b') {
      blinkGreenLED();
    } else if (input == 'g') {
      illuminateLED(greenLED);
    } else if (input == 'y') {
      illuminateLED(yellowLED);
    } else if (input == 'r') {
      illuminateLED(redLED);
    }
  }
}

void blinkGreenLED() {
  for (int i = 0; i < 5; i++) { // Blink 5 times
    digitalWrite(greenLED, HIGH);
    delay(500);
    digitalWrite(greenLED, LOW);
    delay(500);
  }
}

void illuminateLED(int ledPin) {
  digitalWrite(greenLED, LOW);
  digitalWrite(yellowLED, LOW);
  digitalWrite(redLED, LOW);
  digitalWrite(ledPin, HIGH);
}
