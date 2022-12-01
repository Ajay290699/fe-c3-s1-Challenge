//Declare global container constant to represent <div> container
var div1 = document.createElement("div");
div1.style.width = "100px";
// div.setAttribute("class","container-fluid")
var body = document.getElementById("body1");
body.appendChild(div1);
//Fetch data from server using getFruits() method
function getFruits() {
    var promise1 = fetch(" http://localhost:3000/fruits");
    var promise2 = promise1.then(function (result) { return result.json(); });
    promise2.then(function (finalResult) {
        transform(finalResult);
    });
}
//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(fruitData) {
    fruitData.forEach(function (element) {
        var transformedFruit = {
            name: element.name,
            price: element.price,
            image: element.image,
            unit: element.unit
        };
        showFruit(transformedFruit);
    });
}
//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(xyz) {
    var card1 = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", xyz.image);
    img.setAttribute("width", "200px");
    img.setAttribute("height", "200px");
    // let caption = document.createElement("figcaption")
    // let capText = document.createTextNode(xyz.name);
    // caption.appendChild(capText);
    // img.appendChild(caption);
    var caption = document.createElement("h2");
    var capText = document.createTextNode(xyz.name);
    caption.appendChild(capText);
    var price = document.createElement("p");
    var pValue = document.createTextNode("price $" + xyz.price + " per " + xyz.unit);
    price.appendChild(pValue);
    // let unit = document.createElement("p")
    // let unitValue = document.createTextNode("unit "+xyz.unit);
    card1.appendChild(img);
    card1.appendChild(caption);
    card1.appendChild(price);
    // card1.appendChild(unit);
    card1.style.margin = "20px";
    card1.style.backgroundColor = "white";
    card1.style.borderRadius = "8px";
    card1.style.textAlign = "center";
    card1.style.padding = "10px";
    card1.style.marginLeft = "100px";
    card1.style.marginRight = "-50px";
    // card1.setAttribute("class","col-4")
    div1.appendChild(card1);
    div1.setAttribute("style", "display:flex;flex-wrap:wrap;padding:10px");
}
//Call getFruits() method globally
getFruits();
