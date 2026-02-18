#include <list>
#include <algorithm>
#include <iterator>
#include <iostream>

int main()
{
    std::list<int> src = {1, 2, 3};
    std::list<int> dest;

    std::copy(src.begin(), src.end(),
              std::front_inserter(dest));

    for (int x : dest)
        std::cout << x << " ";
}
