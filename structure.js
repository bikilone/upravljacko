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
    },
    treciDeo: {
        racunovodstvoTroskova: racunovodstvoTroskova
    },
    transferneCene: {
        transferneCene: transferneCene
    }
}


questions = fixingSpaces(obj.drugiDeo.racioAnalizaProfitabilnostiIzPerspektiveInvestitora);

var sum = 0;
for (x in obj) {
    for (y in obj[x]) {
        sum += obj[x][y].length;
        console.log(`${y} is long ${obj[x][y].length}`)
    }
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

console.log(`Num of all questions is ${sum}`)

questions.forEach(function (el, ind) {
    el.push(ind + 1);
});

// questions = shuffle(questions)

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
