
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {

    let left = 0;
    let right = 0;
    let maxDistance = 0;
    let size = seats.length;

    while (right < size && seats[right] !== 1) {
        right++;
    }
    maxDistance = right - left;
    left = right;

    for (let i = right; i < size; i++) {
        if (seats[i] === 1) {
            maxDistance = Math.max(maxDistance, Math.floor((i - left) / 2));
            left = i;
        }
    }
    return seats[size - 1] === 0 ? Math.max(maxDistance, (size - 1 - left)) : maxDistance;
};
