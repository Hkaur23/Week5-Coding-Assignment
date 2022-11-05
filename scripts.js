/***
 * Product class with two constrcuts productName and category
 */
class Product{
    constructor(productName, category) {
        this.productName = productName;
        this.category = category;
    }
}

/***
 * Category class is accepting new product name and adding to items array via addItem method
 */

class Category
{
    constructor(name){
        this.name = name;
        this.items = [];
    }


    addItem(item) 
    {
        if(item instanceof Product)
        {
            this.items.push(item);
        } else
        {
            throw new Error('You can only add a instance of Product. Argument is not a product');
        }
    }

}

/***
 * Class Menu will represent all different options and invoke function based on user input via start method 
 */

class Menu {
    constructor() {
        this.categories = [];
        this.selectedItem = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while(selection!=0) {
            switch (selection){
                case '1' :
                    this.createProduct();
                    break;
                case '2':
                    this.viewProduct();
                    break;
                case '3':
                    this.deleteProduct();
                    break;
                case '4':
                    this.displayProducts();
                    break;
            }

            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

/***
 * showMainMenuOptions will disply all available options 
 */
    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Add new product
            2) View Product
            3) Delete Product
            4) Display All Products
        `)
    }
    /***
     * showProductMenuOptions will display product information based on user input with menuoptions as well
     */

    showProductMenuOptions(productInfo){
        return prompt(
            `0) Back
             1) Create product
             2) Delete Product
             ----------------------
             ${productInfo}
             `
        )
    }
  /***
   * displayProducts will display product information based on user input
   */
    displayProducts() {
        let product = '';
        for (let index = 0; index < this.categories.length; index++) {
            product += index + ') ' + this.categories[index].productName + '\n';
        }
        alert(product);
    }
/***
 * createProduct will add new prduct to category array
 */
    createProduct() {
        let name = prompt('Enter new name for product: ');
        this.categories.push(new Product(name));
    }
/**
 * viewProduct will display all the products in an array
 */
    viewProduct() {
        let index= prompt("Enter the index of the product you wish to view:")
        if(index > -1 && index < this.categories.length)
         {
            this.selectedItem = this.categories[index];
            let description = 'Product Name ' + this.selectedItem.productName + '\n';

            let selection = this.showProductMenuOptions(description);
            switch (selection) {
                case 1:
                    this.createProduct();
                    break;
                case 2:
                    this.deleteProduct();
            
                default:
                    break;
            }

            
        }else 
        prompt("Invaild Index!")
    }

    /**
     * deleteProduct will delete an element from array based on user input
     */
     deleteProduct() {
        let index=prompt('Enter the index of the product you wish to delete: ');
        
        if(index > -1 && index < this.categories.length) 
        {
           this.categories.splice(index,1);
        }
     }
}

let menu = new Menu();
menu.start();