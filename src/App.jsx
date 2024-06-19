import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import LeftPanel from "./components/leftPanel/LeftPanel";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <LeftPanel />
          <Switch>
            <Route path="/" exact>
              Anasayfa
            </Route>
            <Route path="/kesfet">Keşfet</Route>
            <Route path="/bildirimler">Bildirimler</Route>
            <Route path="/mesajlar">Mesajlar</Route>
            <Route path="/grok">Grok</Route>
            <Route path="/topluluklar">Topluluklar</Route>
            <Route path="/premium">Premium</Route>
            <Route path="/profil">Profil</Route>
            <Route path="/dahafazla">Daha fazla</Route>
          </Switch>

          <div className="right-panel">RightPanel</div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
