import qrImage from '../src/assets/images/image-qr-code.png';
import './App.css'

function App() {

  return (
    <div className="container">
      <div className="container-content">
        <img src={qrImage} className="QR-image" />
        <h3>Improve your front-end skills by building projects</h3>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Priyanshu Garg</a>.
  </div>
    </div>
  )
}

export default App 