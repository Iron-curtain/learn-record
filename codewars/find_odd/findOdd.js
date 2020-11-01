function findOdd(A) {
    //happy coding!
    let count = []
    for(let i = 0; i < A.length; i++){
        if(count[A[i]]){
            count[A[i]] = 0
        }
        else{
            count[A[i]] = 1
        }
    }
    
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));