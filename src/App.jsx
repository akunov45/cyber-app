import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

const Home = () => <div style={{ padding: '20px' }}>Это главная страница</div>;
const About = () => <div style={{ padding: '20px' }}>Страница О нас</div>;
const Contact = () => <div style={{ padding: '20px' }}>Наши контакты</div>;
const Blog = () => <div style={{ padding: '20px' }}>Наш блог</div>;

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;