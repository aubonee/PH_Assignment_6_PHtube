
const loadcategory= async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const tabcontainer = document.getElementById('tabcontainer') ; 
    console.log( data.data);  
    
    data.data.forEach((item)=>{
        console.log(item.category);
      
        const categorydiv =document.createElement('div');
        categorydiv.innerHTML=`
                  <a class="tab py-2 px-5 m-2 btn">${item.category}</a>      
                `;
                tabcontainer.appendChild(categorydiv);
                        
})
    
}
loadcategory();
//
// fetch('https://openapi.programming-hero.com/api/videos/categories')
// .then(res=>res.json())
// .then(data=>console.log(data.data));

// const displaycategory = data=>{
//     const navitems =document.getElementById('category-section')
//     data.forEach=(navitem) => {
//         const categorydiv =document.createElement('div');
    
//       console.log(navitem.category);
//         categorydiv.innerHTML=`
//          <a class="tab">${navitem.category}</a>      
//         `
//         const output=navitems.appendChild(categorydiv);
//         console.log(output);
//     };
   


// }

