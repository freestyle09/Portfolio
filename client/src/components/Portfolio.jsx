import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class Portfolio extends Component {
  projects = [
    {
      id: 1,
      title: 'PC Shop',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aspernatur excepturi officia quo porro sapiente laborum illo ad possimus. Animi suscipit cum ea in sed officiis accusamus alias adipisci aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla voluptatem odit vel qui eos possimus repudiandae iure! Non, nam unde. Repellat provident dolor repellendus aspernatur? Excepturi minus magnam praesentium.',
      image: 'https://via.placeholder.com/250',
      github: 'https://github.com/freestyle09/Zakopane-Rzadkosz.pl',
      website: 'https://pc-shop-24.com.pl',
      url: 'pc-shop'
    },
    {
      id: 2,
      title: 'Twoje Przepisy',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aspernatur excepturi officia quo porro sapiente laborum illo ad possimus. Animi suscipit cum ea in sed officiis accusamus alias adipisci aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla voluptatem odit vel qui eos possimus repudiandae iure! Non, nam unde. Repellat provident dolor repellendus aspernatur? Excepturi minus magnam praesentium.',
      image: 'https://via.placeholder.com/250',
      github: 'https://github.com/freestyle09/Zakopane-Rzadkosz.pl',
      website: 'https://pc-shop-24.com.pl',
      url: 'twoje-przepisy'
    },
    {
      id: 3,
      title: 'Zakopane Rzadkosz',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aspernatur excepturi officia quo porro sapiente laborum illo ad possimus. Animi suscipit cum ea in sed officiis accusamus alias adipisci aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla voluptatem odit vel qui eos possimus repudiandae iure! Non, nam unde. Repellat provident dolor repellendus aspernatur? Excepturi minus magnam praesentium.',
      image: 'https://via.placeholder.com/250',
      github: 'https://github.com/freestyle09/Zakopane-Rzadkosz.pl',
      website: 'https://zakopane-rzadkosz.pl',
      url: 'zakopane-rzadkosz'
    },
    {
      id: 4,
      title: 'Olczański Dom',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum numquam minus veritatis vero ab? Officia deleniti voluptates minus deserunt iure. Voluptatum quibusdam optio perferendis expedita animi nesciunt nihil ex eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ullam et tenetur a velit explicabo ut consequatur eveniet! Accusantium, nulla nostrum! Nulla beatae, quia error quisquam minima rerum in obcaecati?',
      image: 'https://via.placeholder.com/250',
      website: 'https://olczanskidom.pl',
      url: 'olczanski-dom'
    },
    {
      id: 5,
      title: 'Zdobywcy Tatr',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis totam, fuga rerum eos perspiciatis et ipsum iste consequatur architecto minima amet velit sunt quam fugit sequi nostrum hic sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae sequi mollitia molestias ut? At cupiditate, ipsam consequatur earum nostrum iste, repellendus dolor id quos, ratione error. Cupiditate, doloribus odit?',
      image: 'https://via.placeholder.com/250',
      website: 'https://zdobywcy-tatr.pl',
      url: 'zdobywcy-tatr'
    },
    {
      id: 6,
      title: 'MMPStudio',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis totam, fuga rerum eos perspiciatis et ipsum iste consequatur architecto minima amet velit sunt quam fugit sequi nostrum hic sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae sequi mollitia molestias ut? At cupiditate, ipsam consequatur earum nostrum iste, repellendus dolor id quos, ratione error. Cupiditate, doloribus odit?',
      image: 'https://via.placeholder.com/250',
      website: 'https://mmpstudio.pl',
      url: 'mmpstudio'
    }
  ];
  state = {};

  makeUrlAdress = () => {};
  render() {
    return (
      <section id='portfolio'>
        <div className='container'>
          <h2>Portfolio</h2>
          <h3>All my projects</h3>
        </div>
        {this.projects.map(el => (
          <div key={el.id} className='projects'>
            <div className='container'>
              <img src={el.image} alt='' />
              <div className='project'>
                <NavLink to={'/' + el.url}>
                  <h4>{el.title}</h4>
                </NavLink>
                <div>{el.description}</div>
                <div>
                  <a href={el.github} target='_blank'>
                    <i className='devicon-github-plain colored' />
                  </a>
                  <a href={el.website} target='_blank'>
                    <i className='fas fa-globe-europe' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Portfolio;
