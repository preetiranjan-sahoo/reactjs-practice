import { Card } from "./Card";
import Food from "./Food";
import { Footer } from "./Footer";
import Header from "./Header";
import "./App.css"
import { Button } from "./Button";
import { Student } from "./Student";



function App() {
  return (
    <>
    <Student name="Banty" age={25} isStudent={true} />
    <Student name="Satish" age={23} isStudent={false} />
    <Student name="Banty" age={25} isStudent={true} />
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
