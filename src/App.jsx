import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Hyperspeed from './components/Hyperspeed';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const hyperspeedOptions = {
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 140,
    speedUp: 3.5,
    carLightsFade: 0.5,
    totalSideLightSticks: 24,
    lightPairsPerRoadWay: 35,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.1, 0.4],
    lightStickHeight: [1.2, 1.8],
    movingAwaySpeed: [70, 90],
    movingCloserSpeed: [-110, -150],
    carLightsLength: [400 * 0.04, 400 * 0.18],
    carLightsRadius: [0.06, 0.12],
    carWidthPercentage: [0.3, 0.45],
    carShiftX: [-0.7, 0.7],
    carFloorSeparation: [0, 4],
    colors: {
      roadColor: 0x020502,
      islandColor: 0x010201,
      background: 0x010201,
      shoulderLines: 0x00ff87,
      brokenLines: 0x9b5de5,
      leftCars: [0x9b5de5, 0x8f00ff, 0xa06cd5],
      rightCars: [0x00ff87, 0x00b894, 0x05c46b],
      sticks: 0x00ff87
    }
  };

  return (
    <>
      <Hyperspeed effectOptions={hyperspeedOptions} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;


