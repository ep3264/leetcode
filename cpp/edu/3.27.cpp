#include <iostream>

constexpr int txt_size()
{
    return 10;
}

int main()
{
    constexpr unsigned buf_size = 1024;
    int ia[buf_size];
    int ia2[4 * 7 - 14];
    int ia3[txt_size()];
    char st[12] = "fundamental";

    std::cout << st << std::endl;
}