
    const search = document.getElementById("recordSearch");

    search.addEventListener("input", () => {

    const query = search.value.toLowerCase();

    const records = document.querySelectorAll(".recordCard");

    records.forEach(record => {

    const info = record.querySelector(".info");

    if(!info){
    record.classList.remove("searchHover");
    return;
}

    const text = info.innerText.toLowerCase();

    if(text.includes(query) && query !== ""){
    record.classList.add("searchHover");
}
    else{
    record.classList.remove("searchHover");
}

});

});