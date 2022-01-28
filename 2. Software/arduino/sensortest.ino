#include "pitches.h"
#include "arduinoFFT.h"

#define SAMPLES 128             //SAMPLES-pt FFT. Must be a base 2 number. Max 128 for Arduino Uno.
#define SAMPLING_FREQUENCY 2048 //Ts = Based on Nyquist, must be 2 times the highest expected frequency.

arduinoFFT FFT = arduinoFFT();

const int buttonPin = 2;
const int speakerPin = 8;
const int potentiometerPin = A0; 
const int flexPin = A2;

int noteDuration = 1000;
int flexValue;
int potentiometerValue;
int frequency;
int buttonState;

unsigned int samplingPeriod;
unsigned long microSeconds;
 
double vReal[SAMPLES]; //create vector of size SAMPLES to hold real values
double vImag[SAMPLES]; //create vector of size SAMPLES to hold imaginary values
 

void setup() {
  Serial.begin(115200);
  pinMode(buttonPin, INPUT);
  pinMode(speakerPin, OUTPUT);
  samplingPeriod = round(1000000*(1.0/SAMPLING_FREQUENCY)); //Period in microseconds 
}

void loop() {
  potentiometerValue = analogRead(potentiometerPin);
  // voice frequency adult male 85-155 Hz, adult female 165-255 Hz
  // speaker produce 80-300 Hz sound
  frequency = map(potentiometerValue, 0, 1023,80,300);
  Serial.print(frequency);
  Serial.print(",");

  buttonState = digitalRead(buttonPin);
  if (buttonState == LOW)
  {
    tone(speakerPin, frequency, noteDuration);
  }
  else
  {
    noTone(speakerPin);
  }
  
  flexValue =  analogRead(A2);
  Serial.print(flexValue);
  Serial.print(",");

      /*Sample SAMPLES times*/
    for(int i=0; i<SAMPLES; i++)
    {
        microSeconds = micros();    //Returns the number of microseconds since the Arduino board began running the current script. 
     
        vReal[i] = analogRead(A1); //Reads the value from analog pin 0 (A0), quantize it and save it as a real term.
        vImag[i] = 0; //Makes imaginary term 0 always

        /*remaining wait time between samples if necessary*/
        while(micros() < (microSeconds + samplingPeriod))
        {
          //do nothing
        }
    }
 
    /*Perform FFT on samples*/
    FFT.Windowing(vReal, SAMPLES, FFT_WIN_TYP_HAMMING, FFT_FORWARD);
    FFT.Compute(vReal, vImag, SAMPLES, FFT_FORWARD);
    FFT.ComplexToMagnitude(vReal, vImag, SAMPLES);

    /*Find peak frequency and print peak*/
    double peak = FFT.MajorPeak(vReal, SAMPLES, SAMPLING_FREQUENCY);
    if(peak>80 && peak<300){
      Serial.println(peak);     //Print out the most dominant frequency.
    }
    else
    {
      Serial.println(0);
      }
  
}
