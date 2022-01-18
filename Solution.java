
public class Solution {

    public int maxDistToClosest(int[] seats) {

        int left = 0;
        int right = 0;
        int maxDistance = 0;
        int size = seats.length;

        while (right < size && seats[right] != 1) {
            right++;
        }
        maxDistance = right - left;
        left = right;

        for (int i = right; i < size; i++) {
            if (seats[i] == 1) {
                maxDistance = Math.max(maxDistance, (i - left) / 2);
                left = i;
            }
        }
        return seats[size - 1] == 0 ? Math.max(maxDistance, (size - 1 - left)) : maxDistance;
    }
}
