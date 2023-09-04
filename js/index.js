
const loadcategory= async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const tabcontainer = document.getElementById('tabcontainer') ; 
   
    
    data.data.forEach((item)=>{
    
      
        const categorydiv =document.createElement('div');
        categorydiv.innerHTML=`

                  <a onclick="displaycontents('${item.category_id}')" class="tab py-2 px-5 m-2 btn">${item.category}</a>      
                `;
                
                tabcontainer.appendChild(categorydiv);
                
                        
})

};


const displaycontents= async (categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    //console.log(data);
    //console.log(data.data);

   
    

    
    
     const nocardContainer=document.getElementById('nocardContainer');
     nocardContainer.innerHTML=" ";
     const div2=document.createElement("div");
     const cardcontainer=document.getElementById('cardContainer');
     cardcontainer.innerHTML=" ";
     
     
     if(categoryId=='1005'){
        
        
      
      nocardContainer.innerHTML=`

      <img class=" w-[280px]" src="Icon.png" alt="">
      <h1 class=" text-center text-3xl font-extrabold w-[380px]">Oops!! Sorry, There is no content here</h1>
      `;
      nocardContainer.appendChild(div2);
     }
    
    data.data.forEach((card) => {
      console.log(card);
     const postDate= card?.others.posted_date;
  
    let outputTime;
     if(postDate>0)
     {
         
       const sec= parseInt(postDate);
       const h= sec/3600;
       const m=(sec-(3600*h))/60;
       //const s=sec-(3600*h)-(m*60);
       
       if(m>0 ){

        outputTime=`${parseInt(h)}hours ${parseInt(m)}min ago`;
       }
       else{
          outputTime=`${parseInt(h)}hours ago`;

       }   
     }
     let isTimeTrue;
     if(postDate>0){
       isTimeTrue=true;
     }
     else{
       isTimeTrue=false;
     }
   
      const div1=document.createElement("div");
      
 

//-ml-[180px] mr-2 -mb-[100px]
//console.log(categoryId);
   
     
     

      
      if(categoryId!=='1005'){

        div1.innerHTML=`
    
        <div class="card mx-auto  w-80 bg-base-100">
        <figure class="rounded-lg w-80 mb-3"><img  class="w-80  rounded-lg h-[200px]" src="${card?.thumbnail}" alt="thumbnail" />  
        </figure>
       
      <div class="flex justify-end items-center h-[5px]"> ${isTimeTrue?`<p class="w-max px-2 bg-[#171717] text-white rounded-lg relative -mt-[80px] mr-2">${outputTime}</p>`:`<p class=" -mt-[50px] ml-[180px] opacity-0 w-[300px] "> </p>`}</div>
        <div class="py-5">
         <div class="flex items-start -mt-5 ml-0">
         <img class="rounded-full w-[30px] h-[30px] mx-2" src=${card?.authors[0].profile_picture} alt="">
         <div> 
         <h2 class="text-xl my-1 font-bold">${card?.title}</h2>
         <div class="flex justify-start">
         <p class="text-sm my-1 ">Awlad Hossain</p>
        
       <p>${card?.authors[0].verified?`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
       <g clip-path="url(#clip0_11_215)">
         <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
         <path d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92669C6.88906 8.52512 6.23749 8.52512 5.83593 8.92669C5.43437 9.32825 5.43437 9.97981 5.83593 10.3814L8.43124 12.9767C8.82187 13.3673 9.45624 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
       </g>
       <defs>
         <clipPath id="clip0_11_215">
           <rect width="20" height="20" fill="white"/>
         </clipPath>
       </defs>
     </svg>`:" "}</p>
      
        </div>
        
         <p class="my-1">${card?.others.views}</p>
         
         </div>
         </div>
         
        </div>
      </div>
        `;
        cardcontainer.appendChild(div1);
      }
     
      }
      


)

    
     
   

}




loadcategory();
displaycontents("1000");
//sort_view("1000");

    





