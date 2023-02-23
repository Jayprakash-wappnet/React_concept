// import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
// import ParentComponent from './components/ParentComponent';
// import BindingEh from './components/BindingEh';
// import ClassClick from './components/ClassClick';
// import FunctionClick from './components/FunctionClick';
// import Destructuring from './components/Destructuring';
// import DeconstInClass from './DeconstInClass';
// import Greet from './components/Greet';
// import Reply from './components/Reply';
// import { Demo }from './components/Demo';
// import Wellcome from './components/Wellcome';
// import Props from './components/Props';
// import PropsInClass from './components/PropsInClass';
// import State from './components/State';
// import Counter from './components/Counter';
import UserGreeting from './components/UserGreeting';
function App() {
  return (
    <div className="App">
      <NameList/>
      {/* <BindingEh></BindingEh>

      <ParentComponent></ParentComponent> */}

    {/* <ClassClick></ClassClick>
    <FunctionClick></FunctionClick> */}
    {/* <Destructuring Emp_name="Aryan" address="Ahemdabad"></Destructuring>
    <DeconstInClass Emp_name="Jayprakash" address="Ahemdabad"></DeconstInClass> */}

     {/* <Greet/>
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
     <Counter/> */}
     <UserGreeting/>


    </div>
  );
}

export default App;
