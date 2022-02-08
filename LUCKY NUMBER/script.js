const dob=document.getElementById("date_of_birth");
const luckyNumber=document.getElementById("lucky_number");
const checkNumberButton=document.getElementById("check-number");
let outputBox=document.getElementById("outputbox");

// cosole.log(dob.replaceAll('-',''));



function checkBirthdyisLucky()


{   //for date of birth calculation
    const dobv=dob.value;
    const sum= calculateSum(dobv);
    // console.log(sum);

    // luckt number value
    const luckyNumberv=luckyNumber.value
    // console.log(luckyNumberv)
if(luckyNumberv&&dob){
//compare dob addiion $ lucky number
compareResult(sum,luckyNumberv)

}else{
outputBox.innerText ="enter both the numbers"
};


}

function compareResult(sum,luckyNumberv){

    console.log(sum,luckyNumberv)
  
    if(sum%luckyNumberv==0){
        outputBox.innerText = "your birthday is lucky"
    
    }
    else{
        outputBox.innerText ="oopssss!!! your birthday is not lucky"
    }
};

function calculateSum(dobv){

     dobv=dobv.replaceAll("-","");
// return dobv;
let sum=0;
for(i=0;i<8;i++)
{

sum=sum + Number(dobv.charAt(i));

}
 return sum;

   
 }   

   

checkNumberButton.addEventListener('click',checkBirthdyisLucky)
