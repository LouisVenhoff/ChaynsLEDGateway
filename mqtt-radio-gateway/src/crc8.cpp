#include "crc8.h"

uint8_t calculateCRC8(const uint8_t* data, size_t length){

    uint8_t crc = 0x00;


    for(size_t i = 0; i < length; i++){

        crc ^= data[i];

        for(int i = 0; i < 8; i++){
            if(crc & 0x80){
                crc = (crc << 1) ^ 0x07;
            }
            else{
                crc <<= 1;
            }
        }

    }

    return crc;

}