import logo from './logo.svg';
import './App.css';

function App() {
  var a=1;
  var b=5;
  var c=a+b;
  var d=a-b;
  var e=a*b;
  var f=a/b;
  var g=a%b;
  return (
    <>
    <h1>Arithmetic operators</h1>
    <h2>Addition is {c}</h2>
    <h2>Subtraction is {d}</h2>
    <h2>Multiplication is {e}</h2>
    <h2>Division is {f}</h2>
    <h2>Remainder is {g}</h2>
    </>
  );
}

export default App;
