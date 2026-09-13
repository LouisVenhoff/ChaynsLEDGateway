#include "hal.h"
#include <avr/io.h>

int init(){
    DDRB |= (1 << INT_LED);

    DDRC &= ~((1 << PC2) | (1 << PC3) | (1 << PC4) | (1 << PC5));

    return 0;
}


uint8_t readDeviceAddress(){
    return ~((PINC >> 2) & 0b00001111);
};

int switchInternalLED(bool state){
    uint8_t mask = 1 << INT_LED;

    if(state){
        PORTB |= mask;
    } else {
        PORTB &= ~mask;
    }

    return 0;
}