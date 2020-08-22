import React from "react";
import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layouts/Navbar";
import Contacts from "./components/contacts/Contacts";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contact from "./components/contacts/Contact";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    //refer=store
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <div className="container">
              <div className="py-3">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contacts/add" component={AddContact} />
                  <Route
                    exact
                    path="/contacts/edit/:id"
                    component={EditContact}
                  />
                </Switch>
              </div>
            </div>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
