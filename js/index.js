$(document).ready(() => {
    Original().then(() => {
        $("#load-screen span").fadeOut(2000, function () {
            $("#load-screen ").fadeOut(2000, function () {
                $("body").css("overflow", "visible")
            });
        })
       

    })
});
 let menuWidth = $('.sid-menu').innerWidth();
let period = 1000;
  $('.sid-menu').animate({
        left: -menuWidth, period
  });
$('.sid-nav').animate({ left: -menuWidth, period });
    
$('.fa-bars').click(function () {
    
          $('.sid-menu').animate({
        left: 0, period
    });
    $('.sid-nav').animate({ left: 0, period })
    
    $('.menu').addClass('d-none')
 $('#menu2').removeClass('d-none');
     })
    

$('.fa-x').click(function x() {
    
    $('.sid-menu').animate({
        left: -menuWidth, period
    });
    $('.sid-nav').animate({ left: -menuWidth, period })
    $('.menu').removeClass('d-none')
    $('#menu2').addClass('d-none');


});
$('.contact-us').click(function () {
    document.getElementById("Dad").innerHTML = ``;
    showContacts();
});
////////////////////////////////////////////
//https://www.themealdb.com/api/json/v1/1/search.php?s=Penne

async function Searcing(mealName) {
    
    // $("#load-screen ").fadeIn(100);
     apis = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
     final_Apis = await apis.json();
    let cartoonaaSearcing= ``;
    let Searcing_arr = final_Apis.meals;
    console.log(Searcing_arr)
    for (let i = 0; i < Searcing_arr?.length; i++) {
        console.log(Searcing_arr[i].strMeal)
        // onclick="SinglePage(${Searcing_arr[i].idMeal})"
    
        cartoonaaSearcing += ` <div onclick="SinglePage(${Searcing_arr[i].idMeal})" class="col-lg-3 gy-3 contain ">
                <div class="position-relative contain-son overflow-hidden " style="top:50px">
                <img src="${Searcing_arr[i].strMealThumb}" id="contain" class="w-100" alt="">
                <div class=" w-100 star  p-1 text-center position-absolute rounded-0 d-flex justify-content-center align-items-center">
                    <h2>${Searcing_arr[i].strMeal}</h2>
                </div>
                </div>
            </div>`;
    }
   

         document.getElementById('Dad').innerHTML = cartoonaaSearcing;
     
}
async function SearcingFl(mealFLitter) {
    
     apis = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealFLitter}`);
     final_Apis = await apis.json();
    let cartoonaaSearcingFlitter= ``;
    let SearcingFlitter_arr = final_Apis.meals;
   // console.log(Searcing_arr)
    for (let i = 0; i < SearcingFlitter_arr?.length; i++) {
        //console.log(Searcing_arr[i].strMeal)
    // onclick="SinglePage(${Searcing_arr[i].idMeal})" 
        cartoonaaSearcingFlitter += ` <div onclick="SinglePage(${SearcingFlitter_arr[i].idMeal})" class="col-lg-3 gy-3 contain ">
                <div class="position-relative contain-son overflow-hidden " style="top:50px">
                <img src="${SearcingFlitter_arr[i].strMealThumb}" id="contain" class="w-100" alt="">
                <div class=" w-100 star  p-1 text-center position-absolute rounded-0 d-flex justify-content-center align-items-center">
                    <h2>${SearcingFlitter_arr[i].strMeal}</h2>
                </div>
                </div>
            </div>`;
    }

    
         document.getElementById('Dad').innerHTML = cartoonaaSearcingFlitter;
    
}
/////////////////////////////////////////////
let search = ` <div class="col-md-5"><input onkeyup="Searcing(this.value)" style="color: white 
!important;"   type="text" placeholder="Search By Name" class=" bg-transparent form-control mt-2  ">
 </div>
 <div class="col-md-5"><input onkeyup="SearcingFl(this.value)" style="color: white !important;"  type="search" class=" bg-transparent  form-control mt-2" placeholder="search By Frist
 letter"></div>`
$('ul li').click(function () {
    $('.sid-menu').animate({
        left: -menuWidth, period
    });
    $('.sid-nav').animate({ left: -menuWidth, period })
   $('.menu').removeClass('d-none')
 $('#menu2').addClass('d-none');
})
$('.search').click(function () {
    document.getElementById("search-con").innerHTML = search;
       document.getElementById("Dad").innerHTML = ``;
})
////////////////////////////////////////
//https://www.themealdb.com/api/json/v1/1/search.php?f=a

