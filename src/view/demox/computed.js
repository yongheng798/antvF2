// JS常用的算法
// 冒泡算法
var example = [8, 95, 34, 21, 53, 12];

function sortarr(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
sortarr(example);
console.log(example);
//当i=0的时候，里面的循环完整执行，从j=0执行到j=6,这也就是第一遍排序，结果是将最大的数排到了最后，这一遍循环结束后的结果应该是[8,34,21,53,12,95]
//当i=1的时候，里面的循环再次完整执行，由于最大的数已经在最后了，没有必要去比较数组的最后两项，这也是j<arr.length-1-i的巧妙之处，结果是[8,34,21,12,53,95]
//说到这里，规律就清楚了，每次将剩下数组里面最大的一个数排到最后面，当第一个循环执行到最后的时候，也就是i=6,此时，j=0,只需要比较数组的第一和第二项，比较完毕，返回。

// 2、快速排序法
//快速排序
//1.这种方法比较简单，2019/8/5新增

var example=[1,4,3,8,9,6,2]
		
function quickSort(arr){
	if(arr.length<=1){
		return arr;
	}
	var left=[],right=[],current=arr.splice(0,1);
	for(let i=0;i<arr.length;i++){
		if(arr[i]<current){
			left.push(arr[i])
		}else{
			right.push(arr[i])
		}
	}
	return quickSort(left).concat(current,quickSort(right));
}
console.log(quickSort(example)); //[1, 2, 3, 4, 6, 8, 9]


//2.
function quickSort(arr,l,r){
    if(l < r){
        var i = l, j = r, x = arr[i];
        while(i<j){
            while(i<j && arr[j]>x)
                j--;
            
            if(i<j)
                //这里用i++，被换过来的必然比x小，赋值后直接让i自加，不用再比较，可以提高效率
                arr[i++] = arr[j];
            
            while(i<j && arr[i]<x)
                i++;
            
            if(i<j)
                //这里用j--，被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
                arr[j--] = arr[i];
        }
        arr[i] = x;
        
        quickSort(arr, l, i-1);
        quickSort(arr, i+1, r);
    }
}


// 3、二路归并

function marge(left,right){
	var result=[];
	il=0;
	ir=0;
	while(il<left.length && ir<right.length){
		if(left[il]<right[ir]){
			result.push(left[il++]);
		}else{
			result.push(right[ir++]);
		}
	}
	while(left[il]){
		result.push(left[il++]);
	}
	while(right[ir]){
		result.push(right[ir++]);
	}
	return result;
}
