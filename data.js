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
    ["Sta je upravljanje asoritmanom?", "treba da omoguci pronalazenje optimalne kombinacije postojecih proizvoda koje ce obezbediti maksimiziranje dobitka preduzeca"],
    ["Prosecan kontribucioni rezultat vs prosecan poslovni rezultat - koji je bolji kriterijum za upravljanje asortimanom?", "prosecan kontribucioni rezulat, dva razloga - 1. fiksni troskovi nisu relevantni prilikom donosenja odluka o upravljanju asortimanom (1. nisu pogodnjeni odlukom o strukturi asortimana, 2. to su istorijski troskovi 3. isti su u svim alternativama); 2. arbitrarna alokacija fiksnih troskova"],
    ["koji se kriterijum koristi prilikom upravljanja asortimanom sa jednim ogranicavajucim fakotrom?", "kontribucioni rezultat po jedinici ogranicavajuceg faktora"], 
    ["Problem proizvoditi ili kupovati - uslovi u kojima se ovaj problem moze pojaviti", "1.kada preduzece ima slobodne kapacitete, 2. kada preduzece nema slobodne kapacitete"],
    ["Problem proizvoditi ili kupovati - kada preduzece ima slobodne kapacitete", "1. kada kapaciteti imaju alternativnu upotrebu (1. koriscenje slobodnih kapaciteta za internu proizvodnju komponente, 2. kupovina komponente od dobavljaca uz koriscenje slobodnih kapaciteta za povecanje proizvodnje postojecih proizvoda, novih proizvoda, iznamljivane ili cak i njihvou prodaju); 2. kada slobodni kapaciteti nemaju alternativnu upotrebu - (1. koriscenje slobodnog kapaciteta za internu proizvodnju komponente, 2. naabavku komponente  od dobavaljaca - kapaciteti ostaju neiskorisceni)"],
    ["Problem proizvoditi ili kupovati - kada preduzece nema slobodne kapacitete", "1. problem oslobadjanja kapaciteta - (1. interna proizvodnja komponente sto znaci smanjenje obima proizvodnje postojecih proizvdoa, 2. nabavku komponente od dobavljaca); 2. problem zakupa dodatnih kapaciteta - (1. interna proizvodnja odredjene komponente, 2. kupovina komponente od dobavljaca - zakup dodatnih kapaciteta nije potreban); 3. problem izgradnje ili kupovine dodatnih kapaciteta"],
    ["Odnos izmedju inkrementalnih i diferencijalnih troskova", "Inkrementalni troskovi predstavljaju dodatne troskove odredjene alternative i predstavljaju nesto siri koncept od diferencijalnih troskova, diferencijalni troskovi predstavljaju razliku izmedju inkrementalnih troskova razlicitih alternativa; u pitanju su vrlo slicni koncpeti troskova: 1. oba su relevantna za donosenje odluka, 2. oba prestavljaju dodatne troskove"],
    ["Kvalitativni (opisni ili netroskovni) faktori problema proizvoditi ili kupovati", "treba uzeti u obzir i kvalitativne faktore, oni mogu biti u korist proizvdonje ili kupovine"],
    ["Kvalitativni faktori koji idu u prilog alternativne interne proizvodnje", "1. postojanje slobodnih kapaciteta, 2. ocuvanje tajnosti proizvodnog procesa, 3. uspostavljanje direktne kontrole nad kvalitetom i dizajnom proizvoda, 4. slaba ponuda na trzistu, 5. poreske pogodnosti, 6. rizik od preterane zavisnosti od dobavljaca, 7. ocuvanje zaposlenosti radnika"],
    ["Kvalitativni fakotri koji idu u prilog alternative kupovati", "1. nedostatak slobodnih kapaciteta, 2. nedostatak iskustva u proizvodnji potrebnih komponenti, 3. postojanje raznovrsne ponude na trzistu, 4. preduzece zeli da se koncentrise na svoje osnovne kompetencije, 5. preduzece zeli da koristi specijalne usluge dobavaljaca, 6. preduzece zeli da prenese rizik na dobavljace"],
    ["Objasnite u kakvim okolnostima se javlja problem prodati ili preradjivati dalje i zasto je prilikom resavanja ovog problema vazno indentifikovanje tacke razdvajanja proizvoda", "Problem je karakteristican kod preduzeca koja sprovode kuplovani proces, simultanu proizvodnju dva ili vise povezanih proizvoda od jedne sirovine. U takci osamostaljivanja dolazi od nastanka dve grupe razlicitih proizvoda - 1. osnovni glavni proizvod koji se moze i dalje preradjivati i 2. nusproizvod koji se obicno odmah prodaje"],
    ["Problem prodati ili preradjivati dalje - relevantne vrednosti (prihodi i troskovi)", "1. troskovi (1. zajednikci trokvi vezane proizvodnje - nisu relevantni, 2. dodatni troskovi - relevantni jer nastaju posle tacke razdvajanja); 2. prihodi (1. prihodi od prodaje nusproizvoda - nisu relevantni, 2. prihodi od prodaje osnovnog proizvoda(odmah nakon tacke razdvajanja) - relevantni jer su oni oportunitetni troskovi alternative preradjivati dalje i sa dodatnim troskovima prerade predstavljaju ukupne relevantne troskove alternative preradjivati dalje, 3. prihodi od prodaje poptuno novih proizvoda koji su nastali preradom osnovnih proizvoda - relevantni"],
    ["Prihvatanje dodatne poruzdbine - minimalna prodajna cena po kojoj je porudzbina prihvatljiva", "Moze biti ispod prosecnih ukupnih troskova, odnosno ispod proizvodne cene kostanja, minimalna prodajna cena ne sme biti ispod prosecnih varijabilnih troskova ( plus odredjenim dodatnim troskovima po jedinici koji su uslovljeni porudzbinom. Ukupni fiksni troskovi nisu relevantni"],
    ["Opasnost od upotrebe prosecnih troskova prilikom donosenja kraktorocnih odluka", "Koriscenje prosecnih fiksnih za projektovanje ukupnih troskova"]
]

