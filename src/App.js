import './App.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container-fluid">
        <Jumbotron />
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-5">
            <Card imagen="https://html.com/wp-content/uploads/flamingo.webp" />
          </div>
          <div className="col-md-3 col-sm-12 mb-5">
            <Card imagen="https://html.com/wp-content/uploads/flamingo.webp" />
          </div>
          <div className="col-md-3 col-sm-12 mb-5">
            <Card imagen="https://html.com/wp-content/uploads/flamingo.webp" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Card imagen="https://html.com/wp-content/uploads/flamingo.webp" />
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
