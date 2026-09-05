#ifndef SERIAL_H
#define SERIAL_H

#include <iostream>
#include <fcntl.h>
#include <unistd.h>
#include <termios.h>
#include <cstring>
#include <cstdint>
#include <stdio.h>
#include <vector>

int beginSerial(int* serial);

int sendSerial(int fd, const std::vector<uint8_t>& message);


#endif