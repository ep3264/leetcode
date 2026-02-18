#include <string>
#include <unordered_set>
#include <iostream>
using namespace std;

class Solution
{
public:
    bool isAnagram(string s, string t)
    {
        if (s.size() != t.size())
            return false;

        insertionSort(s);
        insertionSort(t);

        return s == t;
    }

    void insertionSort(string &s)
    {
        for (size_t i = 1; i < s.size(); ++i)
        {
            int j = i - 1;
            while (j >= 0 && s[j] > s[j + 1])
            {
                auto temp = s[j];
                s[j] = s[j + 1];
                s[j + 1] = temp;
                j--;
            }
        }
    }
};

int main()
{
    Solution s;
    string a = "hello";
    string b = "llohe";
    cout << s.isAnagram(a, b) << endl;

    return 0;
}