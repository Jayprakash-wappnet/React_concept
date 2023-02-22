// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Reply from './components/Reply';
import { Demo }from './components/Demo';
import Wellcome from './components/Wellcome';
import Props from './components/Props';
import PropsInClass from './components/PropsInClass';
import State from './components/State';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
     <Greet/>
     <Reply name="Bravo" />
     <Reply name="Polard "/>
     <Reply name="Malinga"/>

     <Demo/>
     <Wellcome/>
     <Props name="Aryan" jobrole="React developer"><p>This is Children props</p></Props>
     <Props name="Jayprakash" jobrole="T.L."/>
     <Props name="Priya" jobrole="Software intern"/>

     <PropsInClass name="Vishal" percent="89"/>
     <PropsInClass name="Zeel" percent="85"/>
     <PropsInClass name="Jatin" percent="80"/>
     <State/>
     <Counter/>


    </div>
  );
}

export default App;