var budzetiranjeIKontrola = [
    ["Razlozi koji su uticali na pojavu racunovodstva odgovornosti", "1. pojava velikih i slozenih preduzeca, 2. proizvodna i geografska diversifikacija koje su uslovile divizionalizaciju preduzeca, 3. potreba za efikasnim upravljanjem portfoliom biznisa, 4. potreba za indentifikovanjem podrucja odgovornosti"],
    ["Ciljevi racunovodstva odgovornosti", "1. utvrdjivanje prihoda, troskova i rezultata organizacionih delova ili tzv centara odgovornosti, 2. pripremanje ex ante i ex post izvestaja po organizacionim delovima preduzeca, 3. poredjenje ostvarenih i planiranih prihoda, troskova i rezultata sa ciljem adekvatne kontrole, 4. interpretiranje pripremljenih informacija u okviru internih izvestaja"],
    ["Elementi racunovodstva odgovornosti", "1. Definisanje odgovornosti na nivou organizacionih delova i pojedinaca, 2. postavljanje ciljeva u procesu budzetiranja, 3. merenje performansi centara odgovornosti i njihovih menadzera, 4. kontrola ostvarenja, 5. racunovodstvo odgovornosti i ponasanje zaposlenih - podsticaji zaposlenih zasnovani na performansama"],
    ["Elementi racunovodstva odgovornosti - definisanje odgovornosti na nivou organizacionih delova i pojedinaca", "1. definisanje org delova u okviru org strukture preduzeca, 2. na menadzere ovih org delova prenose ovlascenja za donosenje odluka i odgovornost za ostvarene rezultate, 3. odgovornost moze biti individualna i timska"],
    ["Elementi racunovodstva odgovornosti - postavljanje ciljeva u procesu budzetiranja", "1. definisanje tzv budzetskih celina koje se moraju poklapati sa tzv racunovodstvenim celinama ali ne i org delovima, 2. budzetiranje se zasniva primeni tzv standardnih troskova, mogu biti staticki, dinamicki (fleksibilni), 3. uspesno budzetiranje zahteva postavljanje realno dostizucih standarda"],
    ["Elementi racunovodstva odgovornosti - merenje ostvarenih performansi centara odgovornosti  i njihovih menadzera", "1. formiranje centara odgovornosti - troskova, diskrecionih rashoda, prihoda, profitni, investicioni, 2. uvazavanje principa kontrolabilnosti - odvajanje troskova koji se nalaze pod uticajem menadzera od onih koji se ne nalaze"],
    ["Elementi racunovodstva odgovornosti - kontrola ostvarenja", "1. poredjenje ostvarenih rezultata sa planiranim velicinama, 2. utrvrdjivanje odstupanja, uzroka odstupanja i odgovornosti za odstupanja, 3. sprovodjenje korektivnih akcija"],
    ["Elementi racuvnovostva odgvornosti - racunovodstvo odgovornosti i ponasanje zaposlenih", "povezivanje planiranih performansi, ostvarenja i podsticaja za zaposlene, podsticaji mogu biti u vidu povecanja plate, bonusa i unapredjenja"],
    ["Sta je budzetiranje", "prevodjenje ciljeva i strategije(deskriptivnih planova) u formalno - kvantitativne, finansijske projekcije koje treba da menadzreima pruze info potrebne prilikom upravljanja"],
    ["Sta obuhvata plansko kontrolni proces", "1. definisanje ciljeva - na dva nivoa (1. korporativni - dugorocni ciljevi, najcesce su kvalitativni, 2. na korporativnom nivou, ali i na nivou divizija, tzv specificni ciljevi, kvantitativni), 2. izbor strategije - nacin za ostvarenje opstih i specificnih ciljeva, 3. prevodjenje ciljeva i strategije u formalno - kvantitativne, finansijske projekcije - budezeti mogu biti ( 1. strategijski - dugorocni, 2. operativni - kratkorocni), 4. merenje performansi, 5. kontrolu performansi"],
    ["Strategijski budzeti", "globalne finansijske projekcije kapitalnih ulaganja, prihoda i rashoda, novcanih tokova i finansijske strukture, 3-5 godina"],
    ["Operativni budzeti", "konkretizacija strategijskih budzeta, predstavljaju formalno - kvantitativne, fin projekcije u vidu rac izvestaja, za period od godinu dana"],
    ["razlike izmedju strategijskih i operativnih budzeta", "nivo slobode prilikom njihovog pripremanja, operativni budzeti su u vecoj meri vec odredjeni strategijskim budzetima"],
    ["povezanost strategijskih i oprerativnih budzeta", "1. strategijski predstavljaju okvir za pripremanje operativnih, 2. operativni predstavljaju konkretizaciju strategijskih"],
    ["Ogranicenje budzeta", "1. potencijali preduzeca, 2. prakticna izvodljivost planova"],
    ["Osnovne karakteristike budzeta", "1. budzeti su formalizovani u vidu rac izvestaja i uvek su fin karaktera, 2. zasnivaju se na unapred definisanim budzetskim celinama, koje se moraju poklapati sa rac centrima odg, 3. pripremaju se za odredjeni buduci vremenski period, 4. kao polazna osnova koriste se potencijali preduzeca, 5. pripremanje budzeta je proces koji zahteva precizno definisanje vremenskog rasporeda obavljanja budzetskih aktivnosti"],
    ["sta je master budzet", "glavni plan u okviru kojeg se vrsi povezivanje, objedinjavanje i uskladjivanje pojedinacnih planova koji omogucavaju njegovo ostvarenje"],
    ["Sta cini master budzet", "1. plan rezultata u formi projektovanog bilansa uspeha, 2. plan finansijske strukture u formi projektovanog bilansa stanja, 3. plan novcanih tokova - u formi projektovanog izvestaja o novacanim tokovima i 4. plan kapitalnih ulaganja, - u master plan se ukljucuje samo onaj deo na koji se master budzet odnosi"],
    ["master budzet vs biznis plan", "biznis plan je siri koncpet od master budzeta, biznis plan pored master budzeta sadrzi i poslvnoe ciljeve, nacin njihvoe relalizacije, analizu okruzenja ...."],
    ["uloga budzeta u planiranju", "omogucava prevodjenje ciljeva i stategije u .., podstice menadzere da unapred prepoznaju probleme"],
    ["uloga budzeta u koordinaciji", "omogucava koordinaciju pojedinacnih aktivnosti.."],
    ["uloga budzta u komuniciranju", "omogucava formalizovano komuniciranje izmedju razlicitih delova preduzeca, i po horizontali i vertikali, .."],
    ["uloga budzta u kontroli", "1. ex post - tokom budzetiranja se postavlajju standadi za kontrolu, 2. ex ante - usmerena na otkrivanje potencijalnih problema pre nego sto se pojave"],
    ["uloga budzeta u alokaciji resursa", "omogucava da se utvrde najprofitabilniji segmenti preduzeca..."],
    ["uloga budzeta u eksternom finansiranju", "na osnovu projekcije novacanih tokova, mogu se utvrditi eventualni nedostaci gotovine kao i eventualni viskovi gotovine"],
    ["uloga budzeta u motivisanju", "kreiraju se podsticaji za menadzere i zaposlene"],
    ["vaznost istorijskih informacija za proces budzetiranja", "1. prilikom kreiranja budzeta polaznu osnovu predstavljaju raspolozivi potencijali preduzeca u vidu proizvodnih kapaciteta, opreme... 2. procesu budzetiranja treba da prethodi adekvatna fin analiza... 3. postoje fiksni troskovi koji su posledica ranijih dugorocnih odluka, 4. projektovanje bilansa nije mogu sporvesti bez postojeceg bilansa stanja"],
    ["vaznost koncepta standardnih troskova u procesu budzetiranja", "u delu koji se odnosi na procenu efekata planiranih poslovnih transakcija, podrska budzetiranju je pre svega zansovana na primeni koncepta standardnih troskova.."],
    ["metodoloska podrska procesu budzetiranja", "1. sistem obracuna po stvarnim troskovima - ne moze se upotrebljavati u budzetskom procesu, 2. sistem obracuna po punim standardnim troskovima - dve prednosti koje su istovremeno i nedostaci sistema obracuna po stand var troskovima - 1. moze se koristiti za zvanicno fin izvestavanje, 2. ne zahteva podelu troskova na var i fiksne; 3. sistem obracuna po standardnim varijabilnim - prednosti - 1. direktna veza izmedju obima proizvodnje, var troskova i kontribuciong rez, 2. omogucava primenu fleksibillnog budzetiranja, 3. omogucava primenu kontribucionog pristupa prilikom sastavljanja bilansa uspeha"],
    ["Pristupi u stvaranju master budzeta", "1. direktivni - top menazdment definise ciljeve i zadatke i zatim ih namece nizim nivoima menazdmenta, cvrsta kontrola i tok informacija od vrha ka dnu, 2. decentralisticki - pripremanje parcijalnih planova po org delovima od strane nizih nivoa menadzmenta, master budzet predstavlja zbir pojedinacnih budzeta, nedostatak usmeravajucih info sa vrha preduzeca, 3. participativni - kombinacija prva dva pristupa, dvosmerno komuniciranje, poprecno uskladjivanje parc budzeta, odobravanje budzeta na visim upravljackim nivoima - koristi se najcesce u divizionalnim preduzecima, ali se moze primenjivati i u funkcionlinm"],
    ["sta je izvestaj o prihvacenoj budzetskoj politici", "sadrzi info koje usmeravaju budzetiranje na nizim nivoima, prestavlja formalni izraz budzetske politike usvojene za odredjeni period"],
    ["Ciljevi izvestaja o prihvacenoj budzetskoj politici", "1. treba da upozna menadzere na nizim nivoima sa ocekivanjima na vrhu preduzeca, 2. da pruzi podrsku procesu budzetiranja od strane centralnog menazdmenta i ukaze na znacaj ovog procesa, zbog cega ovaj izvestaj potpisuje generalni direktor"],
    ["Ciljevi planiranja prodaje", "1. omogucava manju neizvesnot u pogledu buducih prihoda od prodaje, 2. pruza info znacajne za kreiranje drugih parcijalnih planova, 3. ukljucuje procene menadzera u procesu planiranja, 4. predstavlja standard za kontrolu"],
    ["osnovne komponente za pripremanje plana prodaje su", "1. usmeravajuce info sa vrha, 2. istrazivanje trzista, 3. ogranicenja koja proizilaze iz drugih poslovnih funkcija"],
    ["tokovi info prilikom pripremanja plana prodaje", "1. izmedju menadzmenta preduzeca i menadzera iz marketing funkcije, 2. u okviru marketing funkcije, 3. imzedju menadzera iz marketing funkcije i drugih poslovnih funkcija"],
    ["odgovornost za pripremanje i sadrzinu plana prodaje", "u okviru marketing funkcije, ocekivanja od nosilaca su razlicita: 1. ako je u piranju dugorocni plan 2. ili operativni"],
    ["fakotri koji uticu na plan proizvodnje", "1.obim prodaje, 2. raspolozivi kapaciteti, 3. politika zaliha"],
    ["tokovi komunicirajanja prilikom pripremanja plana proizvodnje", "1. izmedju centralnog menadzmenta i menadzera proizvodne funkcije, 2. u okviru proizvodne funkcije, 3. izmedju menadzera proizvodnje i drugih poslovnih funkcija"],
    ["konflikti koji mogu nastati prilikom pripremanja plana proizvodnje", "izmedju menadzera prodaje i proizvodnje, zbog razlicith interesa..."],
    ["uskladjivanje plana proizvodnje i plana prodaje uz pomoc zaliha ucinaka", "planirana proizvodnja = pl prodaja + pl zalihe ucinaka na kraju - zalihe ucinaka na pocetku"],
    ["odgovornost za pripremanje plana proizvodnje", "planska sluzba proizvdonje i menadzeri odgovarajucih centara odgovornosti u okviru proizvodnje, konacnu odgovornost snosi direktor proizvodnje"],
    ["planiranje troskova proizvodnje zahteva podelu troskova na", "1.direktne (1. troskovi direktnog materijala , 2. direktnog rada), 2. indirektne - koji se zatim dele na fiksne i varijabilne"],
    ["odgovornost za pripremanje i sadrzinu plana troskova direktnog materijala", "odgovornost je podeljena na 1. proizvodnju, odgovorni za kolicine i vrste materijala, 2. nabavku - za nabavne cene i kvalitet materijala"],
    ["kljucni informacioni inputi za pripremanje plana troskova direktnog materijala", "1.planirana proizvdonja, 2. planirana potrosnja materijala po jedinici, moze se utvrditi na vise nacina (1. iskustvo, 2. procene strucnjaka, 3. tehonoloskog postpuka sto je i najbolje) 3. ocekivane nabavne cene"],
    ["kljucni informacioni inputi za pripremanje plana troskova direktnog rada", "1. planirani obim proizvodnje, 2. standardno vreme izrade po jedinici proizvoda, 3. planirana cena rada po casu"],
    ["planiranje opstih troskova proizvodnje", "na 2 nacina: 1. polazi se od istorijskih troskova, koji se korigiuju za ocekivane promene u budzetskom periodu, 2. podela opstih troskova na fiksne i varijabilne, uljucujuci i semivarijbaline koji se dele na njihov fiksni i varijabilni deo, varijabilni se vezuju za obim aktivnosti, a fiksni se standardizuju po jedinici u pomoc prakticnog kapaciteta"],
    ["odgovornost za prirpemnja plana opstih troskova proizvodnje", "podeljeno izmedju, 1. menadzera proizvodnje, 2. planske sluzbe koja snosi odogovornost za planiranje opstih troskova"],
    ["odgovornost za sadrzinu i pripremanje plana nabavke", "1. nosioci budzetskog procesa u okviru proizvodnje, 2. nosioci budzetskog procesa u okviru nabavke"],
    ["Kljucni inofrmacioni inputi za pripremanje plana nabavke", "1. planirana proizvodnja, 2. politika zaliha, 3. ocekivane nabavne cene materijala"],
    ["kljucni faktori koji uticu na politiku zaliha materijala", "1. mogucnost sinhronizovanja nabavke potrebnog materijala i potreba proizvdonje, 2. efikasnost nabavke, 3. sladistenje, 4. fin ogranicenja, 5. ostala ogranicenja npr ocekivano povecanje cena materijala na trzistu"],
    ["ukratko opisite plan troskova prodatih proizvoda", "1. kada je obim proizvodnje i prodaje jednak onda su isti, 2. kada obim proizovdnje veci od obima prodaje - krajnje zalihe pored vrednosti pocetnih zaliha ukljucuju jos i troskove proizvodnje nerealizovanih proizvoda koji zavrsavaju na zalihama, troskovi proizvodnje su veci od troskova prodatih proizvoda; 2. obim prodaje veci od obima proizvodnje - deo ili cele pocente zalihe gotovih proizvoda ulaze u sastav troskova prodatih proizvoda, troskovi prodatih proizvoda su veci od troskova proizvdonje"],
    ["Formula planirani troskovi prodatih proizvoda", "standardna varijabilna proizvodna cena kostanja X planirani obim prodaje"],
    ["Sta ukljucuje planiranje neproizvodnih troskova", "1.troskove marketinga, 2. troskove opsteg urpavljanja i administracije"],
    ["sta obuhvataju troskovi marketinga", "tr promocije i tr distribucije"],
    ["metodi projektovanja troskova promocije", "1. metod raspolozivih sredstava za promotivne aktivnosti, 2. metod procenta od prodaje - prethodnom, tekucem ili buducem periodu, 3. metod ugledanja na konkurentska preduzeca, 4. metod cilja i zadatka - najbilji metod"],
    ["struktura troskova marketinga", "1.fiksni troskovi - deo troskova amortizacije, plata administr radnika, 2. diskrecioni tr - posledica tekuci odluka menadzera - tr promotivnih aktivnosti, 3. varijabilni - pre sve tr distribucije, 4. semivarijabilni - "],
    ["planiranje troskova opsteg upravljanja i administracije", "dosta slozeno, najveci deo tr je fiksnog karaktera..."],
    ["Kapitalno budzetiranje zahteva donosenje tri bitne odluke", "1. o izboru investicionih projekata, 2. odlucka o definisanju ukupnih kapitalnih ulaganja i njihvom vremenskom rasporedu, 3. odluka o tome kako finansirati kap ulaganja"],
    ["koji planovi su celoviti", "plan novcanih tokova, planirani bilans stanja i planirani bilans uspeha"],
    ["odogovornost za pripremanje plana novcanih tokova", "sluzba za racunovodstveno planiranje, konacnu odgovornost snosi finansijski direktor"],
    ["vaznost projektovanog izvestaja o novcanim tokovima", "koristi se za procenu likvidnosti preduzeca"],
    ["ciljevi planiranja novcanih tokova", "1. utvrdjivanje verovatne gotovinske pozicije, 2. indentifikovanje eventualnih viskova/manjkova gotovine 3. definisanje potreba za zaduzivanjem, 4. uskladjivanje novcanih tokova sa kretanjem prihoda, rashoda, obrtnog kapitala, investicija i obaveza, 5. stvaranje osnove za kontrolu novcanih tokova"],
    ["metodi za pripremanje projektovanog izvestaja o novcanim tokovima", "1.direktni - detaljniji i bolji za kratkorocno planiranje, 2. indirektni za dugoronocno planiranje"],
    ["pomocni planovi koji prethode izradi projektovanog izvestaja o novcanim tokovima", "1. plan ocekivanih priliva ogotovine, 2. plan ocekivanih odliva gotovine"],
    ["proces pripremanja projektovanog bilansa stanja", "za razliku od ostalih planova koji se zasnivaju na parcijalnim planovima, projektovanje bilansa stanja se zasniva na pocetnom bilansu stanja"],
    ["parcijalni planovi koji su znacajani za projektovanje bilansa stanja", "plan kapitalnih ulaganja, plan naplate potrazivnaja i plan novcanih tokova uticu na promene na imovini, 2. plan isplate obaveza i plan finansiranja uticu na obaveze, 3. projektovani bilans uspeha, planirana upotreba dobitka i emisija akcija uticu na kapital"],
    ["prihvatanje i distribuiranje master budzeta", "proces uskladjivanja povezivanje i objedinjavanja pojedinacnih planova, upoznavanje sa mogucim problemima. Master budzet prihvata generalni direktor nakon cega se on distribuira nizim nivoima. Potpredsednici dobijaju kompletan budzet, a menazderi samo one delove kjoi se na njih i odnose"],
    ["Statitcko vs fleskibilno budzetiranje", "staticko - prevodjenje ciljva i strategije u formalno - kvantitavne projekcije koje se odnose samo za jedan ocekivani obim. stat budzeti predstavljaju dobar standard za kontrolu u stabilnim uslovima. Fleskibilno budzet ... za vise razlicitih nivoa aktivnosti. bolji za dinamicke uslove."],
    ["Pretpostavke na kojima se zasniva fleskibilno budzetiranje", "1. definisanje relevantnog raspona aktivnosti, 2. definisanje nacina ponasanja troskova, 3. izbro vise razlicitih nivoa aktivnosti - bar 3 nivoa, 4. pripremanje fleksibilnog budzeta za izabrane nivoe aktivnosti, 5. prevodjenje planiranih velicina na ostavereni nivo aktivnosti!!!"],
    ["povezanost planiranja i kontrole", "planiranje podrazumeva definisanje ciljeva i nacina njihovog ostvarenja, kontrola treba da omoguci uskladjivanje ostvarenja sa planiranim ciljevima. treba ih sprovoditi zajedno"],
    ["Kontrola zasnovana na statickom vs fleskibilnom budzetu", "moze biti zasnovana na 1.statickim 2. i statickim i fleskibilnim"],
    ["menadzment putem izuzetaka", "definisanje stepena tolerancije u vezi sa odstupanjima koja se odnose na svaku poziciju u budzetu, ako je odstupanje ispod praga tolerancije onda se zanemaruje, ako je vise onda se analizira"],
    ["razlaganje planiranih prodajnih ostvarenja", "1. odstupanje po osnovu cena, 2. odstupanje po osnovu promena u kolicinaama 3. odstuapnje po onsovu promena u asortimanu"],
    ["odvajanje odstupanja po osnovu promene cena i po osnovu promene u kolicinama", "odgovornost se deli, 1. cena - marketing menadzeri, 2. kolicina - menadzeri prodaje"],
    ["odvajanje odstupanja po osnovu promena u kolicinama od ostalih odstupanja", "dva razloga, 1. ostvarna prodaja utice na visinu prihoda..., 2. odgovornost snose menadzeri prodaje"],
    ["obracun odstupanja po osnovu promena u strukturi asortimana od ostalih odstupanja", "u preduzecima koja imaju veci broj proizvoda.."],
    ["merenje efekata odstupanja", "2 nacina, 1. merenje efekata odstupanja u odnosu na prihode, 2. u odnosu na kontribucioni rezultat"],
    ["kako se mogu rasloziti odstupanja stvarnih od planiranih direktnih troskova", "1. po osnovu promene nabavne cene inputa, 2. promene efikasnosti u potrosnji inputa"],
    ["moguci uzroci pozitivnih odstupanja u troskovima dir materijala po osnovu promene nabavnih cena materijala", "1. iznenadni pad cena, 2. kolicinski popusti, 3. jeftiniji mat losijeg kvaliteta, 4. pogresne projekcije cena"],
    ["moguci uzroci negativnih odstupanja u troskovima dir materijala po osnovu promene nabavnih cena materijala", "1. povecanje cena, 2. nepovoljni ugovori, 3. los izbor dobavljaca"],
    ["moguci uzroci odstupanja u troskovima dir rada po osnovu promene cena rada", "1. promena politike plata, 2. pregovori sa sindikatima, "],
    ["moguci uzroci negativnih odstupanja u troskovima dir materijala po osnovu promene efikasnosti u potrosnji inputa", "1. neadekvatno rukovanje materijalom, 2. nabavka materijala loseg kvaliteta, 3.kradja materijala, 4. promena metode proizvodnje"],
    ["moguci uzroci negativnih odstupanja u troskovima dir rada po osnovu promene efikasnosti", "1. neadekvatno obucena radna snaga, 2. los raspored rada po operacijama, 3. neadekvatno odrzavanje masina, 4. pogresne projekcije vremenskih standarda"]
]


questions.forEach(function (el, ind) {
    el.push(ind)
})

