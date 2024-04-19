function Item({isPacked, name}){
    // if (isPacked){
    //     return <li><del className="item">{name} 💣</del></li>
    //     //return null;
    // }
    // return <li className="item">{name}</li>

    //USING TERNARY OPERATOR
    return(
        <li className="item">
            {name}{isPacked && '💣'}
          {/* {isPacked? name + '💣': name} */}
        </li>
    )
}


export default function PackingList(){
    return(
        <section>
            <h1>MY SCHOOL PACKING LIST</h1>
            <Item
            isPacked={true}
            name="cloths"
            />
            <Item
            isPacked={true}
            name="Shopping"
            />
            <Item
            isPacked={false}
            name="Gas cooker"
            />
            <Item
            isPacked={true}
            name="Shoes"
            />
            <Item
            isPacked={false}
            name="Electronics"
            />
        </section>
    )
}