## Стартиране на приложението

Става чрез командата "ng s" и след това зареждане на адреса - "http://localhost:4200". Приложението е изградено чрез "Angular" и "TypeScript" , то съдържа главна страница - "Home-page" , страница за създаване на артикул (където изпращаме към базата данни следните данни - "name" , "type" , "date" , "imageUrl" , "calories" , "description" като за всяко поле има валидация) ,страница със всички създадени "артикули" , "Login" страница (на всяко поле има валидация и error handling) , "Register" , страница с артикулите , които логнатия потребител е създал, детайли  за всеки артикул, "Edit" и "Delete" бутони, при "Edit" можем да редактираме дадения артикул , а при "Delete" го изтриваме след потвърждение. Authentication - потребителите , които не са собствеици на даден артикул не могат да го редактират или изтриват, само логнатите потребители виждат страницата за създаване на артикул. При сбъркан url адрес приложението пренасочва към "error-page".

## Стартиране на локалния сървър

Чрез командата "npm start" , сървъра е изграден чрез "express" , сървъра приема 2 модела - "user" и "item" , при "user" се запазват данни като имейл, парола и userID, като за хеширане на паролата се използва "bcrypt". При "item" модела се запазват следните данни - "name" , "type" , "date" , "imageUrl" , "calories" , "description" като за всяко поле има валидация.

## База данни

Използвана е база данни - MongoDB ,която е пряко свързана със локалния сървър.
