// // console.log("ok")


function BinaryReqursive(arr,val,start=0,end=arr.length-1){
    if(start>end){
        return -1
    }
    let mid_Val=Math.floor((start+end)/2);
    if(arr[mid_Val]==val){
        return mid_Val
    }
    if(val<arr[mid_Val]){
        return BinaryReqursive(arr,val,start,end=mid_Val-1)
        
    }else{
        return BinaryReqursive(arr,val,start=mid_Val+1,end)

    }

}

let arr=[1,2,3,4,5,6]
let val=5
let result=BinaryReqursive(arr,val,start=0,end=arr.length-1)
if (result !== -1) {
    console.log(`Element ${val} found at index ${result}`);
} else {
    console.log(`Element ${val} not found in the array`);
}