////////////////////////////////////////////////

/////////////////////////////
async function SinglePage(meal) {
     apis = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
    final_Apis = await apis.json();
    let SinglePage_arr2 = final_Apis.meals[0];
    console.log(SinglePage_arr2)
    let cartoonaaSinglePage = ``;
    let ingredients = ``;
 
    for (let i = 1; i <= 20; i++) {
         //console.log(SinglePage_arr2[`strIngredient${i}`])
        if (SinglePage_arr2[`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1" style="list-style-type: none;">${SinglePage_arr2[`strMeasure${i}`]} 
            ${SinglePage_arr2[`strIngredient${i}`]}</li>`
        }
    }
    let tags = SinglePage_arr2.strTags?.split(",")
    // let tags = meal.strTags.split(",")
    if (!tags) {
        tags = [];
    }
    else {
        let tagsStr = ``;
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }}
   
    cartoonaaSinglePage = ` 
         <div class="col-lg-4 d-flex flex-column" style="color: white !important;">
                <img src="${SinglePage_arr2.strMealThumb}" alt="" class="w-100 rounded-2">
                <h3 class="mt-2">${SinglePage_arr2.strMeal}</h3>

            </div>
            <div class="col-lg-8">
                <div style="color: white !important;">
                   <div class="text-left">
                    <h4>Instructions : </h4>
                    <p>${SinglePage_arr2.strInstructions}</p>
                    </div>
                    <h3>Area : ${SinglePage_arr2.strArea}</h3>
                    <h3>Category  : ${SinglePage_arr2.strCategory}</h3>
                </div>
                <div style="color: white !important;">
                    <h3>Recipes : </h3>
                    <div class="ggg ">
                    ${ingredients}
                    </div>
                </div>
           
                  
              
                
                <div class="mt-3">
                    <button class="btn btn-success"><a href="${SinglePage_arr2.strSource}">Source</a></button>
                    <button class="btn btn-danger"><a href="${SinglePage_arr2.strYoutube}">You Tube</a></button>
                </div>
            </div>`;
    // }

    
    document.getElementById('Dad').innerHTML = cartoonaaSinglePage;
    document.getElementById("search-con").innerHTML = "";
    
}
 //SinglePage();
///////////////////////////////
async function Original() {
     apis = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
     final_Apis = await apis.json();
    let cartoonaaOriginal= ``;
     let Original_arr= final_Apis.meals;
    for (let i = 0; i < Original_arr.length; i++) {
    // onclick="SinglePage(${Original_arr[i].idMeal})" 
        cartoonaaOriginal += ` <div onclick="SinglePage(${Original_arr[i].idMeal})"   class="col-lg-3 col-md-8 gy-3 contain " id>
                <div class="position-relative contain-son overflow-hidden " style="top:50px">
                <img src="${Original_arr[i].strMealThumb}" id="contain" class="w-100" alt="">
                <div class=" w-100 star  p-1 text-center position-absolute rounded-0 d-flex justify-content-center align-items-center">
                    <h2>${Original_arr[i].strMeal}</h2>
                </div>
                </div>
            </div>`;
    }

    
         document.getElementById('Dad').innerHTML = cartoonaaOriginal;
    
}


