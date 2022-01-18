
#include <vector>
using namespace std;

class Solution {
public:

    int maxDistToClosest(vector<int>& seats) {

        int left = 0;
        int right = 0;
        int maxDistance = 0;
        int size = seats.size();

        while (right < size && seats[right] != 1) {
            right++;
        }
        maxDistance = right - left;
        left = right;

        for (int i = right; i < size; i++) {
            if (seats[i] == 1) {
                maxDistance = max(maxDistance, (i - left) / 2);
                left = i;
            }
        }
        return seats[size - 1] == 0 ? max(maxDistance, (size - 1 - left)) : maxDistance;
    }
};
