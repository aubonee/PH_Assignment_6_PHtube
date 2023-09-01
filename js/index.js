// const loadcategory=async()=>{
//     const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
//     const data = await res.json();
//     const categories = data?.data;
//      console.log(categories);
    
// }
fetch('https://openapi.programming-hero.com/api/videos/categories')
.then(res=>res.json())
.then(data=>displaycategory());

const displaycategory = data=>{
    const navitems =document.getElementById('category-section')
    navitems.forEach=(navitem) => {
        const categoryli =document.createElement('div');
        categoryli.innerHTML
    }
   

}

