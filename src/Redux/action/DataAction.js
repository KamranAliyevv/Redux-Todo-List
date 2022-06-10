export const addItem=((value,data)=>{
    const copyArray=[...data];
    copyArray.push(value);
    localStorage.setItem("todo",JSON.stringify(copyArray));
    return copyArray;
})

export const deleteItem=(id,data)=>{
    const copyArray=[...data];
    const newArray=copyArray.filter(item=>item.id!==id);
    localStorage.setItem("todo",JSON.stringify(newArray));
    return newArray;
}

export const clickItem=(id,data)=>{
    const copyArray=[...data];
    copyArray.find(item=>{
        if(item.id===id){
            item.checked=!item.checked
        }
        return item;
    })
    localStorage.setItem("todo",JSON.stringify(copyArray));
    return copyArray;
}

export const addEditing=(item,data)=>{
    const copyArray=[...data];
    copyArray.filter(arr=>{
        if(arr.id===item.id){
            arr.name=item.name;
            arr.checked=item.checked
        }
        return arr;
    })
    localStorage.setItem("todo",JSON.stringify(copyArray));
    return copyArray;
}
