const products = [
    { id: 1, name: "Alice", product: "Laptop", price: 999.99, inStock: true, category: "Electronics" },
    { id: 2, name: "Bob", product: "Smartphone", price: 499.99, inStock: true, category: "Electronics" },
    { id: 3, name: "Charlie", product: "Tablet", price: 299.99, inStock: false, category: "Electronics" },
    { id: 4, name: "David", product: "Headphones", price: 89.99, inStock: true, category: "Accessories" },
    { id: 5, name: "Eve", product: "Smartwatch", price: 199.99, inStock: true, category: "Wearables" },
    { id: 6, name: "Frank", product: "Camera", price: 599.99, inStock: true, category: "Electronics" },
    { id: 7, name: "Grace", product: "Speaker", price: 149.99, inStock: false, category: "Accessories" },
    { id: 8, name: "Heidi", product: "Monitor", price: 299.99, inStock: true, category: "Electronics" },
    { id: 9, name: "Ivan", product: "Keyboard", price: 49.99, inStock: true, category: "Accessories" },
    { id: 10, name: "Judy", product: "Mouse", price: 29.99, inStock: false, category: "Accessories" },
    { id: 11, name: "Karl", product: "Printer", price: 199.99, inStock: true, category: "Electronics" },
    { id: 12, name: "Liam", product: "Router", price: 79.99, inStock: true, category: "Networking" },
    { id: 13, name: "Mia", product: "Smart TV", price: 799.99, inStock: true, category: "Electronics" },
    { id: 14, name: "Noah", product: "Projector", price: 399.99, inStock: false, category: "Electronics" },
    { id: 15, name: "Olivia", product: "Laptop Stand", price: 39.99, inStock: true, category: "Accessories" },
    { id: 16, name: "Paul", product: "Gaming Console", price: 499.99, inStock: true, category: "Gaming" },
    { id: 17, name: "Quinn", product: "VR Headset", price: 299.99, inStock: true, category: "Gaming" },
    { id: 18, name: "Rita", product: "External Hard Drive", price: 89.99, inStock: true, category: "Storage" },
    { id: 19, name: "Sam", product: "USB Hub", price: 19.99, inStock: false, category: "Accessories" },
    { id: 20, name: "Tina", product: "Webcam", price: 49.99, inStock: true, category: "Accessories" },
    { id: 21, name: "Ursula", product: "Microphone", price: 99.99, inStock: true, category: "Accessories" },
    { id: 22, name: "Victor", product: "Graphics Card", price: 399.99, inStock: true, category: "Hardware" },
    { id: 23, name: "Wendy", product: "Motherboard", price: 149.99, inStock: false, category: "Hardware" },
    { id: 24, name: "Xander", product: "CPU", price: 299.99, inStock: true, category: "Hardware" },
    { id: 25, name: "Yara", product: "SSD", price: 129.99, inStock: true, category: "Storage" },
    { id: 26, name: "Zoe", product: "Power Supply", price: 79.99, inStock: true, category: "Hardware" },
    { id: 27, name: "Aaron", product: "Game Controller", price: 59.99, inStock: false, category: "Gaming" },
    { id: 28, name: "Becky", product: "Monitor Stand", price: 29.99, inStock: true, category: "Accessories" },
    { id: 29, name: "Cody", product: "Game Chair", price: 199.99, inStock: true, category: "Gaming" },
    { id: 30, name: "Diana", product: "Desk", price: 149.99, inStock: false, category: "Furniture" },
    { id: 31, name: "Eli", product: "Gaming Mouse Pad", price: 19.99, inStock: true, category: "Accessories" },
    { id: 32, name: "Fiona", product: "Laptop Bag", price: 39.99, inStock: true, category: "Accessories" },
    { id: 33, name: "Gina", product: "Phone Case", price: 19.99, inStock: true, category: "Accessories" },
    { id: 34, name: "Henry", product: "Screen Cleaner", price: 9.99, inStock: true, category: "Cleaning" },
    { id: 35, name: "Isla", product: "Cable Management", price: 14.99, inStock: false, category: "Accessories" },
    { id: 36, name: "Jack", product: "Charger", price: 29.99, inStock: true, category: "Accessories" },
    { id: 37, name: "Kate", product: "Fitness Tracker", price: 99.99, inStock: true, category: "Wearables" },
    { id: 38, name: "Leo", product: "Smart Scale", price: 49.99, inStock: true, category: "Health" },
    { id: 39, name: "Molly", product: "Electric Toothbrush", price: 79.99, inStock: true, category: "Health" },
    { id: 40, name: "Nina", product: "Hair Dryer", price: 39.99, inStock: false, category: "Beauty" },
    { id: 41, name: "Owen", product: "Skincare Set", price: 29.99, inStock: true, category: "Beauty" },
    { id: 42, name: "Paula", product: "Makeup Kit", price: 89.99, inStock: true, category: "Beauty" },
    { id: 43, name: "Quincy", product: "Perfume", price: 49.99, inStock: false, category: "Beauty" },
    { id: 44, name: "Rachel", product: "Nail Polish", price: 12.99, inStock: true, category: "Beauty" },
    { id: 45, name: "Steve", product: "Shampoo", price: 9.99, inStock: true, category: "Health" },
    { id: 46, name: "Tara", product: "Conditioner", price: 9.99, inStock: true, category: "Health" },
    { id: 47, name: "Uma", product: "Face Mask", price: 19.99, inStock: false, category: "Beauty" },
    { id: 48, name: "Vince", product: "Sunscreen", price: 24.99, inStock: true, category: "Health" },
    { id: 49, name: "Will", product: "Lip Balm", price: 3.99, inStock: true, category: "Beauty" },
    { id: 50, name: "Xena", product: "Body Lotion", price: 15.99, inStock: true, category: "Health" }
];






var div=document.querySelector(".ol");

products.forEach(item=>{
    console.log(item);
    
    
        div.innerHTML+=`
                 <div id="cart">
                   
                     <li>Id: ${item.id}</li>
                     <li>Name: ${item.name}</li>
                 <li>Product: ${item.product}</li>
                     <li>Category: ${item.category}</li>
                     <li>In Stock: ${item.inStock}</li>
                     <li>Price: ${item.price}</li>
                
                 </div>
        `
       
    });
    

function render(products){
    div.innerHTML="";
products.forEach(item=>{
console.log(item);


    div.innerHTML+=`
             <div id="cart">
               
                 <li>Id: ${item.id}</li>
                 <li>Name: ${item.name}</li>
             <li>Product: ${item.product}</li>
                 <li>Category: ${item.category}</li>
                 <li>In Stock: ${item.inStock}</li>
                 <li>Price: ${item.price}</li>
            
             </div>
    `
   
});
}

function filterArr(btn){
    // console.log("check")

const selectedCategory=btn.innerHTML;
// console.log(selectedCategory)
 const filterproducts=products.filter(item=>item.category===selectedCategory);
 render(filterproducts);

 
}



