#include "pitches.h"

const int buttonPin = 2;  // pushbutton pin
const int speakerPin = 8;  // speaker pin
const int potentiometerPin = A0; 

int noteDuration = 1000;

void setup() {
  // Set up the pushbutton pins to be an input:
  pinMode(buttonPin, INPUT);

  // Set up the speaker pin to be an output:
  pinMode(speakerPin, OUTPUT);

  Serial.begin(115200);
}

void loop() {
  int potentiometerValue;
  potentiometerValue = analogRead(potentiometerPin);
  
  int frequency;
  // voice frequency adult male 85-155 Hz, adult female 165-255 Hz
  // speaker produce 80-300 Hz sound
  frequency = map(potentiometerValue, 0, 1023,80,300);
//  frequency = int((float(potentiometerValue) / 1023.0) * 220.0)+80;
  Serial.println(frequency);
  // variables to hold the pushbutton states
  int buttonState;
  buttonState = digitalRead(buttonPin);

  if (buttonState == LOW)
  {
    tone(speakerPin, frequency, noteDuration);
  }
  else
  {
    noTone(speakerPin);
  }

}
