#include <iostream>
using namespace std;

void f(int l)
{
    cout << "int" << endl;
}
void f(double d)
{
    cout << "double" << endl;
}
int main()
{
    f('a');
}
