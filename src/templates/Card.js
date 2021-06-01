'use strict';

import '../styles/card.css';

export const Card = ( borderClass, icon, name, username, followers, { number, increment} ) => {
    const URL_IMGAGES = './assets/images/';
    const view = `
        <article 
          class="dashboard__social-media ${ borderClass }" 
          data-cy="bg-card-dark"
          bg-card-dark
        >
          <div>
            <div class="social-media__item">
              <img src= ${URL_IMGAGES + icon}  alt= ${ name } />
              <p>${ username }</p>
            </div>
            <div class="social-media__data">
              <p>${ followers }</p> 
              <p class="txt-follow" text-follow--dark>FOLLOWERS</p>
            </div>
            <div 
              class="social-media__item"
            >
              <img 
                src=${ increment ?  './assets/images/icon-up.svg' :  './assets/images/icon-down.svg'}  
                alt = "describe icon"
              />
              <p 
                class= ${ increment ? 'text-increment' : 'text-danger'}
                text-dark = ${increment}
              > 
                ${ number } Today 
              </p>
            </div>
          </div>
        </article>
    `

    return view;
}