import React from 'react';
import Nav from './Nav';

class HomePage extends React.Component {
  render() {
    return(
      <div>
        <header>
        <h1>Devin O&#8217;Leary</h1>
        <Nav />
        </header>
        <main>
          <section>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <article>
              <p>Cornhole forage food truck, bespoke brunch meggings organic.
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
