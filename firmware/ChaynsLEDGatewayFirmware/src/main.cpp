#include <avr/io.h>
#include <util/delay.h>
#include <HAL/hal.h>

int main()
{
  
    init();

   
    while (1)
    {
        switchInternalLED(true);
        _delay_ms(1000);
        
        switchInternalLED(false);
        _delay_ms(1000);


        uint8_t deviceAddress = readDeviceAddress();

        for(int i = 0; i < deviceAddress; i++){
          switchInternalLED(true);
          _delay_ms(200);
          switchInternalLED(false);
          _delay_ms(200);
        }
    }
}