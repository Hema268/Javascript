import Header from './Header.jsx'
import Footer  from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';

function App() {
  return(
    <>
      <Header/>
      <Card name='Guna' text=' Manger'/>
      <Card name='Hema' text='Coder'/>
      <Card name='Arish' text='Developer'/>
      <Card name='karthika' text='CEO'/>
      <Food/>
      <Student name='Hemalatha' age={20} isStudent={true}/>
      <Student name='Karthika' age={43} isStudent={false}/>
      <Student name='Gunasekaran' age ={50} isStudent={false}/>
      <Student name='Arish' age={16} isStudent={true}/>
      <Student/>
      <hr />
      <Button/>
      <Footer/>
    </>
  );
}

export default App
