#include <avr/io.h>
#include <util/delay.h>

int main()
{
    // PB5 als Ausgang
    DDRB |= (1 << DDB5);

    while (1)
    {
        // PB5 HIGH
        PORTB |= (1 << PORTB5);
        _delay_ms(500);

        // PB5 LOW
        PORTB &= ~(1 << PORTB5);
        _delay_ms(500);
    }
}