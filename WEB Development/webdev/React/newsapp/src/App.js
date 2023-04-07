import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
  const App=() =>{
  const pageSize=5;
  // state = {
  //   progress:0
  // }
  //   setProgress=(progress) =>{
  //     setState({progress: progress})
  //   }

      const[progress, setProgress] = useState(0)

      //render() {
    return (
      <div>
        <HashRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        {/* <News pageSize={5} country='in' category="science"/> */}
        <Switch>

          <Route exact path="/">
            <News setProgress={setProgress} key="General" pageSize={pageSize} country='in' category="General"/>
          </Route>
          <Route exact path="/Business">
            <News setProgress={setProgress} key="Buisness" pageSize={pageSize} country='in' category="Business"/>
          </Route>
          <Route exact path="/Entertainment">
            <News setProgress={setProgress} key="entertainment" pageSize={pageSize} country='in' category="Entertainment"/>
          </Route>
          <Route exact path="/General">
            <News setProgress={setProgress} key="General" pageSize={pageSize} country='in' category="General"/>
          </Route>
          <Route exact path="/Health">
            <News setProgress={setProgress} key="Health" pageSize={pageSize} country='in' category="Health"/>
          </Route>
          <Route exact path="/Science">
            <News setProgress={setProgress} key="Science" pageSize={pageSize} country='in' category="Science"/>
          </Route>
          <Route exact path="/Sports">
            <News setProgress={setProgress} key="Sports" pageSize={pageSize} country='in' category="Sports"/>
          </Route>
          <Route exact path="/Technology">
            <News setProgress={setProgress} key="Technology" pageSize={pageSize} country='in' category="Technology"/>
          </Route>
        </Switch>
        </HashRouter>
      </div>
    )
  }
//}
export default App


