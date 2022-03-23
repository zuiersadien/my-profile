import lottie from 'lottie-web'
import './app.css'


function App() {
  const app=document.getElementById('lot')

  lottie.loadAnimation({
    wrapper: app,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets7.lottiefiles.com/packages/lf20_j6nmheu0.json' // the path to the animation json
  });
  
  return (
    <div className="App" id="lot">
    asdsadsaasdsdfasdf
    </div>
  );
}

export default App;
