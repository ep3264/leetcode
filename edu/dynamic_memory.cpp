#include <iostream>
using namespace std;

int main()
{
    int *const pi = new int;
    *pi = 100;

    cout << *pi << endl;

    delete pi;

    return 0;
}