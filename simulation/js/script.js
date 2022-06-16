let FV, i, n, PV, totalVariable;
var xValues = [];
var yValues = [];
var chart;

function Nav(startDiv, endDiv) {
    document.getElementById("screen" + startDiv).style.display = "none";
    document.getElementById("screen" + endDiv).style.display = "block";
    if (startDiv == 2 && endDiv == 3)
        document.getElementById("calc3-screen").style.display = "none";
    if (startDiv == 3 && endDiv == 2)
        document.getElementById("calc3-screen").style.display = "block";
}
const setDiv = function (ele) {

    for (let i = 1; i < 3; i++) {
        var v = document.getElementById("calc" + i.toString() + "-screen");
        if (v.style.display == "block") {
            v.style.display = "none";
            document.getElementById("calc" + i.toString()).style.backgroundColor = "#373A40";
            console.log("test")
            break;
        }
    }
    var v = document.getElementById(ele.id + "-screen");
    v.style.display = "block";
    ele.style.backgroundColor = "#5C6E91";
    // }


}
function activateTab(num) {
    var v = document.getElementById("calc" + num.toString());
    v.style.pointerEvents = "auto";
    v.style.backgroundColor = "#373A40";
    v.style.border = "0.2rem solid #667fcc";
}

function deactivateTab(num) {
    var v = document.getElementById("calc" + num.toString());
    v.style.pointerEvents = "none";
    v.style.backgroundColor = "#222831";
    v.style.border = "none";
}

function calcPV() {
    deactivateTab(1);
    //deactivateTab(3);
    FV = document.getElementById("FV").value;
    i = document.getElementById("i").value;
    n = document.getElementById("n").value;
    t = document.getElementById("t").value;
    document.getElementById("FV").value = '';
    document.getElementById("i").value = '';
    document.getElementById("n").value = '';
    document.getElementById("t").value = '';
    PV = Number(FV) / (1 + (Number(i) / Number(n))) ^ (Number(n) * Number(t));
    console.log(PV);
    if (PV > 0) {
        document.getElementById("FVresult").innerHTML = "<p class='msg' style=\"color:green;\">" + PV + "</p>";
        document.getElementById("resFixed").innerText = totalVariable;

        if (totalVariable > 0) {
            // document.getElementById("next-2").style.visibility = "visible";
            activateTab(2);
        }
    }
    else if (PV == 0) {
        document.getElementById("FVresult").innerHTML = "<p class='msg' style=\"color:red;\">Future value cannot be zero. Please input again.</p>";
    }
    else {
        document.getElementById("FVresult").innerHTML = "<p class='msg'style=\"color:red;\">Future value cannot be negative. Please input again.</p>";
    }
    activateTab(1);
    activateTab(2);

}

function calcFV() {
    deactivateTab(2);
    //deactivateTab(3);
    PV = document.getElementById("PV").value;
    i = document.getElementById("i1").value;
    n = document.getElementById("n1").value;
    t = document.getElementById("t1").value;
    document.getElementById("PV").value = null;
    document.getElementById("i1").value = null;
    document.getElementById("n1").value = null;
    document.getElementById("t1").value = null;
    // FV = parseInt(PV)*((1+(parseInt(i)/parseInt(n)))^(parseInt(n)*parseInt(t)));
    FV = Number(PV) / (1 + (Number(i) / Number(n))) ^ (Number(n) * Number(t));
    // console.log(Number(PV));
    // console.log(Number(i));
    // console.log(Number(n));
    // console.log(Number(t));
    // // console.log(PV);
    // // console.log(FV);
    // console.log(1 + (Number(i) / Number(n)));
    // console.log((Number(n) * Number(t)));


    if (FV > 0) {
        document.getElementById("PVresult").innerHTML = "<p class='msg' style=\"color:green;\">" + FV + "</p>";
        document.getElementById("resVariable").innerText = totalVariable;
        if (totalVariable > 0) {
            // document.getElementById("next-2").style.visibility = "visible";
            activateTab(1);
        }
    }
    else if (FV == 0) {
        document.getElementById("PVresult").innerHTML = "<p class='msg' style=\"color:red;\">Present Value cannot be zero. Please input again.</p>";
    }
    else {
        document.getElementById("PVresult").innerHTML = "<p class='msg' style=\"color:red;\">Present Value cannot be negative. Please input again.</p>";
    }
    activateTab(1);
    activateTab(2);
}

