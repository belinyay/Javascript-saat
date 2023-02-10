function time(){
    let date = new Date();
    let hour = ("0"+ date.getHours()).slice(-2);
    let minute = ("0"+ date.getMinutes()).slice(-2);
    let second =("0"+  date.getSeconds()).slice(-2);
    let dates= ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = dates[date.getDay()];
    let today = document.querySelector("#myClock")
    today.innerHTML=`${hour}:${minute}:${second} ${day} `
    setTimeout(time,1000)
    }
checkInput();
time()



function checkInput () {
    let inputData = prompt('Adınız Nedir?')
    
    if(inputData == "" || !isNaN(inputData) || inputData.length < 3)
    {
        alert("Lütfen isminizi doğru girdiğinizden emin olun!");
        checkInput();
    } else {
        console.log(inputData)
        inputData = inputData[0].toUpperCase()+inputData.substring(1)
        let nameHolder = document.querySelector("#myName")
        nameHolder.innerHTML= ` ${inputData} `
    }

}