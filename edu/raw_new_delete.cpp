#include <iostream>
#include <new> // std::nothrow
using namespace std;

struct S
{
    int x;
    S(int v) : x(v) { cout << "S(" << x << ") constructed\n"; }
    ~S() { cout << "S(" << x << ") destroyed\n"; }
};

int main()
{
    S s(33);
    // 1) normal new (throws bad_alloc on failure)
    S *p = new S(42);
    cout << p->x << "\n";
    delete p; // must match single-object new
    // 2) new with nothrow (returns nullptr on failure)
    S *q = new (nothrow) S(7);
    if (!q)
    {
        cerr << "alloc failed\n";
    }
    delete q;
    // 3) arrays
    S *arr = new S[3]{S(1), S(2), S(3)}; // constructs 3 elements
    delete[] arr;                        // must use delete[]
    cout << "before function end" << endl;
}