import lottie from 'lottie-web'



function App() {
  const app=document.getElementById('lot')

  lottie.loadAnimation({
    container: app,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets7.lottiefiles.com/packages/lf20_j6nmheu0.json' // the path to the animation json
  });
  
  return (
    <div className="App" id="lot">
    </div>
  );
}

export default App;
