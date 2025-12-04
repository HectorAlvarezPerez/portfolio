import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <main className="min-h-screen text-slate-200 selection:bg-primary/30 selection:text-primary">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
