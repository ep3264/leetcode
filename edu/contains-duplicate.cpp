#include <vector>
#include <unordered_set>
#include <iostream>
using namespace std;

class Solution
{
public:
    bool containsDuplicate(std::vector<int> &nums)
    {
        std::unordered_set<int> set;
        for (auto it = nums.cbegin(); it != nums.cend(); ++it)
        {
            if (set.find(*it) != set.end())
            {
                return true;
            }
            set.insert(*it);
        }

        return false;
    }
};

int main()
{
    vector<int> v = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
    Solution s;
    cout << s.containsDuplicate(v) << endl;
}