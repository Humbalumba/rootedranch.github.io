// window.onload = function() {
//     const img = new Image();
//     img.src = 'barn.png';
//     img.onload = function() {
//         const homeDiv = document.querySelector('.home');
//         const aspectRatio = img.height / img.width;
//         const homeDivWidth = window.innerWidth;
//         const homeDivHeight = homeDivWidth * aspectRatio;
//         homeDiv.style.height = homeDivHeight + 'px';
//     };
// };
const ingredients = document.querySelector('.ingredients-icon');
const waste = document.querySelector('.waste-icon');
const packaging = document.querySelector('.packaging-icon');
const sustainabilityDiv = document.querySelector('.sustainability');
const sustainabilityTitle = document.querySelector('.sustainability-title');
const sustainabilityDescription = document.querySelector('.sustainability-description');
console.log(sustainabilityDiv)
ingredients.addEventListener('mouseover', function() {
    sustainabilityDiv.style.backgroundColor = '#dbb260';
    sustainabilityTitle.innerText = 'Ingredients';
    sustainabilityTitle.style.color = 'white';
    sustainabilityDescription.innerText = '';
    sustainabilityDescription.style.color = 'white';
});
ingredients.addEventListener('mouseout', function() {
    sustainabilityDiv.style.backgroundColor = 'transparent';
    sustainabilityTitle.innerText = 'Sustainability';
    sustainabilityTitle.style.color = 'black';
    sustainabilityDescription.innerText = 'At The Rooted Ranch, sustainability isn’t just a word—it’s the foundation of everything we do. We believe that the way we eat has a direct impact on the planet, which is why we prioritize locally sourced, seasonal ingredients, minimize food waste, and use eco-friendly packaging. By choosing plant-based meals, we help conserve water, reduce carbon emissions, and support regenerative farming practices that nurture the earth. Beyond our kitchen, we are committed to sustainable operations, from composting food scraps to partnering with ethical suppliers who share our vision for a greener future. Every meal at The Rooted Ranch is a step toward a healthier planet, proving that delicious food and environmental responsibility can go hand in hand.';
    sustainabilityDescription.style.color = 'black';
});
waste.addEventListener('mouseover', function() {
    sustainabilityDiv.style.backgroundColor = '#f89d68';
    sustainabilityTitle.innerText = 'Waste';
    sustainabilityTitle.style.color = 'white';
    sustainabilityDescription.innerText = '';
    sustainabilityDescription.style.color = 'white';
});
waste.addEventListener('mouseout', function() {
    sustainabilityDiv.style.backgroundColor = 'transparent';
    sustainabilityTitle.innerText = 'Sustainability';
    sustainabilityTitle.style.color = 'black';
    sustainabilityDescription.innerText = 'At The Rooted Ranch, sustainability isn’t just a word—it’s the foundation of everything we do. We believe that the way we eat has a direct impact on the planet, which is why we prioritize locally sourced, seasonal ingredients, minimize food waste, and use eco-friendly packaging. By choosing plant-based meals, we help conserve water, reduce carbon emissions, and support regenerative farming practices that nurture the earth. Beyond our kitchen, we are committed to sustainable operations, from composting food scraps to partnering with ethical suppliers who share our vision for a greener future. Every meal at The Rooted Ranch is a step toward a healthier planet, proving that delicious food and environmental responsibility can go hand in hand.';
    sustainabilityDescription.style.color = 'black';
});
packaging.addEventListener('mouseover', function() {
    sustainabilityDiv.style.backgroundColor = '#d17760';
    sustainabilityTitle.innerText = 'Packaging';
    sustainabilityTitle.style.color = 'white';
    sustainabilityDescription.innerText = '';
    sustainabilityDescription.style.color = 'white';
});
packaging.addEventListener('mouseout', function() {
    sustainabilityDiv.style.backgroundColor = 'transparent';
    sustainabilityTitle.innerText = 'Sustainability';
    sustainabilityTitle.style.color = 'black';
    sustainabilityDescription.innerText = 'At The Rooted Ranch, sustainability isn’t just a word—it’s the foundation of everything we do. We believe that the way we eat has a direct impact on the planet, which is why we prioritize locally sourced, seasonal ingredients, minimize food waste, and use eco-friendly packaging. By choosing plant-based meals, we help conserve water, reduce carbon emissions, and support regenerative farming practices that nurture the earth. Beyond our kitchen, we are committed to sustainable operations, from composting food scraps to partnering with ethical suppliers who share our vision for a greener future. Every meal at The Rooted Ranch is a step toward a healthier planet, proving that delicious food and environmental responsibility can go hand in hand.';
    sustainabilityDescription.style.color = 'black';
});