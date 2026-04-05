#include <vector>
#include <algorithm>
#include <iterator>
#include <iostream>

int main()
{
    std::vector<int> v = {1, 4, 5};
    std::vector<int> src = {2, 3};

    std::copy(src.begin(), src.end(),
              std::inserter(v, v.begin() + 1));

    for (int x : v)
        std::cout << x << " ";

    std::cout << std::endl;

    std::vector<int> v2 = {1, 5};

    auto it = std::inserter(v2, v2.begin() + 1);

    for (int x : {2, 3, 4})
    {
        *it = x; // calls v.insert(...)
    }

    for (int n : v2)
        std::cout << n << " ";
}