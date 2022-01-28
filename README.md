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


## 1.3 Raspberry Pi and Arduino for Serial communication.

There are 2 ways to connect your Raspberry Pi and Arduino for Serial communication.

### Serial via USB.

On the Raspberry Pi side, a simple USB connector is all you need. You can choose any of the 4 USB ports available on the board.

For Arduino, you will use the USB port that you use to upload code from your computer (with the Arduino IDE) to your board. Here the USB connector will depend on which version you have. For boards like Arduino Uno and Mega, the connector will be different from Arduino Nano, and from Arduino Zero.

For this project I’ve used an Arduino Uno board.
![serial communication](./4.%20Doc/Assets/raspberrypi_arduino_uno_serial_usb.png)

### Serial via GPIOs

To make a Serial connection you can also use plain wires between the Raspberry Pi GPIOs and the Arduino pins.

![serial gpio](./4.%20Doc/Assets/raspberrypi_arduino_serial_gpio.png)

Depending on your Arduino board you might need to use a voltage level-shifter. The Raspberry Pi is operating at 3.3V. For Arduino boards like Due, 101, it will be fine because they also use 3.3V.

But, for many Arduino, such as Uno, Mega, Leonardo, Nano, and many more, the board is operating at 5V. Thus, you need a 3.3V/5V level-shifter to protect the Raspberry Pi when connecting RX and TX (more info on Raspberry Pi pins and Arduino Uno pins).

## 1.4 Case Design

There are two versions of the laser cut svg file in **3. Case Design** folder. The debug version is designed for debug purpose with a lot of free space inside the case and easy access to all the ports for both boards. The compact version is designed for final product with a compact design.

![case cut file](./3.%20Case%20Design/case-laser-cut-debug.svg)

# 2. Environment Setup

## 2.1 Flashing 'Buster' OS onto a Raspberry Pi

We will be running face mesh extraction on the raspberry pi. Currently, we are using mediapipe and open-cv for this purpose. We need to install mediapipe and open-cv on the raspberry pi. 

