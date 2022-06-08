export const changeValue=(item,data)=>{
    let copArr={...data}
    copArr.value=item;
    return copArr;
}
export const editItem=(item,id,checked,data)=>{
    let copArr={...data}
    copArr.value=item;
    copArr.isEdited=id;
    copArr.checked=checked;
    return copArr;
}

export const emptyInput=(data)=>{
    let copArr={...data}
    copArr.value="";
    copArr.isEdited="";
    copArr.checked=false;
    return copArr;
}