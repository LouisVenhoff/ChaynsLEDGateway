#ifndef MQTT_H
#define MQTT_H

#include <iostream>
#include <mqtt/async_client.h>

using namespace std;
//using namespace mqtt;

extern const string SERVER_ADDRESS;
extern const string CLIENT_ID;

int connectToBroker(mqtt::async_client& mqtt_client);

int subscribeTopic(mqtt::async_client& mqtt_client);

void sendMessage();

#endif