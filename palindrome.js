    function Palindrome(str){
//1st trick
        let left = 0;
        let right = str.length -1 ;
    while(left < right){
        if(str[left] !== str[right] ){
            return false
        }
        left++;
        right--;
    }
    return true

    //2nd trick
    // const orig = str;
    // let reverse = 0;
    // while(0 < str){
    //     let lastDigit = str%10
    //     reverse = reverse * 10 + lastDigit;
    //     str=Math.floor(str/10)
    // }
    // return orig === reverse
    }
    const str = String(-121)
    console.log(Palindrome(-121));