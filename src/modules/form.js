//1. gavus duomenis is api uzpildyti vietovemis select elementa 
//2. gauti vietoviu json is api ServiceWorkerRegistrationconsolinti duomenis, isitikinti, kad juos gavome



const getPlaces= async()=>{
const data = await fetch('https://api.meteo.lt/v1/places')
.then(response=>{return response.json()})
return data
}


//3. sukurti tiek option elementu kiek yra vietoviu
const renderPlaces = async() =>{
    const data = await getPlaces();
    //console.log("is kitos funkcijos", data)
    for(let place of data){
        console.log(`${place.name} --- ${place.administrativeDivision}`)
        let option = document.createElement("option");
        option.value = `${place.name} --- ${place.administrativeDivision}`;
        document.querySelector("datalist").appendChild(option);
    }
}

//4. i option elementa ideti vietoves pavadinima
export default renderPlaces