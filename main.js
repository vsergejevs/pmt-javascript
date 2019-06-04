
function pmtCalc() {
    
    let pv;
    let decimalCheck;
    let negativeCheck;
    let rateElement;
    let rateIndex;
    let rate;
    let nperElement;
    let nperIndex;
    let nper;
    let pmt;
    
    pv = document.getElementById("presentValue").value;
    decimalCheck = (pv - Math.floor(pv)) !== 0;
    negativeCheck = Math.sign(Number(pv));

    if (pv.trim() == '' || isNaN(pv) || decimalCheck || negativeCheck == -1) {
        alert("Lūdzu ievadiet aizņēmuma summas laukā vēlamo aizņēmumu rakstot tikai veselus pozitīvus skaitļus");
        document.getElementById("presentValue").value = '';
        document.getElementById("mnthlPay").innerHTML = '';
    } 
    else {
        rateElement = document.getElementById("intrst");
        rateIndex = rateElement.selectedIndex;
        rate = Number(rateElement.options[rateIndex].value);
        rate = rate / 12;
    
        nperElement = document.getElementById("prd");
        nperIndex = nperElement.selectedIndex;
        nper = Number(nperElement.options[nperIndex].value);
        
        pmt = pv * rate/(1 - (Math.pow(1 + rate, -nper)));
        pmt = Number(pmt);
        pmt = pmt.toFixed(2);
    
        document.getElementById("mnthlPay").innerHTML = pmt + " €";
    }
}


