import smallImgage from '../../assets/group-pics.png';
import redImage from '../../assets/red-love.png';
import myLove from '../../assets/white-love.png';

//  ANKARA IMAGES (6 Total)
import ankara1 from '../../assets/top-cloth-one.png';
import ankara2 from '../../assets/clothhhhh.png';
import ankara3 from '../../assets/clothhh.png';
import ankara4 from '../../assets/clothhh.png';
import ankara5 from '../../assets/clothhhh.png';
import ankara6 from '../../assets/cloth.png';

// --- VINTAGE IMAGES (5 Total) ---
import vintage1 from '../../assets/vintage-one.jpg';
import vintage2 from '../../assets/vintage-two.jpg';
import vintage3 from '../../assets/vintage-three.jpg';
import vintage4 from '../../assets/vintage-four.jpg';
import vintage5 from '../../assets/vintage-five.jpg';

// --- OTHER CATEGORY IMAGES (3 Each) ---
import asoOke1 from '../../assets/asooke-one.jpg';
import asoOke2 from '../../assets/asooke-two.jpg';
import asoOke3 from '../../assets/asooke-three.jpg';

import palazzo1 from '../../assets/palazo-one.jpg';
import palazzo2 from '../../assets/palazo-two.jpg';
import palazzo3 from '../../assets/palazo-three.jpg';

import jeans1 from '../../assets/jeans-one.jpg';
import jeans2 from '../../assets/jeans-two.jpg';
import jeans3 from '../../assets/jeans-three.jpg';

// --- VIEW OTHERS IMAGES (9 Total) ---
import other1 from '../../assets/ankara-one.jpg';
import other2 from '../../assets/ankara-one.jpg';
import other3 from '../../assets/ankara-one.jpg';
import other4 from '../../assets/ankara-one.jpg';
import other5 from '../../assets/ankara-one.jpg';
import other6 from '../../assets/jeans-one.jpg';
import other7 from '../../assets/palazo-one.jpg';
import other8 from '../../assets/asooke-one.jpg';
import other9 from '../../assets/jeans-two.jpg';


export const savedItemData = [
    // 1. ANKARA ITEMS (6 products: 3 up, 3 down)
    { id: 101, category: 'Ankara', title: 'Ankara Set 1', price: '₦5500', stock: 25, img: ankara1, img2: smallImgage, img3: redImage },
    { id: 102, category: 'Ankara', title: 'Ankara Set 2', price: '₦4800', stock: 18, img: ankara2, img2: smallImgage, img3: myLove },
    { id: 103, category: 'Ankara', title: 'Ankara Set 3', price: '₦6200', stock: 30, img: ankara3, img2: smallImgage, img3: redImage },
    { id: 104, category: 'Ankara', title: 'Ankara Set 4', price: '₦5900', stock: 22, img: ankara4, img2: smallImgage, img3: myLove },
    { id: 105, category: 'Ankara', title: 'Ankara Set 5', price: '₦4100', stock: 15, img: ankara5, img2: smallImgage, img3: redImage },
    { id: 106, category: 'Ankara', title: 'Ankara Set 6', price: '₦7500', stock: 10, img: ankara6, img2: smallImgage, img3: myLove },
    
    // 2. VINTAGE ITEMS (5 products: 3 up, 2 down)
    { id: 201, category: 'Vintage', title: 'Vintage Floral 1', price: '₦3200', stock: 12, img: vintage1, img2: smallImgage, img3: redImage },
    { id: 202, category: 'Vintage', title: 'Vintage Silk 2', price: '₦7100', stock: 8, img: vintage2, img2: smallImgage, img3: myLove },
    { id: 203, category: 'Vintage', title: 'Vintage Tweed 3', price: '₦4500', stock: 15, img: vintage3, img2: smallImgage, img3: redImage },
    { id: 204, category: 'Vintage', title: 'Vintage Brocade 4', price: '₦6800', stock: 5, img: vintage4, img2: smallImgage, img3: myLove },
    { id: 205, category: 'Vintage', title: 'Vintage Lace 5', price: '₦3900', stock: 9, img: vintage5, img2: smallImgage, img3: redImage },

    // 3. ASO-OKE ITEMS (3 products: 3 up, 0 down)
    { id: 301, category: 'Aso-Oke', title: 'Aso-Oke Red', price: '₦12000', stock: 10, img: asoOke1, img2: smallImgage, img3: redImage },
    { id: 302, category: 'Aso-Oke', title: 'Aso-Oke Gold', price: '₦15000', stock: 7, img: asoOke2, img2: smallImgage, img3: myLove },
    { id: 303, category: 'Aso-Oke', title: 'Aso-Oke Ivory', price: '₦10500', stock: 11, img: asoOke3, img2: smallImgage, img3: redImage },
    
    // 4. PALAZZO ITEMS (3 products: 3 up, 0 down)
    { id: 401, category: 'Palazzo', title: 'Palazzo Linen', price: '₦6000', stock: 15, img: palazzo1, img2: smallImgage, img3: myLove },
    { id: 402, category: 'Palazzo', title: 'Palazzo Cotton', price: '₦7200', stock: 12, img: palazzo2, img2: smallImgage, img3: redImage },
    { id: 403, category: 'Palazzo', title: 'Palazzo Jersey', price: '₦5100', stock: 20, img: palazzo3, img2: smallImgage, img3: myLove },
    
    // 5. JEANS ITEMS (3 products: 3 up, 0 down)
    { id: 501, category: 'Jeans', title: 'Denim Light Wash', price: '₦9000', stock: 22, img: jeans1, img2: smallImgage, img3: redImage },
    { id: 502, category: 'Jeans', title: 'Denim Dark Indigo', price: '₦8500', stock: 19, img: jeans2, img2: smallImgage, img3: myLove },
    { id: 503, category: 'Jeans', title: 'Denim Black Slim', price: '₦9500', stock: 14, img: jeans3, img2: smallImgage, img3: redImage },
];

// / Data array for the "View others here" feature
export const otherCollectionData = [
    { id: 601, title: 'Tribal Print 1', price: '₦8000', stock: 10, img: other1, img2: smallImgage, img3: redImage },
    { id: 602, title: 'Luxury Velvet 2', price: '₦9500', stock: 15, img: other2, img2: smallImgage, img3: myLove },
    { id: 603, title: 'Geometric Weave 3', price: '₦7800', stock: 12, img: other3, img2: smallImgage, img3: redImage },
    { id: 604, title: 'Metallic Sheen 4', price: '₦11000', stock: 8, img: other4, img2: smallImgage, img3: myLove },
    { id: 605, title: 'Woven Basket 5', price: '₦6900', stock: 20, img: other5, img2: smallImgage, img3: redImage },
    { id: 606, title: 'Paisley Design 6', price: '₦7400', stock: 18, img: other6, img2: smallImgage, img3: myLove },
    { id: 607, title: 'Embroidered Silk 7', price: '₦13500', stock: 5, img: other7, img2: smallImgage, img3: redImage },
    { id: 608, title: 'Solid Khaki 8', price: '₦5000', stock: 30, img: other8, img2: smallImgage, img3: myLove },
    { id: 609, title: 'Tartan Wool 9', price: '₦6200', stock: 25, img: other9, img2: smallImgage, img3: redImage },
];