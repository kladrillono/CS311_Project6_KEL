function showAssetsList(){
    let x = document.getElementById("assetsInputList");
    x.style.display = "block";

    hideButton("addAssetsBtn");
}

function showPropEquipList(){
    let x = document.getElementById("propEquipInputList");
    x.style.display = "block";

    hideButton("addpropEquipBtn")
}

function showIntangiblesList(){
    let x = document.getElementById("intangiblesInputList");
    x.style.display = "block";

    hideButton("addIntangiblesBtn");
}

function showCurrentLiabInputList(){
    let x = document.getElementById("currentLiabInputList");
    x.style.display = "block";

    hideButton("addCurrentLiabBtn");
}

function showLongTermLiabInputList(){
    let x = document.getElementById("longTermLiabInputList");
    x.style.display = "block";

    hideButton("addLongTermLiabBtn");
}

function hideButton(id){
    let x = document.getElementById(id);
    x.style.display = "none";
}

function calculateTotals(){
    let cash = document.getElementById("cashInput").value;
    let inventory = document.getElementById("inventoryInput").value;
    let supplies = document.getElementById("suppliesInput").value;
    let tempInvestments = document.getElementById("tempInvestmentsInput").value;

    let resultCurrentAssets = (+cash + +inventory + +supplies + +tempInvestments);

    document.getElementById("totalCurrentAssets").innerHTML = "Total Current Assets: $" + resultCurrentAssets.toFixed(2);

    let land = document.getElementById("landInput").value;
    let building = document.getElementById("buildingInput").value;
    let equipment = document.getElementById("equipmentInput").value;
    let tempPropInvestments = document.getElementById("tempPropInvestmentsInput").value;

    let resultPropEquip = (+land + +building + +equipment + +tempPropInvestments);

    document.getElementById("totalPropEquip").innerHTML = "Total Investment Property and Equipment: $" + resultPropEquip.toFixed(2);

    let tradeNames = document.getElementById("tradeNamesInput").value;
    let goodwill = document.getElementById("goodwillInput").value;

    let resultIntangibles = (+tradeNames + +goodwill);

    document.getElementById("totalIntangibles").innerHTML = "Total Intangibles: $" + resultIntangibles.toFixed(2);

    let accounts = document.getElementById("accountsInput").value;
    let notes = document.getElementById("notesInput").value;
    let interest = document.getElementById("interestInput").value;
    let wages = document.getElementById("wagesInput").value;
    let expenses = document.getElementById("expensesInput").value;

    let resultLiabilities = (+accounts + +notes + +interest + +wages + +expenses);

    document.getElementById("totalCurrentLiab").innerHTML = "Total Current Liabilities: $" + resultLiabilities.toFixed(2);

    let longtermNotes = document.getElementById("longTermNotesInput").value;
    let bonds = document.getElementById("bondsInput").value;

    let resultLongTerm = (+longtermNotes + +bonds);

    document.getElementById("totalLongTermLiab").innerHTML = "Total Long-Term Liabilities: $" + resultLongTerm.toFixed(2);

    let sumAssets = (+resultCurrentAssets + +resultPropEquip + +resultIntangibles);
    document.getElementById("totalAssets").innerHTML = "Total Assets: $" + sumAssets.toFixed(2);

    let sumLiabilities = (+resultLiabilities + +resultLongTerm);
    document.getElementById("totalLiab").innerHTML = "Total Liabilities: $" + sumLiabilities.toFixed(2);

    let resultPosition = (+sumAssets - +sumLiabilities);
    document.getElementById("position").innerHTML = "Position: $" + resultPosition.toFixed(2);
}
