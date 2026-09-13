#include <avr/io.h>
#include <util/delay.h>

int main()
{
    // PB1 als Ausgang
    DDRB |= (1 << PB1);

    while (1)
    {
        PORTB |= (1 << PB1);
        _delay_ms(10);

        PORTB &= ~(1 << PB1);
        _delay_ms(10);
    }
}