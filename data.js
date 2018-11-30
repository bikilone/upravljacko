var questions = [
    ["Koliko ima planeta u solarnom sistemu?", "9"],
    ["Kada ti je rodjendan", "U oktobru"],
    ["Koliko ti je ostalo ispita?", "dva"],
    ["Koliko ima planeta u solarnom sistemu?", "9"],
    ["Kada ti je rodjendan", "U oktobru"],
    ["Koliko ti je ostalo ispita?", "dva"],
    ["Nema vise pitanja", "to je to!"]
]

var racunovodstvoOdlucivanja = [
    ["Pretpostavke cvp analize?", "kratak rok, podela troskova na fiksne i varijbilne, funkcije ukupnih prihoda i troskova su linearne, obim aktivnosti predstavlja jedini izazivac prihoda i troskova, prodajne cene, prosecni varijabilni troskovi i ukupni fiksni troskovi su konstanti u okviru relevantnog raspona, nepromenljivost strukture asortimana, ne uzima se u obzir vremenska vrednost novca, obim proizvodnje i obim prodaje su jednaki"],
    ["Sta je relevantni raspon?", "predstavlja raspon aktivnosti u okviru koga preduzece najcesce obavlja svoju aktivnost u odredjenom kratkorocnom vremenskom periodu"],
    ["Varijable koje uticu na prelomnu tacku?", "ukupni fiksni troskovi, prosecni varijabilni troskovi, prodajna cena"], 
    ["Formula, model kontribuciong dobitka", "ukupni fiksni / prosecan kontribucioni rezultat"],
    ["Formula, stopa kontribucionog rezultata", "ukupan kontribucioni rezultat / prihod od prodaje"],
    ["Formula, stopa varijabilnih troskova", "ukupni varijabilni troskovi / prihod od prodaje"],
    ["Formula, ukljucivanje ciljnog dobitka u cvp analizu", "ukupni fiksni + ciljni poslovni dobitak / prosecan kontribucioni rezultat"], 
    ["Uticaj poreza na prelomnu tacku", "ne utice na prelomnu tacku, on utice samo na neto dobitak posle poreza a ne na poslovni rezultat"],
    ["Razlog uvodjenja poreza na dobitak i neto dobitka u cvp analizu?", "preduzeca nastoje da motivisu menadzere da analiziraju odluke koje uticu ne samo na poslovni dobitak, vec i na poslovni dobitak posle poreza"],
    ["Formula, ciljni poslovni dobitak", "cilj neto dobitka / 1 - stopa poreza"],
    ["Sta je marza sigurnosti", "pokazuje za koliko se maksimalno moze smanjiti obim aktivnost preduzeca, a da ono ne zavrsi u zoni poslovnog gubitka"],
    ["Predsnosti CVP grafikona?", "1. Pruza znatno detaljnije informacije od PV grafikona, 2. Pruza informacije o ukupnim prihodima, ukupnim troskovima, 3. omogucava posredan uvid u poslovni dobitak koji proistice kao posledica odredjenog obima aktivnosti, 4. ukoliko sadrzi i liniju ukupnih varijbalinih troskova omogucava i posredan uvid u ukupan kontribucioni rezultat"],
    ["Nedostaci CVP grafikona?", "1. ne pruza inforamcije o tome koliki je nivo prodaje potreban za dostizanje odgovarajceg poslovnog dobitka, 2. ne pruza neposredne inforamcije o tome koliki poslovni dobitak proistice kao posledica odredjenog obima aktivnosti."],
    ["Zasto na CVP grafikonu nema poreza na dobitak?", "zato sto cvp analiza ispituje odnose izmedju poslovnih prihoda, rashoda i poslovnog rezultata"],
    ["Prednosti PV grafikona?", "pruza direktne informacije o obimu prodaje koji je potreban za ostvarenje odredjenog poslovnog rezultata, 2. pruza direktne informacije o poslovnom rezultatu koji proistice kao posledica odredjenog obima prodaje"], 
    ["Nedostaci PV grafikona?", "nije toliko detaljan kao CVP, ne pruza info o ukupnim prihodima i troskovima, ni kontribucioni rezultat"], 
    ["U multriprozivodnim preduzecima kako se obracunava prelomna tacka", "samo na nivou celog preduzeca ili organizacionih delova (ne i na nivou pojedinacnih prozivoda), jer je tesko izvrsiti precizunu alokaciju fiksnih troskova po pojedinim proizvodima"], 
    ["Sta je racunovodstvo odlucivanja?", "usmereno je na donosenje odluka o izboru izmedju razlicitih alternativa koje treba da omoguce resavanje odredjenog problema, dosnosenje odluka treba da bude zasnovano na analizi relevantnih fakotra, a ne svih"],
    ["Faktori koje treba uzeti u obzir prilikom resavanja odredjenog problema", "1. kvantitativni - finansijski(inkrementalni) prihodi i troskovi, i buduci prilivi i odlivi gotovine, - ne finansijski - npr broj zaposlenih, 2. kvalitativni - npr moral zaposlenih, ne smeju se smatrati manje vrednim"],
    ["Sta su relevantnih troskova i od cega zavisi podela", "su  troskovi koji se ukljucuju u analizu raspolozivih alternativa za resenje odredjenog problema, podela na relevantne i irelevantne zavisi od 1. prirode poslovne odluke i 2.vremnskog roka - u dugom roku svi troskovi su relevantni"],
    ["Karakteristike relevantnih troskova", "1. izazvani odredjenom odlukoma, zavise od izbora odredjene alternative, 2. to su buduci troskovi, istrojiski troskovi se mogu iskljuciti iz analize, 3. to su troskovi izmedju razlicitih alternativa, ne smeju biti zajednicki za vise alternativa koje su predmet analize"],
    ["Karakteristike irelevantnih troskova", "1. ne zavise od odluke o izboru izmedju razlictiih alternativa, 2. to su istorijski (sunk) troskovi, 3. ponavljaju se u indenticnom iznosu u svim analiziranim alternativama"], 
    ["Odnos izmedju podele troskova na relevantne i irelevantne i podele troskova na varijabilne i fiksne", "irelevantni troskovi su siri pojam od fiksnih i mogu ukljucivati i varijabilne troskove ukoliko bi se oni u istom iznosu pojavljivali u razmatranim alternativama, relevantni troskovi se ne mogu poistovetiti sa varijabilnim troskovima i mogu ukljucivati i odredjene fiksne troskove, tzv dodatne fiksne troskove, a oni se mogu pojaviti u 1. u vidu diskrecionih (kontrolabilnih) fiksnih, popust troskova promocije ili troskova I&R i 2. u vidu drugih dodatnih fiksnih troskova, poput troskova zakupa proizvodnog prostora, skladisnog prostora itd."],
    ["Definisanje oportunitetnih troskova", "predstavljaju propustenu korist zbog nepreduzimanja sledece najbolje alternative, mogu predstavljati propusteni prihod, propusteni kontribucioni rezultat, propusteni profit ili propusteni ustedjeni trosak"],
    ["Uslovi u kojima se oportunitetni troskovi smatraju relevantnim", "1. kada su kapaciteti preduzeca ograniceni, 2. kada kapaciteti preduzeca imaju alternativnu upotrebu"],
    ["Odnos izmedju relevntnih i inkrementalnih troskova", "relevantni troskovi pored inkrementalnih u odredjenim situacijama mogu ukljucivati i oportunitetne"],
    ["Vrste odluka i odgovarajuci kriterijumi za njihovo donosenje", "1.odluke koje pogadjaju troskove - 1)proizvoditi ili kupovati 2) promena metoda proizvodnje 3) odluka o zatvaranju fabrike - kriterijum je najnizi diferencijalni trosak; 2. odluke koje pogadjaju troskove i prihode - 1) prodati ili preradjivati dalje 2) uvodjenje novog proizvoda 3) prihvatanje dodatne porudzbine - kriterijum je najveci diferencijalni dobitak; 3. odluke koje pogadjaju troskove, prihode i angazovani kapital - kriterijum je najveci diferencijalni prinos"],
    [""]
]
questions.forEach(function (el, ind) {
    el.push(ind)
})

