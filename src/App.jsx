import { Card } from "./Card";
import Food from "./Food";
import { Footer } from "./Footer";
import Header from "./Header";
import "./App.css"
import { Button } from "./Button";
import { Student } from "./Student";
import { UserGreeting } from "./UserGreeting";
import { List } from "./List";
import { ProfilePicture } from "./ProfilePicture";
import { MyComponent } from "./MyComponent";
import { Counter } from "./Counter";
import { Onchange } from "./Onchange";
import { ColorPicker } from "./ColorPicker";
import { State } from "./Sate";
import { StateArray } from "./StateArray";
import { AddCar } from "./CarAdd";



function App() {
//   const frnds = [
//     {id:1,name: "Banty", age: 25},
//     {id:2,name: "Manoj", age: 22},
//     {id:3,name: "Satish", age: 23}
// ];
//   const nonFrnds = [
//     {id:1,name: "sd", age: 25},
//     {id:2,name: "sdz", age: 22},
//     {id:3,name: "sd", age: 23}
// ];
  return (
    <>
    <AddCar/>
    {/* <StateArray/> */}
    {/* <State/> */}
    {/* <ColorPicker/> */}
    {/* <Onchange/> */}
    {/* <Counter/> */}
    {/* <MyComponent/> */}
    {/* <ProfilePicture/> */}
    {/* <Button/> */}
    {/* {frnds.length > 0 && <List names = {frnds} category="frnds"/> }
    {nonFrnds.length > 0 && <List names = {nonFrnds} category="nonFrnds"/> } */}
    {/* <UserGreeting isLoggedIn={true} username="Banty" /> */}
    {/* <Student name="Banty" age={25} isStudent={true} />
    <Student name="Satish" age={23} isStudent={false} />
    <Student name="Banty" age={25} isStudent={true} /> */}
    {/* <Button/> */}
    {/* <Card/>
    <Card/> */}

    {/* <Header/>
    <Food/>
    <Footer/> */}
    </>
  );
}

export default App