function List(){
    const fruits = [
        { id: 1, name: "mango", calories: 60, color: "yellow" },
        { id: 2, name: "apples", calories: 95, color: "red" },
        { id: 3, name: "Grapes", calories: 62, color: "purple" },
        { id: 4, name: "orange", calories: 47, color: "orange" },
        { id: 5, name: "Cherries", calories: 50, color: "red" }
    ]

    let fruitItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:{fruit.calories}</li>)

    return (<ul>{fruitItems}</ul>)
}

export default function FruitList(){
    return(
        <section>
            <List/>
        </section>
    )
}
