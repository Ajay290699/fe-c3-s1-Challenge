//Declare global container constant to represent <div> container
let div1 = document.createElement("div");

div1.style.width="100px";
let body = document.getElementById("body1")
body.appendChild(div1);

//Define Fruit Object type with required properties
type Fruit ={
    name:string,
    price:number,
    image:string,
    unit:string
}

//Fetch data from server using getFruits() method
function getFruits(){
    let promise1 = fetch(" http://localhost:3000/fruits")

    let promise2 = promise1.then(result =>result.json())
    promise2.then(finalResult => {
        transform(finalResult);
    })
}

//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(fruitData:any){
    fruitData.forEach((element:any) => {
       let transformedFruit ={
            name:element.name,
            price:element.price,
            image:element.image,
            unit:element.unit
        }
        showFruit(transformedFruit);
    });
}

//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(xyz:any){
    let card1 = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("src",xyz.image)
    img.setAttribute("width","200px")
    img.setAttribute("height","200px")
    let caption = document.createElement("h2");
    let capText = document.createTextNode(xyz.name)
    caption.appendChild(capText)
    let price = document.createElement("p")
    let pValue = document.createTextNode("price $"+xyz.price+" per "+xyz.unit);
    price.appendChild(pValue)

    card1.appendChild(img);
    card1.appendChild(caption)
    card1.appendChild(price);
    card1.style.margin="20px"
    card1.style.backgroundColor="white";
    card1.style.borderRadius="8px";
    card1.style.textAlign="center";
    card1.style.padding="10px"
    card1.style.marginLeft="100px"
    card1.style.marginRight="-50px"
    div1.appendChild(card1)

    div1.setAttribute("style","display:flex;flex-wrap:wrap;padding:10px")

}

//Call getFruits() method globally
getFruits();