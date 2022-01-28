# Melodic

![system setup](./4.%20Doc/Assets/system-setup.jpg)

## 0. About

An integrated system providing speech therapy service via software and hardware at low cost.

This repo contains the code and the instructions for Imagine Cup project Melodic submission.

The image below shows the simplified data flow or the pipeline between our hardware and software

![pipeline](./4.%20Doc/Assets/pipeline.png)

## 1. Hardware

## 1.1 Hardware Requirements

The hardware listed below is the minimum requirement to run our system. The details and purchase links of the sensors and boards will be covered in the **Hardware** folder

- 1x Raspberry Pi 4 Model B
- 1x Arduino Uno
- 1x High Quality Pi Camera
- 1x Sound Sensor
- 1x Speaker
- 1x Flex resistor (flex sensor)
- 1x Push Button (for debug)
- 1x Potentiometer (for debug)
- 1x breadboard
- Multiple jump wires
- Laser Cut Case

## 1.2 Circuit Diagram

This is basic circuit setup of our sensors and boards. The sound sensor, flex sensor, speaker, push button, and potentiometer are connected to Arduino, and the HQ pi camera is connected to raspberry pi 

![circuit diagram](./4.%20Doc/Assets/circuit-diagram-sketch.svg)


## 1.3 Case Design

There are two versions of the laser cut svg file in **3. Case Design** folder. The debug version is designed for debug purpose with a lot of free space inside the case and easy access to all the ports for both boards. The compact version is designed for final product with a compact design.

![case cut file](./3.%20Case%20Design/case-laser-cut-debug.svg)

# 2. Environment Setup

## 2.1 Flashing 'Buster' OS onto a Raspberry Pi

We will be running face mesh extraction on the raspberry pi. Currently, we are using mediapipe and open-cv for this purpose. We need to install mediapipe and open-cv on the raspberry pi. 

Until there is correct compatibility of opencv with the new Raspberry Pi ‘Bullseye’ OS, I highly recommend at this stage flashing and using the previous Raspberry Pi ‘Buster’ OS onto your Micro-SD. This is a [guide](https://core-electronics.com.au/tutorials/flash-buster-os-pi.html) for how to flash the old 'Buster' Raspberry Pi OS to a Micro-SD.

## 2.2 Setting Up Raspberry PI with High Quality Camera 



