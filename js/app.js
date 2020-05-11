window.onload = ( ) => {
    let cells = document.getElementsByTagName(`td`);

    const rotate = function(e){
    };

    for(let cell of cells){
        cell.addEventListener(`click`,rotate);
    }
};
