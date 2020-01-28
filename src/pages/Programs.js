import React from 'react';
import Header from '../components/Header/Header.js';
import './Programs.css';
import LAMP_logo from '../lamp_logo.svg';
import mentor_pic from '../mentor.png';
import book_pic from '../book.png';

function Programs() {
    return (
        <div className="Programs">
            <div class='what-do-we-do'>
                <div class='what-do-we-do-title'>WHAT DO WE DO?</div>
                <div class='what-do-we-do-body'>
                    The Regents Scholar Society hosts multiple events through the year.
                    Some connect our members to resources, while others strive to engage the broader UCLA and local community.
                </div>
            </div>

            <div id="program-list">

                <div id="external-body-container">

                    <div id="title">
                        Los Angeles Mentorship Program (L.A.M.P.)
                    </div>
                    <img src={LAMP_logo} width="350" height="350" />
                    <div id="text-LAMP">
                        <p1>
                            The Los Angeles Mentorship Program (LAMP) provides UCLA students the opportunity to give back to the local
                            community through tutoring at University High School. This program aims to provide resources to underserved
                            youth - giving them access to SAT and ACT preparation along with workshops regarding financial literacy,
                            college applications, and more.
                            <br></br>
                            <br></br>
                            Students interested in tutoring and volunteering through LAMP are not required
                            nor expected to have previous experience, although strong interpersonal and communication skills are required
                            to succeed in the role.
                        </p1>
                    </div>

                </div>

                <div id="external-body-container">
                    <div id="title">
                        STUDENTS PRESENTING, INNOVATING, ENTERTAINING, LEARNING (S.P.I.E.L.)
                    </div>
                    <div id="text-SPIEL">
                        <p1>
                            SPIEL stands for Students Presenting, Innovating, Entertaining and Learning. Inspired by TED Talks,
                            this campus-wide speaker event is put on by students, for students. The aim of SPIEL is to give students from
                            all backgrounds the chance to talk about something that is not only important to the presenters themselves,
                            but is also often important to the greater UCLA and global community.
                            <br></br>
                            <br></br>
                            In the past, SPIEL presenters have addressed a variety of topics, ranging from mental health to ground-breaking student research.
                        </p1>
                    </div>
                </div>
                <div id="external-body-container">
                    <div id="title">
                        Service
                    </div>
                    <div id="text-SERVICE">
                        <p1>
                            Through partnerships with Heal the Bay and Meals on Wheels, the Regents Scholar Society hosts periodic service events throughout the year.
                            Stay tuned on our Facebook group to get involved!
                        </p1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Programs; 