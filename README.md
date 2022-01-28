# Melodic

TODO: ADD PICTURE

## 0. About

This repo contains the code and the instructions for Imagine Cup project Melodic submission.

## 1. Hardware

## 1.1 Hardware List

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

TODO: ADD PICTURE

## 1.3 Case Design

TODO: ADD PICTURE

There are two versions of the laser cut svg file in "case design" folder. The debug version is designed for debug purpose with a lot of free space inside the case and easy access to all the ports for both boards. The compact version is designed for final product with a compact design.

# 2. Environment Setup

## 2.1 Raspberry Pi

We will be running face mesh extraction on the raspberry pi. Currently, we are using mediapipe and open-cv for this purpose. Therefore, we need to install mediapipe and open-cv on the raspberry pi. However, until there is correct compatibility of OPEN-CV with the new Raspberry Pi ‘Bullseye’ OS, I highly recommend at this stage flashing and using the previous Raspberry Pi ‘Buster’ OS onto your Micro-SD.

