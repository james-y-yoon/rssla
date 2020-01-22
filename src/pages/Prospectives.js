import React from 'react'; 
import './Prospectives.css'; 
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from '../components/Header/Header'; 

function Prospectives() {
    return(
        <div className = "prospectives">
            <div class = 'prospectives1'>
                {/* <!-- BODY ONE --> */}
                <div class='body-1-prospectives'>
                    <div class='body-1-title'>
                        <div class='body-1-rssla'>
                            <strong>Congratulations!</strong>
                        </div>
                    </div>
                    <br/><br/>
                    <div class='body-1-prospectives-text'>
                        First and foremost, we'd like to congratulate you on the scholarship! The Regents Scholarship is one of the most prestigious awards given to UCLA undergraduates, and you should feel very proud of yourself for your accomplishments thus far!
                    </div>
                </div>
            </div>

            <div class = "prospectives2">
                <div class = "wrap1">
                    {/* <!-- BODY TWO --> */}
                    <div class='body-2-prospectives'>
                        <br/><br/><br/>
                        We'd like to invite you to our overnight stay program! 
                        <br/><br/>
                        OSP, or the overnight stay program, is hosted by the Regents Scholar Society during the first two weekends of April. At our program, you'll be able to: 
                    </div>

                    {/* <!-- BODY THREE --> */}
                    <div class = 'body-3-prospectives'>
                        <div class = "body-3-prospectives-text">
                            • Meet new people - some who become close friends! 
                            <br/>• Explore Westwood - UCLA's adjacent college town. 
                            <br/>• Have a taste of what it's like to be a bruin - literally! You'll be eating at UCLA's #1 ranked dining halls. 
                            <br/>• Shadow classes and see what college lectures are like. 
                            <br/>• Talk to current students and see what we do! 
                            <br/>• Truly get a feel for what UCLA is like - and whether this school is the right fit for you.
                        </div>
                    </div>

                    {/* <!-- BODY FOUR --> */}
                    <div class = 'body-2-prospectives'>
                        <br/><br/>
                        Interested? We hope you are! Learn more about what you'll do, who you'll meet, and how to sign up for each session below. For more information, reach out the Rebecca Zhu at outreach@rssla.org. 
                    </div>

                    {/* <!-- BODY FIVE --> */}
                    <div class = "body-3-prospectives">
                        <div class = "capital-heading">
                            DATES AND ITINERARIES
                        </div>
                        <div class = "table-prospectives">
                            <table>
                                <tr>
                                    <td class = "vertical-line">• OSP Session 1: April</td>
                                    <td class = "button-wrap left-padding"><button class = "button-1">Itinerary</button></td>
                                    <td class = "button-wrap"><button class = "button-1">Sign Up!</button></td>
                                </tr>
                                <tr>
                                    <td class = "vertical-line">• OSP Session 2: April</td>
                                    <td class = "button-wrap left-padding"><button class = "button-1">Itinerary</button></td>
                                    <td class = "button-wrap"><button class = "button-1">Sign Up!</button></td>
                                </tr>
                                <tr>
                                    <td class = "vertical-line">• OSP Session 3: April</td>
                                    <td class = "button-wrap left-padding"><button class = "button-1">Itinerary</button></td>
                                    <td class = "button-wrap"><button class = "button-1">Sign Up!</button></td>
                                </tr>
                                <tr>
                                    <td class = "vertical-line">• OSP Session 4: April</td>
                                    <td class = "button-wrap left-padding"><button class = "button-1">Itinerary</button></td>
                                    <td class = "button-wrap"><button class = "button-1">Sign Up!</button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class = "wrap2">
                    {/* <!-- BODY SIX --> */}
                    <div class = "vertical-body">
                        FOR FRESHMAN PROSPECTIVES
                        <br/> FOR FRESHMAN PROSPECTIVES
                        <br/> FOR FRESHMAN PROSPECTIVES
                    </div>
                </div>
            </div>



        </div>
    ); 
}

export default Prospectives; 