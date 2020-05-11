window.onload = ( ) => {
    let cells = document.getElementsByTagName(`td`);

    const rotate = function(e){
        for(let cell of cells){
            if(cell.className === `rotate`){
                cell.className=`rotateBack`;
            }
            else if(cell===e.target && e.target.className !== `rotate`){
                e.target.className = `rotate`;
            }
        }
    };

    for(let cell of cells){
        cell.addEventListener(`click`,rotate);
    }
};
