
import './App.css';
import Testimonio from './componentes/Testimonio.js' //If we dont import "Testimonio" app.js does not know that it exists, so that app.js knows that Testimonial exists, we are going to use import so that app.js can use the Testimonio file
function App() {
  return (
    <div className="App">
        <div className="contenedor-principal">
          <h1>Here are some trainer stories</h1>
        <Testimonio 
          name='AshKetchum'
          region='Kanto'
          image='ash'
          position='World Champion'
          //<MyComponent text={["This is ", <strong>not</strong>,  "working."]} />
          phrase={["Im very " ,<strong>proud</strong>, " of myself but more of my friends because without them this huge achievement wouldnt be possible, I would like to thank all of them for always giving more of the 100% in every battle it has been a long, fun and exiting journey and we want to see what else we can achieve."]}/>
          <Testimonio 
          name='Misty'
          region='Kanto'
          image='misty'
          position='Water type Gym Leader'
          phrase='Im very proud of myself but more of my friends because without them this huge achievement wouldnt be possible, I would like to thank all of them for always giving more of the 100% in every battle it has been a long, fun and exiting journey and we want to see what else we can achieve.'/>
          <Testimonio 
          name='Brock'
          region='Kanto'
          image='brock'
          position='Pokemon Doctor'
          phrase='Im very proud of myself but more of my friends because without them this huge achievement wouldnt be possible, I would like to thank all of them for always giving more of the 100% in every battle it has been a long, fun and exiting journey and we want to see what else we can achieve.'/>
           
        </div> 
    </div>
  );
}

export default App; //Allow showing our app
