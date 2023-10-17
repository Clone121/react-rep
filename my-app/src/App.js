import css from "./App.module.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/Content";


function App() {
  return (
    <div className={css.App}>
        <NavBarForm />
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;