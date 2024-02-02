import Nav from './components/nav-bar';
import Slider from './components/slider';
import Body from './components/body';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <div class="container">
        <Nav />
        <Slider />
        <Body titleOne="OUR PURPOSE" titleTwo="CONTENT"/>
        <Footer />
      </div>
    </>
  )
}