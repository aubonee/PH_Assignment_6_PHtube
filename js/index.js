
const loadcategory= async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const tabcontainer = document.getElementById('tabcontainer') ; 
    //console.log( data.data);  
    
    data.data.forEach((item)=>{
     //   console.log(item.category);
      
        const categorydiv =document.createElement('div');
        categorydiv.innerHTML=`

                  <a onclick="displaycontents('${item.category_id}')" class="tab py-2 px-5 m-2 btn">${item.category}</a>      
                `;
                
                tabcontainer.appendChild(categorydiv);
                
                        
})

};


const displaycontents= async (categoryId='All') =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    console.log(data);
    console.log(data.data);
   const categorydataLength= data.data.length;
   console.log(categorydataLength);
//    if(categorydataLength==0){
//     console.log(true);
//    }
//    else{
//     console.log(false);
//    }
    if(categorydataLength==0){
        //console.log("no Data");
        const noCardContainer=document.getElementById('noCardContainer');
        
            
            const div=document.createElement("div");
            div.innerHTML=`
            <div  class=" mt-5 mx-auto flex flex-col justify-center items-center">
            <img class="w-[250px]" src="Icon.png" alt="">
            <h1 class=" text-center text-3xl font-extrabold w-[380px]">Oops!! Sorry, There is no content here</h1>
           
          </div>
             
        
        
            `;
        noCardContainer.appendChild(div);
         

       
   
}
else{
     const cardcontainer=document.getElementById('cardContainer');
     data.data.forEach((card) => {
         console.log(card);
         const div=document.createElement("div");
         div.innerHTML=`
         <div class="card w-[350px] ">
         <figure class="w-full rounded my-2"><img class="w-[350px] h-[200px]" src="${card?.thumbnail}" alt="thumbnail" /></figure>
         <div class="py-2">
          <div class="flex items-start ml-0">
          <img class="rounded-full w-[30px] h-[30px] mx-2" src=${card?.authors[0].profile_picture} alt="">
          <div> 
          <h2 class="text-xl my-1 font-bold">${card?.title}</h2>
          <div class="flex justify-start">
          <p class="text-sm my-1 ">Awlad Hossain</p>
          <img id="svgImage" src="fi_10629607.svg" alt="SVG Image">
          <img id="svgImage" src="fi_10629607.svg" alt="SVG Image">
        <p>${card?.authors[0].verified?<img id="svgImage" src="fi_10629607.svg" alt="SVG Image">:" "}</p>
       
         </div>
         
          <p class="my-1">${card?.others.views}</p>
          
          </div>
          </div>
          
         </div>
       </div>
         `;
         cardcontainer.appendChild(div);
         
   }
   
 )

}
}

loadcategory();
    






