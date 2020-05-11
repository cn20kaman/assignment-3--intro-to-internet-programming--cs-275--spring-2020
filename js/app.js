window.onload = ( ) => {
    let cells = document.getElementsByTagName(`td`);

    for(let cell of cells){
        cell.addEventListener(`click`,rotate);
    }
};
