#include <iostream>
using namespace std;

int main()
{
    int i = 42;
    int &r1 = i;       // r1 bound to i
    const int &r2 = i; // r2 also bound to i; but cannot be used to change i
    // r1 = 0;            // r1 is not const; i is now 0
    i++;
    cout << r2 << endl;
    cout << r1 << endl;

    int null = 0, *p = 0;
}