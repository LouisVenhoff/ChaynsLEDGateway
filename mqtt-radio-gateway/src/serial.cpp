#include "serial.h"

using namespace std;

int beginSerial(int* serial){

    *serial = open("/dev/cu.debug-console", O_RDWR | O_NOCTTY);

    if(*serial == -1){
        std::cout << "Serial interface not found!" << std::endl;
        return 1;
    }

    struct termios tty{};
    if(tcgetattr(*serial, &tty) != 0){
        std::cout << "Error while loading serial settings" << std::endl;
        close(*serial);
        return 1;
    }

    cfsetispeed(&tty, B9600);
    cfsetospeed(&tty, B9600);

    tty.c_cflag &= ~PARENB;
    tty.c_cflag &= ~CSTOPB;
    tty.c_cflag &= ~CSIZE;
    tty.c_cflag |= CS8;

    tty.c_cflag &= ~CRTSCTS;

    tty.c_cflag |= CREAD | CLOCAL;
    tty.c_iflag &= ~(IXON | IXOFF | IXANY);

    tty.c_lflag &= ~(ICANON | ECHO | ECHOE | ISIG);
    tty.c_oflag &= ~OPOST;

    if(tcsetattr(*serial, TCSANOW, &tty) != 0) {
        std::cout << "Error while applying settings" << std::endl;
        close(*serial);
        return 1;
    }

    std::cout << "Setup Serial successfull" << std::endl;
    return 0;
}

int sendSerial(int fd, const vector<uint8_t>& message){

    ssize_t bytes = write(fd, message.data(), message.size());

    std::cout << bytes << "Bytes gesendet" << std::endl;

    return 0;
};