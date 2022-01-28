# Bidirectional Serial Communication Test between Raspberry Pi and Arduino

This is a test to check the serial communication between Raspberry Pi can Arduino.

## Arduino Code
Here we check if the Arduino has received data with Serial.available(). This will give you the number of bytes already arrived and stored in the receive buffer.

If some data has arrived, we use Serial.readStringUntil() with a newline character ‘\n’ to get the next line. This is similar to the readline() function. All the bytes received until ‘\n’ are automatically converted and added in an Arduino String object.

Then, we just print back the data we received, with an additional piece of text.

## Raspberry Pi Python Code

Use the pySerial function write() to send data to the Arduino. Here you can see that I’ve added a ‘b’ before the string to send. This will encode the string to bytes, because you can only send bytes through Serial. Any data which is not a byte or byte array must be converted before being sent. If you just try to send the string like that, you’ll get this error ” TypeError: unicode strings are not supported, please encode to bytes: ‘Hello from Raspberry Pi!’ ”

Also, we add a newline character ‘\n’ because that’s what the Arduino is expected to end its reading with Serial.readStringUntil(‘\n’).

Then, we do the same thing as we did before: we read a line, decode it to string, and remove any trailing character. We’re not using the ser.in_waiting here, because for this specific application we know that the Arduino will send back some data just after it has received the string. Also, we have a 1 second timeout to avoid being stuck on this line.

Finally, we print the received string and wait for 1 second with time.sleep() before sending the next string over Serial.

## Testing bidirectional Serial communication

On your Raspberry Pi, make your Python file executable and launch it.

```bash
$ chmod +x bidirectional_serial_communication.py 
$ ./bidirectional_serial_communication.py 
You sent me: Hello from Raspberry Pi!
You sent me: Hello from Raspberry Pi!
You sent me: Hello from Raspberry Pi!
```