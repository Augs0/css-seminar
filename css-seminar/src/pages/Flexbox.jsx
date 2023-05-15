import React from 'react';
import { useState } from 'react';
import Otters from '../assets/otters.avif';
import OtterSnuggle from '../assets/ottersnuggle.avif';
import SeaOtter from '../assets/seaotter.avif'

export default function Flexbox() {

  return (
    <main>
      <a href="/">Home</a>
      <section>
      <h2>Instructions</h2>
          <p>Centre this gallery of images using flexbox. You should centre both the gallery itself and the captions below the images. Please layout the gallery as a column.</p>
      </section>
         <section className="main-section" id="gallery">
           <figure class="image">
              <img src={Otters} alt="three sea otters in deep blue water laying on their backs"/>
              <figcaption>Floating otters</figcaption>
           </figure>
            <figure className="image">
              <img src={OtterSnuggle} alt="a closeup of two short clawed otters fast asleep" />
              <figcaption>Sleepy otters</figcaption>
            </figure>
            <figure className="image">
              <img src={SeaOtter} alt="a sea otter laying on its back looking straight into the camera" />
              <figcaption>What are you lookin' at?</figcaption>
            </figure>
          </section>
          <details>
            <summary>
              How to solve this?
              <span class="icon" aria-label="click to read the answer">👇</span>
            </summary>
            <pre>
              {
                `
                #gallery{
                  display:flex;
                  flex-direction:column;
                  max-width:100%;
                  justify-content: center;
                  align-items: center;
                 }
                 
                 .image{
                   display:flex;
                   flex-direction: column;
                   align-items: center;
                 }
                 
                 #gallery > .image > img{
                  width:400px;
                  height:400px;
                  object-fit:cover;
                  object-position: left 50%;
                 }
            `
          }
            </pre>
            Flexbox is a very malleable tool that can be used to easily organise items. You may find that sometimes items will not centre. This is may be because the parent has no width or has a smaller set width that means the child has little room to move and therefore cannot be made to centre. Block elements can also sometimes impede flexbox from applying centre to elements. This can be changed with the display property. 
           </details>
    </main>
  )
}
