#include <future>
#include <thread>
#include <iostream>

using namespace std;

int compute()
{
    cout << "compute" << endl;
    std::this_thread::sleep_for(std::chrono::seconds(2));
    cout << "finish" << endl;
    return 10;
}

int main()
{
    auto f = std::async(std::launch::async, compute);
    auto f2 = std::async(std::launch::async, compute);

    std::cout << "Working...\n";

    int result = f.get();
    int result2 = f2.get();

    cout << "end main" << endl;
    return 0;
}
