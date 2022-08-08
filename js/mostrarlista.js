let categoriesArray = [];


function showCategoriesList(array){ 
    let listadeelementos = ""; 

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        listadeelementos += ` Elemento de la lista `
        document.getElementById("idlista").innerHTML = listadeelementos; 
    }
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url_del_json).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});
