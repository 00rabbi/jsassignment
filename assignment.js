

// task 1. Converter Kilometer to meter
function kilometerToMeter(num) {
    if (num>=0) {
        var result= num*1000;   
        
    }
     
    else{
         result= console.log("Plese input positive number.");
    }
     return result;
}


// task 2.budgetCalculator for watch, phone, laptop 

function budgetCalculator(watchnum, phonenum, laptopnum) {
    if (watchnum>=0 && phonenum>=0 && laptopnum>=0) {
        var watchTotalPrice = watchnum*50;
        var phoneTotalPrice = phonenum*100;
        var laptopTotalPrice = laptopnum*500;
        var result = watchTotalPrice+phoneTotalPrice+laptopTotalPrice;
    }
    else{
        result =console.log("Plese input valid information");
    }
    return result;
}


// task 3. hotelCost with offer

function hotelCost (numberOfDays){

    if (numberOfDays>=0) {
        if (numberOfDays>20) {
            var lastFewDays = numberOfDays - 20;
            var firstTenDaysCost = 100*10;
            var secondTenDaysCost = 80*10;
            var lastFewDaysCost =  lastFewDays * 50;
            var result = firstTenDaysCost + secondTenDaysCost + lastFewDaysCost;
        } 
        else if (numberOfDays>10 && numberOfDays<=20) {
            var secondFewdays = numberOfDays - 10;
            var firstTenDaysCost = 100* 10;
            var secondFewdaysCost = 80 * secondFewdays;
            var result = firstTenDaysCost + secondFewdaysCost;
        }
        else{
            var result = 100 * numberOfDays;
        }
    } else {
        var result = "Please input valid informations";
    }
    return result;
}


// task 4. megaFriend : that means longest name among friends name


function megaFriend (friendName){
    var longestName = "";

    friendName.forEach(function(name){
       if(name.length>0){
        if (name.length > longestName.length) {
            longestName = name;
        }
       }else{
           longestName ="Please input valid name";
       }
    })
    return longestName;
}

