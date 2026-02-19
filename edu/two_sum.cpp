#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;
class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        vector<int> result;
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); i++)
        {
            int key = target - nums[i];
            if (m.find(key) != m.end())
            {
                return {m[key], i};
            }

            if (m.find(nums[i]) == m.end())
            {
                m[nums[i]] = i;
            }
        }
        return result;
    }
};

int main()
{
    vector<int> v = {4, 5, 6};
    int target = 10;
    Solution s;
    vector<int> result = s.twoSum(v, target);
    cout << result[0] << " " << result[1] << endl;
}