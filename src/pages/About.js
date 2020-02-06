import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './About.css';
import Footer from '../components/Footer/Footer';
import conference_2019 from './pictures/2019_Conference.jpg'; // 2019 Inter-UC Conference 
import kayaking_2018 from './pictures/2018_Kayak_Fall_3.jpg'; // 2018 Kayaking
import blueprint from './pictures/blueprint logo.png';
import nextstep from './pictures/nextstep-footer.png';
import background_1 from './pictures/2018_InterUC_2.HEIC';
import kaplan from './pictures/kaplan.png';
import Carousel from 'react-bootstrap/Carousel';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

function About() {
    return (
        <div>
            <div class='body-1'>
                <div class='body-1-title'>RSSLA</div>
                <div class='body-1-title-caption'>Regents Scholar Society at UCLA
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                </div>
                <div class='body-1-text'>
                    Members of the Regents Scholar Society are the top 1.5% of UCLA undergraduate applicants each year.
                    We're smart, we're dedicated, and we're passionate. More than that, we believe what we do speaks for itself.
                </div>
                <div class='button-wrap'>
                    <button class='body-1-button'>Learn More</button>
                </div>
            </div>


            <div class='body-2'>
                <div class='body-2-title-wrap'>
                    <div class='body-2-title'><strong>INTRODUCING RSS</strong></div>
                </div>
                <div class='body-2-text-2-wrap' align='right'>
                    <div class='body-2-text-2'>
                        The Regents Scholar Society is composed of students with different identities, interests, and passions.
                        Whether north campus or south campus, pre-med or business, scientists or artists,
                        the society transcends these divisions through our shared commitment to scholarship, leadership, and service.
              <br /><br />
                        We strive to support our members and the local community through our various internal and external programs,
                        including service events, leadership opportunities, and the Los Angeles Mentorship Program.
              </div>
                </div>
            </div>

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                        <img src={conference_2019} alt="Chania" />
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>LA is always so much fun!</p>
                        </div>
                    </div>

                    <div class="item">
                        <img src={kayaking_2018} alt="Chicago" />
                        <div class="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>

                    <div class="item">
                        <img src="ny.jpg" alt="New York" />
                        <div class="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div class='body-3'>
                <div class='body-3-wrap'>
                    <div class="body-3-title">
                        THE THREE PILLARS
            </div>
                    <div class='pillar-wrap'>
                        <div class='pillar'>
                            <div class='pillar-text-1'>Scholarship</div>
                            <div class='pillar-text-2'>Members of the Regents Scholar Society exemplify academic excellence, both in and out of the classroom.  </div>
                        </div>
                        <div class='pillar'>
                            <div class='pillar-text-1'>Service</div>
                            <div class='pillar-text-2'>The Regents Scholar Society dedicates itself to improving the local community. We participate in beach clean-ups, tutoring through the Los Angeles Mentorship Program, and outreach.</div>
                        </div>
                        <div class='pillar'>
                            <div class='pillar-text-1'>Leadership</div>
                            <div class='pillar-text-2'>Members of the Regents Scholar Society work as driven leaders, both within campus organizations and in the local, state, and national  community.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class='sponsors'>
                <div class='sponsors-title'><strong>SPONSORS</strong></div>
                <div class='sponsor-row'>
                    <div class='sponsor-column'>
                        <img src={blueprint} alt='Blueprint LSAT Tutoring' class='img-sponsor' />
                    </div>
                    <div class='sponsor-column'>
                        <img src={nextstep} alt='NextStep MCAT Tutoring' class='img-sponsor' />
                    </div>
                    <div class='sponsor-column'>
                        <img src={kaplan} alt='Kaplan Test Prep' class='img-sponsor' />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;
