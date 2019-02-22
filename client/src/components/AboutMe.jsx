import React, { Component } from 'react';

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <section id='aboutme'>
        <div className='container'>
          <h2>Welcome to my site!</h2>
          <h3>About me</h3>
          <div>
            <p>
              My name is Józef Rzadkosz, my story as a Front-End Developer begins a couple years ago in High School,
              when I have started learning markup language HTML. Being on the IT profile I have known that there are
              some websites but actually I didn't think who and how creates them.{' '}
            </p>
            <p>
              After few lessons the teacher on the exam asked us to do a simply website to pass. That's when I knew that
              this way I want to go. Yes I want to learn it! In the High School topic about websites ended with only
              HTML language, so I have started to looking for informations on my own. I found style sheet language
              called CSS, and that was pure magic! Manipulation of appearance, classes, IDs that was it! Higher level
              reached, I was thinking...
            </p>
            <p>
              I was creating my own projects, and then I thought... There is something missing here... Dynamics! I found
              informations in web, that for all this stuff responsible is programming language JavaScript. I have
              started to learn it, and that was when my dreams came true. Creating animations, events, I found pure
              magic again! JavaScript opened my horizons on technologies of Front End world.
            </p>
            <p>
              From this day everyday I am polishing my skills in creating applications and websites by learning new
              things that will allow me to be better and better!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
