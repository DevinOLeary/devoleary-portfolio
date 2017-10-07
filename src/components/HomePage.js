import React from 'react';
import Nav from './Nav';

class HomePage extends React.Component {
  render() {
    return(
      <div className="body-container">
        <header>
        <hgroup className="flex-container center column background-colored text-inverse">
          <h1>Devin O&#8217;Leary</h1>
          <h3>Mindful</h3>
          <h3>Design & Development</h3>
        </hgroup>
          <Nav />
        </header>
        <main>
          <section>
            <article className="flex-container center full-width">
              <p className="text-body_read ">Cornhole forage food truck, bespoke brunch meggings organic.
              Williamsburg intelligentsia man bun, yuccie bicycle rights woke
              cloud bread pickled schlitz truffaut. Wolf taiyaki air plant
              narwhal retro irony pinterest tattooed hoodie man braid lumbersexual. </p>
            </article>
          </section>
        </main>
      </div>
    );
  }
}

export default HomePage;
