export function List(props){
    // const frnds = [
    //     {name: "Banty", age: 25},
    //     {name: "Manoj", age: 22},
    //     {name: "Satish", age: 23}
    // ]
    // frnds.sort((a,b) => a.name.localeCompare(b.name))  //alphabatical
    // frnds.sort((a,b) => a.age - b.age)  Numeric

    // const bigBoy = frnds.filter(frnd => frnd.age < 25)

    const category = props.category;
    const nonFrnds = props.names;
    
    const frndList = nonFrnds.map(frnd => <li key={frnd.id}>{frnd.name}: {frnd.age}</li>)
    return(
    <>
    <h3 className="frnds-category">{category}</h3>
    <ol className="nonFrnds-items">{frndList}</ol>
    </>)
}
