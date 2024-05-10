const header = document.querySelector("header");
const main = document.querySelector("main");

// function that adds products to product page
function addingProducts() {
  //gets the response from our json file
  fetch("product.json")
    .then((response) => {
      return response.json();
      //then we get the data from the json file
    })
    .then((data) => {
      console.log(data);

      // used to unhide the first element in the for loop
      let removed_class_once = false;

      for (let key in data) {
        console.log(key, data[key]);

        // create a p tag inside the header
        const item = document.createElement("p");
        item.innerHTML = `${key}`;
        header.appendChild(item);
        item.setAttribute("id", `${key}`);
        item.classList.add(`product`);

        // create a div tag inside the main
        const keyDiv = document.createElement("div");
        main.appendChild(keyDiv);

        // adds the classes
        keyDiv.classList.add(`${key}`);
        keyDiv.classList.add(`product-list`);
        keyDiv.classList.add(`hide`);

        // this is to unhide the first element in the for loop
        if (!removed_class_once) {
          keyDiv.classList.remove(`hide`);
          item.classList.add(`on`);
          removed_class_once = true;
        }

        // check to see if mouse is over item
        item.addEventListener("mouseover", () => {
          // removes the on class from all
          document.querySelectorAll(".product").forEach((element) => {
            if (element.classList.contains("on")) {
              element.classList.remove("on");
            }
          });
          // remove the hide class from all
          document.querySelectorAll(".product-list").forEach((element) => {
            if (!element.classList.contains("hide")) {
              element.classList.add("hide");
            }
          });
          // adds the on class to item and also removes hide from the corresponding div
          document.querySelector(`.${key}`).classList.remove("hide");
          item.classList.add("on");
        });

        // creates the div's for each product
        data[key].forEach((product) => {
          // creates a div tag that holds product info
          const div = document.createElement("div");
          keyDiv.appendChild(div);

          // adds product information and image
          for (let itemElement in product) {
            if (itemElement !== "image") {
              const pElement = document.createElement("p");
              pElement.innerHTML = `${product[itemElement]}`;
              div.appendChild(pElement);
            } else {
              const img = document.createElement("img");
              img.src = `${product[itemElement]}`;
              div.appendChild(img);
              img.style = "height: 160px; width: 160px";
            }
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

addingProducts();
