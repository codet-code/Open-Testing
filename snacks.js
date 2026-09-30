const products = [
            {
                name: "Skittles",
                price: "\$1.00",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdpF1hyyQczBNcrizLDmzMDpacOkRHK_s6hI14_aVww&s=10",
                description: "Stock: 25"
            },
            {
                name: "Spicy Chip Bag",
                price: "\$1.25",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJoCGmGjebOXAmOagGcVG9YSzkwLrWE6hQGr-FMNREPQ&s=10",
                description: "Stock: 25"
            },
            {
                name: "Airheads Xtream",
                price: "\$2.00",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdXJnHq-mkuqXQV8q-hRkr6qkzIdrj_WzaXrlhRwLaw&s=10",
                description: "Stock: 25"
            },
            {
                name: "Arizonia Ice Tea Bottles",
                price: "\$2.00",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKJcK2dUPQ3TcY4mSy80Ef6tMyRhENgnbJUiKgnhCpA&s=10",
                description: "Stock: 25."
            },
             {
                name: "Monster Energy (Special)",
                price: "\$4.50",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQ4dkk3-ziD36l-HDSJgA9A-sIxwFoO1IRdvIVWnOxw&s=10",
                description: "Stock: 10."
            },
             {
                name: "Chip Bags",
                price: "\$1.50",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQ4dkk3-ziD36l-HDSJgA9A-sIxwFoO1IRdvIVWnOxw&s=10",
                description: "Stock: 10."
            },
             {
                name: "Mini Snack Pack",
                price: "\$5.00",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLObOC8Tm4FCMuqDnt06ey-oe-FTJkS7uKRf81kEgBbw&s=10",
                description: "Stock: 10."
            },
        ];

        // This script automatically loops through your list and builds the HTML layout
        const gallery = document.getElementById('gallery');
        
        products.forEach(item => {
            const cardHTML = `
                <div class="product-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h2 class="product-name">${item.name}</h2>
                    <div class="product-price">${item.price}</div>
                    <p class="product-desc">${item.description}</p>
                </div>
            `;
            gallery.innerHTML += cardHTML;
        });