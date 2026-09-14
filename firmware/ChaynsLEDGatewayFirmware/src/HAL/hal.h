#ifndef HAL_H
#define HAL_H

#include <avr/io.h>

#define INT_LED PB1

int init();

uint8_t readDeviceAddress();

int switchInternalLED(bool state);

#endif