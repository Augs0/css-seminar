import React from 'react';

export default function Position() {

  return (
    <main id="main">
        <a href="/">Home</a>
        <section>
        <h2>Instructions</h2>
          <p>There are two tasks here. One, centre the pink div inside of the purple div. You should make us of the position property and either margin OR transform to achieve this.</p>
          <p>Task two involves centering the yellow text box inside of the blue text box. For this task please make use of position and transform. There may be additional properties you need.</p>
          </section>
         <section id="div-section">
         <h2>Centre elements with `position` and `transform`</h2>
          <div className="purpleDiv div">
            <div className="pinkDiv div"></div>
          </div>
        </section>
        <section id="div-text-section">
          <div className="blueDiv div">
            <div className="yellowDiv">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto error reiciendis quia quas aliquam hic veniam numquam, harum facere doloremque?
            </div>
          </div>
        </section>
          <details>
            <summary>
              How to solve this?
              <span class="icon" aria-label="click to read the answer">👇</span>
            </summary>
            <pre>
              {
                `
                .purpleDiv{
                  position:relative;
                  margin-bottom:20px;
                  background-color:rebeccapurple;
                  width:400px;
                  height:400px;
                }
                
                .pinkDiv{
                  background-color: pink;
                  width:300px;
                  height:300px;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  /* transform: translate(-50%, -50%); you could also achieve it with transform instead */
                  margin: -150px 0 0 -150px;
                }
                
                .blueDiv{
                  background-color:lightblue;
                  position:relative;
                  width:400px;
                  height:400px;
                  margin-bottom:20px;
                }
                
                .yellowDiv{
                  background-color:yellow;
                  color:black;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
            `
          }
            </pre>
            Using position: relative and position: absolute on the child is a common tactic for centering elements. Relative positioning by itself rarely has any outcome, but combined with absolute children, we can move and resize elements RELATIVE to their parent instead of the page i.e. an img 50% of its parent size rather than the page size. Relative also allows us to use the properties top, left, right and bottom to move elements. When we use 50% on top and left, we move the top corner of our element to the centre of its parent. We then need to use either transform translate OR negative margins to adjust. Negative margins are a little trickier and require a little calculation. The common suggestion is that the margins add up to the width of the element in question i.e. 150 + 150 = 300 - the width of the div. If you do not know the width of the element ahead of time e.g. a div or another element with an unknown amount of text, then you must use the transform translate solution because we don't have the measurements to create the correct negative margins!
           </details>
    </main>
  )
}
