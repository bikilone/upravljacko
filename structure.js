var obj = {
    prviDeo: {
        uprRacImenadzment: uprRacImenadzment,
        uprRAcUNovomPoslOkruzenju: uprRAcUNovomPoslOkruzenju
    },
    drugiDeo: {
        finIzvestavanje: finIzvestavanje,
        racioAnalizaUvod: racioAnalizaUvod,
        racioAnalizaLikvidnosti: racioAnalizaLikvidnosti,
        racioAnalizaObrta: racioAnalizaObrta,
        racioAnalizaProfitabilnosti: racioAnalizaProfitabilnosti,
        analizaNovcanihTokova: analizaNovcanihTokova,
        racioAnalizaProfitabilnostiIzPerspektiveInvestitora: racioAnalizaProfitabilnostiIzPerspektiveInvestitora
    },
    racunovodstvoOdlucivanja: { 
        racunovodstvoOdlucivanja: racunovodstvoOdlucivanja 
    },
    budzetiranjeIKontrola: {
        budzetiranjeIKontrola: budzetiranjeIKontrola 
    },
    segmentnoIzvestavanjaIAnalizaProfitabilnosti: { 
        segmentnoIzvestavanjeIAnalizaProfitabilnosti: segmentnoIzvestavanjeIAnalizaProfitabilnosti 
    }
}

questions = fixingSpaces(obj.drugiDeo.racioAnalizaLikvidnosti);

var sum = 0;
for (x in obj) {
    for (y in obj[x]) {
        sum += obj[x][y].length;
        console.log(`${y} is long ${obj[x][y].length}`)
    }
}

console.log(`Num of all questions is ${sum}`)

questions.forEach(function (el, ind) {
    el.push(ind + 1);
});

function fixingSpaces(arr) {
    var finalArr = arr;
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i][1].split(" ");
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[j] == "\n") {
                newArr[j] = "<br> <br>";
            } else if (newArr[j] == "\t") {
                newArr[j] = "&nbsp &nbsp";
            } else if (newArr[j] === "info") {
                newArr[j] = "informacije";
            } else if (newArr[j] == "upr") {
                newArr[j] = "upravljacko";
            } else if (newArr[j] == "rac") newArr[j] = "racunovodstvo";
        }
        finalArr[i][1] = newArr.join(" ");
    }
    return finalArr;
}