Until there is correct compatibility of opencv with the new Raspberry Pi ‘Bullseye’ OS, I highly recommend at this stage flashing and using the previous Raspberry Pi ‘Buster’ OS onto your Micro-SD. This is a [guide](https://core-electronics.com.au/tutorials/flash-buster-os-pi.html) for how to flash the old 'Buster' Raspberry Pi OS to a Micro-SD.

## 2.2 Setting Up Raspberry PI with High Quality Camera 

Connect the Ribbon Cable to the CSI (Camera Serial Interface) connector on the Raspberry Pi board and to the Camera module. You can see all these assembly steps in the images below. To connect the ribbon cables, lift up the edges of the CSI connector gently, slip the ribbon cable in till it bottoms out, then push down the edges of the CSI connector.

![ribbon_cable_mounting](./4.%20Doc/Assets/ribbon_cable_mounting.jpeg)

With the Micro-SD Card flashed you can install it into your Raspberry Pi. Now connect all the peripheries and plug in the USB C to turn on the Raspberry Pi. Then open up the Raspberry Pi Configuration menu (found using the top left menu and scrolling over preferences) and enable the Camera found under the Interfaces tab. After enabling reset the Raspberry Pi to lock in the changes. See the image below for the setting location.

![camera configuration](./4.%20Doc/Assets/camera_configuration.png)

Use following command in the pi terminal to check whether the camera is running properly. This command will capture a image using the camera and save it as 'image.jpg' at root folder.

```bash
raspistill -o image.jpg
```

## 2.3 Setting up opencv on Raspberry Pi 'Buster' OS
Open up the Terminal by pressing the Terminal Button found on the top left of the button. Copy and paste each command into your Pi’s terminal, press Enter, and allow it to finish before moving onto the next command. If ever prompted, “Do you want to continue? (y/n)” press Y and then the Enter key to continue the process.

```bash
sudo apt-get update && sudo apt-get upgrade
```

We must now expand the swapfile before running the next set of commands. To do this type into terminal this line.

```bash
sudo nano /etc/dphys-swapfile
```            

The change the number on `CONF_SWAPSIZE = 100` to `CONF_SWAPSIZE=2048`. Having done this press Ctrl-X, Y, and then Enter Key to save these changes. This change is only temporary and you should change it back after completing this. To have these changes affect anything we must restart the swapfile by entering the following command to the terminal. Then we will resume Terminal Commands as normal.

```bash
sudo apt-get install build-essential cmake pkg-config
sudo apt-get install libjpeg-dev libtiff5-dev libjasper-dev libpng12-dev
sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
sudo apt-get install libxvidcore-dev libx264-dev
sudo apt-get install libgtk2.0-dev libgtk-3-dev
sudo apt-get install libatlas-base-dev gfortran
sudo pip3 install numpy
```

```bash
wget -O opencv.zip https://github.com/opencv/opencv/archive/4.4.0.zip
wget -O opencv_contrib.zip https://github.com/opencv/opencv_contrib/archive/4.4.0.zip
unzip opencv.zip
unzip opencv_contrib.zip
cd ~/opencv-4.4.0/
mkdir build
cd build
cmake -D CMAKE_BUILD_TYPE=RELEASE \
                                -D CMAKE_INSTALL_PREFIX=/usr/local \
                                -D INSTALL_PYTHON_EXAMPLES=ON \
                                -D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib-4.4.0/modules \
                                -D BUILD_EXAMPLES=ON ..

make -j $(nproc)
```

This ` make ` Command will take over an hour to install and there will be no indication of how much longer it will take. It may also freeze the monitor display. Be ultra patient and it will work. Once complete you are most of the way done. If it fails at any point and you receive a message like ` make: *** [Makefile:163: all] Error 2 ` just re-type and enter the above line ` make -j $(nproc) `. Do not fear it will remember all the work it has already done and continue from where it left off. Once complete we will resume terminal commands.

```bash
sudo make install && sudo ldconfig
sudo reboot
```

## 2.4 Necessary Packages or Library

Open the terminal on the raspberry pi or using SSH to connect to the raspberry pi. Enter the following command to install necessary package.

```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install python-opencv python3-opencv opencv-data
sudo pip3 install mediapipe-rpi3
sudo pip3 install mediapipe-rpi4
sudo pip3 install gtts
sudo apt install mpg321
```

## 2.5 Raspberry pi and Arduino Serial Communication

The hardware setup for serial communication between raspberry pi and arduino is introduce in 1.3. Next is software setup.

### Detect the Arduino board

When connecting the Arduino with a USB cable, you should see it appear as `/dev/ttyACM0`, or `/dev/ttyUSB0` (sometimes the number can be different, for example `/dev/ttyACM1`).

Simply run `ls /dev/tty*` and you should see it. At this point if you’re not sure which device is the Arduino board, simply disconnect the board (remove the USB cable), and run `ls /dev/tty*` again. This way you will easily spot the serial device name of your Arduino.

### Hardware permissions for Serial

Also, you may want to add your user to the dialout group, to avoid errors such as: `serial.serialutil.SerialException: [Errno 13] could not open port /dev/ttyACM0: [Errno 13] Permission denied: ‘/dev/ttyACM0’`.

```bash
sudo adduser your_username dialout
```

This will make sure you have access to Serial devices (/dev/ttyACMx, /dev/ttyUSBx, …).

After you’ve added yourself to the dialout group, you need to reboot your Pi (or at least logout/login) to apply the change

### Install Python Serial library on Raspberry Pi

You need to install a library to be able to use the Serial interface with Python.

For this tutorial we’ll use the pySerial library (documentation for Python 3). To install it:

```bash
python3 -m pip install pyserial
```

This Python library is well-known and used in a lot of applications.

When installing, if you get an error such as `/usr/bin/python3: No module named pip`, then you need to install pip first with `sudo apt install python3-pip`.

Follow the step in **3. Software/serial communication test** to test the bidirectional_serial_communication
