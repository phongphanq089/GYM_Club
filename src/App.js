import "./App.scss";
import Hero from "./compoment/hero/hero";
import Programs from "./compoment/Programs/Programs";
import Reasons from "./compoment/Reasons/Reasons";
import Plans from "./compoment/Plans/Plans";
import Testimonial from "./compoment/Testimonial/Testimonial";
import Join from "./compoment/join/Join";
import Footer from "./compoment/footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
