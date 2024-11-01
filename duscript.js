//Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. 
//Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.

// Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky. 
//Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky. Pomocí metody slice vyřízněte ze jména i příjmení příslušné části. 
//Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.


const jmeno= String(prompt("Zadej krestni jmeno")).trim();
const prijmeni= String(prompt("Zadej prijmeni")).trim();

const emailPrefix = prijmeni.slice(0, 5).toLowerCase() + jmeno.slice(0, 3).toLowerCase();
const email = `${emailPrefix}@fit.cvut.cz`;

// Zobrazení výsledku na stránce jako celá e-mailová adresa
document.body.innerHTML = '<p>Váš e-mail je: ' + email + '</p>';
console.log(email);