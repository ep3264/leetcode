#include <iostream>
using namespace std;

int main()
{

    int ia[3][4] = {{0}, {4}, {8}};
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cout << ia[i][j] << " ";
        }
        cout << endl;
    }
}