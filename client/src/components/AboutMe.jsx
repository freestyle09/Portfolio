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
              My name is Józef Rzadkosz, my story as a Front-End Developer has begun a couple years ago in High School,
              when I have started learning markup language HTML. Being on the IT profile I have known that there are
              some websites but actually I did not think who and how creates them.{' '}
            </p>
            <p>
              After few lessons we had to do a simple website to pass an exam. Then I knew that this was the way I want
              to go. Yes I want to learn it! In the High School the theme of websites ended with only HTML language, so
              I have started to look for more information on my own. I found style sheet language CSS and that was pure
              magic! Manipulation of appearance, classes, IDs that was it! Higher level reached, I was thinking...
            </p>
            <p>
              I was creating my own projects, and then I thought... There is something missing here... Dynamics! I found
              information in web that for all this stuff responsible is programming language JavaScript. I have started
              to learn it and that was when my dreams came true. Creating animations, events, I found pure magic again!
              JavaScript opened my horizons on technologies of Front End world.
            </p>
            <p>
              From that day I have been polishing my skills in creating applications and websites everyday by learning
              new things that will allow me to be better and better!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
