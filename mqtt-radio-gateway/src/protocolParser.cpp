#include "protocolParser.h"

int send(array<uint8_t, 6> word){
    for(int i = 0; i <= 5; i++){
        std::cout << std::bitset<8>(word[i]) << " ";

        if(i == 5){
            std::cout << std::endl;
        }
    }
}

int generateProtocolBytes(cmd command){
    array<uint8_t, 6> word;

    word[0] = command.address;
    word[1] = command.enabled;
    word[2] = command.colorR;
    word[3] = command.colorG;
    word[4] = command.colorB;
    word[5] = command.brightness;

    send(word);
    return 1;
}

uint8_t crc8(const uint8_t*)