///////////////////////////////////
async function cartoonaaSort(sort) {
     apis = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${sort}`);
     final_Apis = await apis.json();
    let cartoonaaSortbox = ``;
     let categoriesSort_arr= final_Apis.meals;
    for (let i = 0; i < categoriesSort_arr.length; i++) {
     
        cartoonaaSortbox += ` <div onclick="SinglePage(${categoriesSort_arr[i].idMeal})"  class="col-lg-3 gy-3 contain " id>
                <div class="position-relative contain-son overflow-hidden " style="top:50px">
                <img src="${categoriesSort_arr[i].strMealThumb}" id="contain" class="w-100" alt="">
                <div class=" w-100 star  p-1 text-center position-absolute rounded-0 d-flex justify-content-center align-items-center">
                    <h2>${categoriesSort_arr[i].strMeal}</h2>
                </div>
                </div>
            </div>`;
    }

    
         document.getElementById('Dad').innerHTML = cartoonaaSortbox;
    
}


// $('.contain').css({ height: imgHight });
async function getCat() {
    $('#load-screen').ready(async function () {
    apis = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
     final_Apis = await apis.json();
    let cartoonaa = ``;
     let categories_arr= final_Apis.categories;
   
    for (let i = 0; i < categories_arr.length; i++) {
        
        cartoonaa += ` <div class="col-lg-3 gy-3 contain " id>
                <div onclick="cartoonaaSort('${categories_arr[i].strCategory}')" class="position-relative contain-son overflow-hidden rounded-2 " style="top:50px">
                <img  src="${categories_arr[i].strCategoryThumb}" id="${categories_arr[i].strCategory}" class="w-100" alt="">
                <div class=" w-100 star  p-1 text-center position-absolute">
                    <h3>${categories_arr[i].strCategory}</h3>
                    <p>${categories_arr[i].strCategoryDescription.split(' ').slice(0, 20).join(" ")}</p>
                </div>
                </div>
            </div>`;
        
    
    }
 
    $('.category').click(function () {
         document.getElementById('Dad').innerHTML = cartoonaa;
    })
   
    })
    
}
    
getCat();
//www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
async function cartoonaaArea(Are) {
     apis = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Are}`);
     final_Apis = await apis.json();
    let cartoonaaAretbox = ``;
    let cartoonaaAretbox_arr = final_Apis.meals;
    console.log(cartoonaaAretbox_arr)
    for (let i = 0; i < cartoonaaAretbox_arr.length; i++) {
     
        cartoonaaAretbox += ` <div onclick="SinglePage(${cartoonaaAretbox_arr[i].idMeal})" class="col-lg-3 gy-3 contain " id>
                <div class="position-relative contain-son overflow-hidden " style="top:50px">
                <img src="${cartoonaaAretbox_arr[i].strMealThumb}" id="contain" class="w-100" alt="">
                <div class=" w-100 star  p-1 text-center position-absolute rounded-0 d-flex justify-content-center align-items-center">
                    <h2>${cartoonaaAretbox_arr[i].strMeal}</h2>
                </div>
                </div>
            </div>`;
    }

    
         document.getElementById('Dad').innerHTML = cartoonaaAretbox;
    
}

let carArea = ``;
async function getArea() {
    apis = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    final_Apis = await apis.json();
    let Area = final_Apis.meals;

    for (let i = 0; i < Area.length; i++) {
        carArea+=`<div onclick="cartoonaaArea('${Area[i].strArea}')" class="col-3 g-3 d-flex flex-column text-center area-color">
    <i class="fa-solid fa-house-laptop"></i>
    <h3 style="color: white !important;" >${Area[i].strArea}</h3>
</div>`
    }
    $('.Area').click(function () {
         document.getElementById("Dad").innerHTML = carArea;
    })
}
getArea();
//https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken
async function cartoonaaIng(ingredients) {
     apis = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
     final_Apis = await apis.json();
    let cartoonaaIngtbox = ``;
    let cartoonaaIngtbox_arr = final_Apis.meals;
    
    //console.log(cartoonaaAretbox_arr)
    for (let i = 0; i < cartoonaaIngtbox_arr.length; i++) {
     
        cartoonaaIngtbox += ` <div onclick="SinglePage(${cartoonaaIngtbox_arr[i].idMeal})" class="col-lg-3 gy-3 contain " id>
                <div class="position-relative contain-son overflow-hidden " style="top:50px">
                <img src="${cartoonaaIngtbox_arr[i].strMealThumb}" id="contain" class="w-100" alt="">
                <div class=" w-100 star  p-1 text-center position-absolute rounded-0 d-flex justify-content-center align-items-center">
                    <h2>${cartoonaaIngtbox_arr[i].strMeal}</h2>
                </div>
                </div>
            </div>`;
    }

    
         document.getElementById('Dad').innerHTML = cartoonaaIngtbox;
    
} 
let carIng = ``;
async function getIngradiant() {
    apis = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    final_Apis = await apis.json();
    let Ingrad = final_Apis.meals;
//console.log(Ingrad.length)
    for (let i = 0; i < 20; i++) {
  
        carIng+=`<div onclick="cartoonaaIng('${Ingrad[i].strIngredient}')" class="col-lg-3 col-md-4 col-sm-6 g-3 d-flex flex-column text-center area-color">
   <i class="fa-solid fa-drumstick-bite"></i>
   <div class="py-2">
    <h5 style="color: white !important; font-size:20px;" >${Ingrad[i].strIngredient}</h5>
      <p style="color: white !important;" class="lead p-3">  ${Ingrad[i].strDescription.split(' ').slice(0,10).join(" ")}</p></div>

</div>`
    }
    $('.Ingrad').click(function () {
         document.getElementById("Dad").innerHTML = carIng;
    })
}
getIngradiant();
let rowData=document.getElementById('Dad')
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
function showContacts() {
    rowData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}