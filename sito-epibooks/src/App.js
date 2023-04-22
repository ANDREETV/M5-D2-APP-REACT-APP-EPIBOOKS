
// import './App.css';
import LatestRelease from './LatestRelease';
import MyNav from './MyNav';
import Welcome from './Welcome';
// import Footer from './Footer';
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';


function App() {
  return (
    <div className="App">
      <header className="">
        <MyNav />
      </header>
      <main>
        <Welcome />
        <LatestRelease />
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
