import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import Prospectives from './pages/Prospectives';  

function App() {
  return (
    <div className="App">
      {/* <div>
        <BrowserRouter  basename="/rssla">
          <Switch>
            <Route exact path="/"  component={App} />
            <Route path="/prospies" component={Prospectives} />
          </Switch>
        </BrowserRouter>
      </div> */}

      <Header/>

      {/* <!-- BODY ONE --> */}
      <div class='body-1'>
          <div class='body-1-title'>
              <div class='body-1-rssla'><strong>RSSLA</strong></div>
              <div class='body-1-rssla-text'>
                          <em>Regents Scholar Society at UCLA</em>
                      <br/><br/>
                      <hr/>
              </div>
          </div>
        <br/><br/>
          <div class='body-1-text'>
              
                  Members of the Regents Scholar Society are the top 1.5% of UCLA undergraduate applicants each year. 
                  We're smart, we're dedicated, and we're passionate. More than that, we believe what we do speaks for itself.
              
          </div>
          <div class='button-wrap'>
          <button class='body-1-button'>Learn More</button>
          </div>
      </div>
      {/* <!-- BODY TWO --> */}
      <div class='body-2'>
          <div class='body-2-title-wrap'>
              <div class='body-2-title'><strong>INTRODUCING RSS</strong></div>
          </div>
          <div class='body-2-text-2-wrap' align='right'>
              <div class='body-2-text-2'>
                  The Regents Scholarship is offered to the top 1.5% of applicants, judged holistically. 
                  Our organization is one of few on the UCLA campus to unite students of all disciplines and backgrounds 
                  - we're diverse in our pursuits, passions, and identities. 
                  We go on to become doctors, lawyers, corporate executives, entrepreneurs, and more. 
                  <br/><br/>
                  16 board members run the organization and lead our programs 
                  - from our social gatherings to our mentorship program partnership with a local high school.
              </div>
          </div>
      </div>
       {/* <!-- IMAGE ROW --> */}

       <div class = 'img-row'>
          <div align='center'>
              <img src = 'https://s3-alpha-sig.figma.com/img/099d/8e5a/37b2cf91254ebfae0a4c9dc1ccd093e4?Expires=1579478400&Signature=QVg3tOhWynxk3C~Yn3qMVOVzY9eT4K-uFt8fN0MiaOynIrSNc-AwV~~QZM0eMH~M0wP5HyoqNPjPNcJcCC17hOOG7nCRdSFnGqcx~frGbCbrZsjRHgke5vDuOLvySHyFkH7JG6I5cxRZ2bKb5Hh~cGg2BbiQ6RNP7oABPWtNk1MehIi4VL9oeXnFDOqaY7wskmzadZ8FKX3O2LfSFNA9t6iF~rq-9gh9LnwbCoBeVkFe4YJTYnq0GABrpxNMWJugTj-WGXF3lBdmj0XC~tnwWpWTkFShvL6QewC-XpP7SH9K6nQtCBAcUoQQI0R1Kh8hZ6kwFVSYyGaCdU6AF5leJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' class = 'img-1'/>
              <img src = 'https://s3-alpha-sig.figma.com/img/099d/8e5a/37b2cf91254ebfae0a4c9dc1ccd093e4?Expires=1579478400&Signature=QVg3tOhWynxk3C~Yn3qMVOVzY9eT4K-uFt8fN0MiaOynIrSNc-AwV~~QZM0eMH~M0wP5HyoqNPjPNcJcCC17hOOG7nCRdSFnGqcx~frGbCbrZsjRHgke5vDuOLvySHyFkH7JG6I5cxRZ2bKb5Hh~cGg2BbiQ6RNP7oABPWtNk1MehIi4VL9oeXnFDOqaY7wskmzadZ8FKX3O2LfSFNA9t6iF~rq-9gh9LnwbCoBeVkFe4YJTYnq0GABrpxNMWJugTj-WGXF3lBdmj0XC~tnwWpWTkFShvL6QewC-XpP7SH9K6nQtCBAcUoQQI0R1Kh8hZ6kwFVSYyGaCdU6AF5leJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' class = 'img-2'/>
          </div>
      </div>
{/* <!-- BODY THREE --> */}
      <div class='body-3'>
          <div class='body-3-wrap'>
              <div class='body-3-title'><img src='threepillars.png'/></div>
          <div class='pillar-wrap'>
              <div class='pillar'>
                  <div class='pillar-text-1'>Scholarship</div>
                  <div class='pillar-text-2'><em>Members of the Regents Scholar Society exemplify academic excellence, both in and out of the classroom.  </em></div>
              </div>
              <div class='pillar'>
                  <div class='pillar-text-1'>For our network,</div>
                  <div class='pillar-text-2'><em>we connect.</em></div>
                  <div class='pillar-text-3'>We offer alumni and faculty mentorship for our current members to build relationships. </div>
              </div>
              <div class='pillar'>
                  <div class='pillar-text-1'>For our members,</div>
                  <div class='pillar-text-2'><em>we support.</em></div>
                  <div class='pillar-text-3'>We offer peer mentorship, educational resources, professional development, and a social network.</div>
              </div>
          </div>
          </div>
      </div>
      {/* <!-- SPONSORS --> */}
      <div class='sponsors'>
          <div class='sponsors-title'>SPONSORS</div>
          <div class='sponsor-1-wrap'>
              <div class='sponsor-1'>Blueprint</div>
          </div>
      </div>
    <Footer/>
      

    </div>
  );
}

export default App;
