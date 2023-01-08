import Feed from "./Components/Feed";
import Trial from "./Components/Navbar";
import Trial2 from "./Components/Landing";
import Navbar from "./Components/Navbar";

function App() {
  const slides = [
    {
      url: "https://images.pexels.com/photos/6688574/pexels-photo-6688574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "slide1",
    },
    {
      url: "https://images.pexels.com/photos/1852078/pexels-photo-1852078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "slide2",
    },

    {
      url: "https://images.pexels.com/photos/1852078/pexels-photo-1852078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "slide3",
    },
  ];
  const containerStyles = {
    width: "90%",
    height: "80vh",
    margin: "0 auto",
    marginTop: "25px",
    objectFit: "contain",
  };
  return (
    <div>
      <Navbar />
      <div style={containerStyles}>
        <Trial2 slides={slides} />
      </div>
      <Feed />
    </div>
  );
}

export default App;
