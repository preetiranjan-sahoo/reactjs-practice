export function Button(){

    // let count =0; //1
    // const handleCLick = (name) =>{
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} u clicked me ${count} times`);
    //     }else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // } ;

    // const handleCLick2 = (name) => console.log(`${name} stop clicking`); //2

    const handleClick = (e) => e.target.textContent = "Fuck U";

    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click Me👍</button>
    )
}