import React, { Component } from 'react';

class Portfolio extends Component {
  projects = [
    {
      id: 1,
      title: 'PC-Shop',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aspernatur excepturi officia quo porro sapiente laborum illo ad possimus. Animi suscipit cum ea in sed officiis accusamus alias adipisci aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla voluptatem odit vel qui eos possimus repudiandae iure! Non, nam unde. Repellat provident dolor repellendus aspernatur? Excepturi minus magnam praesentium.',
      image: 'https://via.placeholder.com/250',
      github: 'https://github.com/freestyle09/Zakopane-Rzadkosz.pl'
    },
    {
      id: 2,
      title: 'Zakopane-rzadkosz.pl',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aspernatur excepturi officia quo porro sapiente laborum illo ad possimus. Animi suscipit cum ea in sed officiis accusamus alias adipisci aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla voluptatem odit vel qui eos possimus repudiandae iure! Non, nam unde. Repellat provident dolor repellendus aspernatur? Excepturi minus magnam praesentium.',
      image: 'https://via.placeholder.com/250',
      github: 'https://github.com/freestyle09/Zakopane-Rzadkosz.pl'
    },
    {
      id: 3,
      title: 'Olczański-dom.pl',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum numquam minus veritatis vero ab? Officia deleniti voluptates minus deserunt iure. Voluptatum quibusdam optio perferendis expedita animi nesciunt nihil ex eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ullam et tenetur a velit explicabo ut consequatur eveniet! Accusantium, nulla nostrum! Nulla beatae, quia error quisquam minima rerum in obcaecati?',
      image: 'https://via.placeholder.com/250'
    },
    {
      id: 4,
      title: 'Zdobywcy-tatr.pl',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis totam, fuga rerum eos perspiciatis et ipsum iste consequatur architecto minima amet velit sunt quam fugit sequi nostrum hic sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae sequi mollitia molestias ut? At cupiditate, ipsam consequatur earum nostrum iste, repellendus dolor id quos, ratione error. Cupiditate, doloribus odit?',
      image: 'https://via.placeholder.com/250'
    }
  ];
  state = {};
  render() {
    return (
      <section id='portfolio'>
        <div className='container'>
          <h2>Portfolio</h2>
          <h3>All my projects</h3>
          {this.projects.map(el => (
            <div className='projects'>
              <img src={el.image} alt='' />
              <div className='project'>
                <h4>{el.title}</h4>
                <div>{el.description}</div>
                <a href={el.github} target='_blank'>
                  <i class='devicon-github-plain colored' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;
