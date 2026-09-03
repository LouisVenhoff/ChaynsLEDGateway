#ifndef MQTT_H
#define MQTT_H

#include <iostream>
#include <mqtt/async_client.h>
#include <nlohmann/json.hpp>

using namespace std;
//using namespace mqtt;

struct cmd {
    u_int8_t address;
    u_int8_t enabled;
    uint8_t colorR;
    uint8_t colorG;
    uint8_t colorB;
    u_int8_t animation;
    u_int8_t brightness;
};

#include "protocolParser.h"

extern const string SERVER_ADDRESS;
extern const string CLIENT_ID;

int connectToBroker(mqtt::async_client& mqtt_client);

int subscribeTopic(mqtt::async_client& mqtt_client);

void sendMessage();

#endif
