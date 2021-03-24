import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './Components/NotMatch/NotMatch';
import FriendDetails from './Components/FriendDetails/FriendDetails';

function App() {
  return (
      <Router> 
        <Switch>
        <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails></FriendDetails>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
         </Router>
  );
}

export default App;
