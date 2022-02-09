// 我要按下"立即訂購"要看到顧客輸入的三個資料
// start of 數量增減按鈕功能
function handlePlus_one() {
    var num = parseInt($('#quantity_one').text()) + 1;
    $('#quantity_one').text(num);
    // sumValue = (parseInt($('#quantity_one').text()) * 200);
    // document.getElementById("").innerHTML = "小計:NT$" + sumValue;
    // return num;
}
function handlePlus_three() {
    var num = parseInt($('#quantity_three').text()) + 1;
    $('#quantity_three').text(num);
}
function handleMinus_one() {
    var num = parseInt($('#quantity_one').text()) - 1;
    if (num < 1) {
        $('#quantity_one').text(0);
        // console.log(parseInt($('#quantity_one').text()) * 200);
        // return 1;
        // console.log(1);
    }
    else {
        $('#quantity_one').text(num);
        // console.log(parseInt($('#quantity_one').text()) * 200);
        // return num;
        // console.log(num);
    }
}
function handleMinus_three() {
    var num = parseInt($('#quantity_three').text()) - 1;
    if (num < 1) {
        $('#quantity_three').text(0);
    }
    else {
        $('#quantity_three').text(num);
    }
}
// var temp = $('#quantity').text();
// console.log(temp);
// end of 數量增減按鈕功能

// function count(a, b) {
//     return a * b;
// }

// 數量
function quantity_1() {
    // var total = parseInt($('#quantity_one').text()) * 200;
    quantityValue = (parseInt($('#quantity_one').text()));//這裡需要多理解
    document.getElementById("bear").innerHTML = quantityValue;

}
function quantity_3() {
    // var total = parseInt($('#quantity_one').text()) * 200;
    quantityValue = (parseInt($('#quantity_three').text()));//這裡需要多理解
    document.getElementById("cat").innerHTML = quantityValue;

}
// 計算金額函數
function sum_1() {
    // var total = parseInt($('#quantity_one').text()) * 200;
    sumValue = (parseInt($('#quantity_one').text()) * 220);//這裡需要多理解
    document.getElementById("apple").innerHTML = sumValue;

}
function sum_3() {
    // var total = parseInt($('#quantity_one').text()) * 200;
    sumValue = (parseInt($('#quantity_three').text()) * 220);//這裡需要多理解
    document.getElementById("dog").innerHTML = sumValue;

}
function small_total() {
    // var x = parseInt($('#apple').text());
    // var y = parseInt($('#dog').text());
    smallValue = parseInt($('#apple').text()) + parseInt($('#dog').text());
    document.getElementById("small_total").innerHTML = "NT$" + smallValue;
}

// 計算優惠折扣
function get_total() {
    // var x = parseInt($('#apple').text());
    // var y = parseInt($('#dog').text());
    smallValue = parseInt($('#apple').text()) + parseInt($('#dog').text());
    document.getElementById("final_money").innerHTML = "NT$" + smallValue;
}

// function cusAction() {
//     var x;
//     document.getElementById('cusName').innerHTML = x

// }

const cusAction = () => { //這是啥箭頭函式?這個函式好像要做很多事
    // let inputValue = document.getElementById("cusName").value;
    // document.getElementById("valueInput").innerHTML = inputValue;
    // // let inputValue = document.getElementById("cusPhone").value;
    // // document.getElementById("valueInput").innerHTML = inputValue;
    // // let inputValue = document.getElementById("cusEmail").value;
    // // document.getElementById("valueInput").innerHTML = inputValue;
    // let cars = []
    // document.getElementById("valueInput").innerHTML = cars;

    let formElement = document.getElementById("form");
    let name = formElement[0].value;
    let phone = formElement[1].value;
    let email = formElement[2].value;
    inputValue = ("姓名: " + name + "<hr>連絡電話: " + phone + "<hr>電子郵件: " + email);
    document.getElementById("valueInput").innerHTML = inputValue;
    // let day = formElement[3].value;
    // alert("姓名: " + name + "\n聯絡電話: " + phone + "\n電子郵件: " + email);
    quantity_1();//p id="bear"
    sum_1();//p id="apple"
    quantity_3();//p id="bear"
    sum_3();//p id="apple"
    move();
    small_total();
    get_total();
}

function move() {
    var elmnt = document.getElementById("cus_data");
    elmnt.scrollIntoView();
}

function move_back() {
    var elmnt = document.getElementById("choose_product");
    elmnt.scrollIntoView();
}

$("#finishButton").click(function () {
    $("#loginModal").modal({ backdrop: "static" });
})

$("#closeButton").click(function () {
    $("#loginModal").modal("hide");
})
// function finish() {
//     alert('感謝您的訂購');
// }
// $(document).ready(function () {
//     $("#show").click(function () {
//         $("p").show();
//     });
// });

//     <div>
//     <h4>訂購人資料</h4>
//     <P>姓名:陳宣穎</P>
//     <!-- id="cusName" -->
//     <P>聯絡電話:陳宣穎</P>
//     <!-- id="cusPhone" -->
//     <P>電子郵件:陳宣穎</P>
//     <!-- id="cusEmail" -->
// </div>
// const cusTest = () => {
//     var x = getElementById("quantity").innerHTML;
//     $('#quantity').text(x);
// }

// const cusTest = () => {
//     console.log(num);
// }







// var x;
// document.getElementById('cusName').innerHTML = x
// console.log('cusName');
$("#cusAction").click(function () {
    $("#second_page").addClass("d-block");
});