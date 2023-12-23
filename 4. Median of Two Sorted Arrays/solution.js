/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var mergeSort = function(nums1, nums2) {
    let pos1 = 0;
    let pos2 = 0;
    for (let i = 0; i < nums2.length; i++) {        
        pos2 = i;
        while (nums2[i] >= nums1[pos1] && pos1 < nums1.length){
            pos1++;
        }
        if(pos1 < nums1.length){
            while (nums2[i+1] <= nums1[pos1] && i < nums2.length){
                i++;
            }
            nums1 = nums1.slice(0, pos1).concat(nums2.slice(pos2, i+1), nums1.slice(pos1));
        } else {
            nums1 = nums1.concat(nums2.slice(pos2));
            break;
        }
    }
    return nums1;
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = mergeSort(nums1, nums2);
    var l = nums1.length;
    var h = Math.round(l/2) -1;
    if (l%2){
        return nums1[h];
    } else {
        return (nums1[h] + nums1[h+1])/2;
    }
}

var runTestCase = function() {
    console.log(findMedianSortedArrays([1,3], [2])); //2  
    console.log(findMedianSortedArrays([1,2], [3,4])); //2.5
}