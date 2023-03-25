
import './App.css';
import Landing from './Pages/Landing';
import UploadSubmission from './Pages/UploadSubmission';
import SubmissionDetail from './Pages/SubmissionDetail';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        {/* <Landing/> */}
        {/* <SubmissionDetail/> */}
        <Route exact path='/' ><Landing /></Route>
        <Route exact path='/upload' >      <UploadSubmission />
        </Route>
        <Route exact path='/hack:id' ><SubmissionDetail /></Route>


      </Switch>
   

    </>
  );
}

export default App;
