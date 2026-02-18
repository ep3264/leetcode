#include <vector>
#include <string>
#include <iterator>
#include <iostream>

int main()
{
    std::vector<std::string> src = {"A", "B", "C"};
    std::vector<std::string> dest;

    for (auto it = std::make_move_iterator(src.begin());
         it != std::make_move_iterator(src.end());
         ++it)
    {
        dest.push_back(*it); // moved
    }

    std::cout << "dest: ";
    for (auto &s : dest)
        std::cout << s << " ";

    std::cout << "\nsrc after move: ";
    for (auto &s : src)
        std::cout << "[" << s << "] ";
}
