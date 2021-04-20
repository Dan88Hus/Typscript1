-----primitive types: 
  Boolean
  Number
  String
  null 
  undefined 

-----NaN  is kind of 0/0 

-----Infinity  is kind of 1/0 

-----unary operators are operators in one side like counter++ , 2sides are kinf of counter + 3;

-----undefined means NOTHING OVER THERE such as favSong[110] , favSong = werewfd iken 

-----thing.method() , ex: string.upperCase()

-----thing.method(arg1, arg2, ...) thing.indexOf("ball") gibi "superhero".slice(0,5) gibi 
  "baseball".replace("ba","hent") // hentsball

-----string template literals , we use back tick `${}` this will be turned to string 

-----NULL absance of any valaue

-----TERANRY operator condition ? expireTrue : expireFALSE 

-----REF , primitive type variable larda linked degiller ama arrayda ref ler linked , both pointing same referance 
    objects lerde linked 
    arrayler de const kullanilmasinin nedeni bu; pointer oldugu icin ref degeri degismez ama icerigi degisebilir. 
      primitive variable lerde const degismez 

-----OBJECTS {key:value} oldugu icin gruplama yapilabilinir 
  object python da dictionary deniyor 
  const kullaniliyor genellikle REF ten dolayi 
  data order icin ARRAY kullaniyoruz, OBJECT degil 
  ARRAY ve OBJECT lerde REF olarak atama varsa karsilastirma yapilabilinir ama REF atamassi yoksa yani baska variale a assign edilmemisse karsilastirma yapilamaz

-----FOR  arraylerde index bazli calisirken , objeclerde key:value oldugundan hangisini iterate edecegini bilmediginden
  Object.keys(movieReviews) veya Object.value(what variable we want to iterate) diyerek arraya ceviririz values veya keys leri 

-----FOR .... in objectlerde iterate edilebilinir , objectlerde key:value olarak deger verirken arraylerde index olarak veriyor 

-----FUNCTIONS are objects .  
  Higher Order Functions ; functions in an array is HOF for example
  Function i function icerisinde cagirmak ta HOF dir 

-----MAP is mututate the array but foreach does not, map stores in a new array 

----- REDUCE is resulting in a single value by [1,2,3,4].reduce((accumulator,currentValue) => {
  return accumulator+currentValue;
  })// 1 +2 = 3 
    // 3+3 = 6
    // 6+4 = 10
  factoriel mantigi gibi dusunebiliriz , 1. arg isimleri degisebilir , mantik hep birinci ile ikinci degerin islem yapilmasina dayaniyor, 1.arg>2. arg gibi
  return den onceki if sartina bagli 
  .reduce((a,b)=> { ..... }, 1000) isleme hep 1000 den baslar, argument belirtmeyince 0 dan baslar veya buraya function belirtebiliriz 
  initial value dur dependency. argument

-----SPREAD , 1st case
   mesela 4 elementli bir arrayi, herhangi bir functionin argumenti olarak 4 elemanli arrayi cagirirsak, tek elman olarak alacak ama ... spread kullanirsak 4 element function a dagilacak 
  string i de eger spread olarak function da cagirirsak , dagitacak stringi ,(array elemeti haline getirecek  ...spread)
  .split metofu gibi 

  2nd case 
    ARRAY leri birlestirmede kullanibilinir, concat gibi 

  3rd case 
    OBJECT lerde kullanimi yine baska obji kopyalamada kullanilir , mesela 2 object tede ayni property vrsa ayni olan key ler birbirinin uzerine overwrite yapar 
    order does matter to kopy because of overwrite of same property 

-----REST , like opposite of spread...it collects values 
  bir kac variable i array haline cevirir 

-----THIS keyword makes Scope global, it also depends what it refers m yasadigi bolgeyi temsil eder 
  this in refer ettigi variable i baska function da kullanabilmemizi saglar 
  



