#include <string>
#include <unordered_set>
#include <iostream>
#include <algorithm>
#include <inc.h>
using namespace std;

class Solution
{
public:
    bool isAnagram(string s, string t)
    {
        if (s.size() != t.size())
            return false;

        std::sort(s.begin(), s.end());
        std::sort(t.begin(), t.end());

        return s == t;
    }

    void insertionSort(string &s)
    {
        for (size_t i = 1; i < s.size(); ++i)
        {
            auto saved = s[i];
            int j = i - 1;
            while (j >= 0 && s[j] > saved)
            {
                s[j + 1] = s[j];
                j--;
            }
            s[j + 1] = saved;
        }
    }
};

int main()
{
    print_test_msg();
    Solution s;
    string a = "hello";
    string b = "llohe";
    cout << s.isAnagram(a, b) << endl;

    return 0;
}