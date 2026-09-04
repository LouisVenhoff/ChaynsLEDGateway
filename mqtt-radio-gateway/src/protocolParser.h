#ifndef PROTOCOLPARSER_H
#define PROTOCOLPARSER_H

#include "mqtt.h"
#include "crc8.h"
#include <stdio.h>
#include <nlohmann/json.hpp>

int generateProtocolBytes(cmd command);

#endif