#include "protocolParser.h"

int send(vector<uint8_t> word){
    for(int i = 0; i <= 6; i++){
        std::cout << std::bitset<8>(word[i]) << " ";

        if(i == 6){
            std::cout << std::endl;
        }
    }
}

vector<uint8_t> generateProtocolBytes(cmd command){
    vector<uint8_t> word;

    word.push_back(command.address);
    word.push_back(command.enabled);
    word.push_back(command.colorR);
    word.push_back(command.colorG);
    word.push_back(command.colorB);
    word.push_back(command.brightness);

    uint8_t crc = calculateCRC8(&word[0], 6);

    word.push_back(crc);

    return word;
}


