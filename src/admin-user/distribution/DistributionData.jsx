// src/admin-user/distribution/DistributionData.jsx

// 🛑 IMPORTANT: You must import 5 DIFFERENT images for the distribution cards.
// Replace these placeholders with your actual image imports.

import distImg1 from '../../assets/ankara-one.jpg';
import distImg2 from '../../assets/ankara-one.jpg';
import distImg3 from '../../assets/ankara-one.jpg';
import distImg4 from '../../assets/ankara-one.jpg';
import distImg5 from '../../assets/ankara-one.jpg';
import redImage from '../../assets/red-love.png';

// --- SELECTED PRODUCTS PREVIEW IMAGES (for the form page carousel) ---
import selectedDist1 from '../../assets/cloth-one.png';
import selectedDist2 from '../../assets/cloth-three.png';
import selectedDist3 from '../../assets/cloth-two.png';




export const distributionItems = [
    // Based on the image, there are 5 items visible in the grid.
    { id: 1, img: distImg1, loveImg: redImage },
    { id: 2, img: distImg2, loveImg: redImage },
    { id: 3, img: distImg3, loveImg: redImage },
    { id: 4, img: distImg4, loveImg: redImage },
    { id: 5, img: distImg5, loveImg: redImage },
    // Add more items if your full list is larger than 5
];

// 2. Data for the Selected Products Preview on the Distribution Form page (3 items)
// 🛑 THIS IS THE ARRAY YOU WERE MISSING 🛑
export const selectedProductsPreview = [
    { id: 101, img: selectedDist1 },
    { id: 102, img: selectedDist2 },
    { id: 103, img: selectedDist3 },
];