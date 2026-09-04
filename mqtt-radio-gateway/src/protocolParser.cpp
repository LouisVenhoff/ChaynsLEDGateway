#include "protocolParser.h"

int send(vector<uint8_t> word){
    for(int i = 0; i <= 6; i++){
        std::cout << std::bitset<8>(word[i]) << " ";

        if(i == 5){
            std::cout << std::endl;
        }
    }
}

int generateProtocolBytes(cmd command){
    vector<uint8_t> word;

    word[0] = command.address;
    word[1] = command.enabled;
    word[2] = command.colorR;
    word[3] = command.colorG;
    word[4] = command.colorB;
    word[5] = command.brightness;

    uint8_t crc = calculateCRC8(&word[0], 6);

    word[6] = crc;

    send(word);
    return 1;
}


