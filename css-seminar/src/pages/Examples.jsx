import React from 'react';
import Facts from '../assets/facts.png';
import Gallery from '../assets/gallery.png';
import Squares from '../assets/squares.png';

export default function Example() {

  return (
    <main>
      <a href="/">Home</a>
     <h2>Examples</h2>
        <section id="example-gallery">
        <h3 className="example-header">Centre with margin</h3>
        <img className="example-img" src={Facts} alt="a list of countries and facts" />
        <hr />
        <h3 className="example-header">Centre with Flexbox</h3>
        <img className="example-img" src={Gallery} alt="a gallery of images of otters" />
        <hr />
        <h3 className="example-header">Centre with position and transform</h3>
        <img className="example-img" src={Squares} alt="two squares with squares inside them to show centred divs" />
        </section>
    </main>
  )
}
