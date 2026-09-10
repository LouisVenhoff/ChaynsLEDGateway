#include "protocolParser.h"

vector<uint8_t> generateProtocolBytes(cmd command){
    vector<uint8_t> word;

    word.push_back(command.address);
    word.push_back(command.enabled);
    word.push_back(command.colorR);
    word.push_back(command.colorG);
    word.push_back(command.colorB);
    word.push_back(command.brightness);
    word.push_back(command.commandType);

    uint8_t crc = calculateCRC8(&word[0], 7);

    word.push_back(crc);

    return word;
}


