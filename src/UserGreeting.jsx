export function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>This Is {props.username}</h2>
    // }
    // return <h2>Please Log In</h2>

    return(
        props.isLoggedIn ? <h2 className="hey">Hey {props.username}</h2> : <h2 className="by">By {props.username}</h2>
    )
}