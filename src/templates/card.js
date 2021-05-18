'use strict';

import '../styles/card.css';

export const card = ( borderClass, icon, name, username, followers, { number, increment} ) => {
    const URL_IMGAGES = './assets/images/';
    const view = `
        <article 
          class="dashboard__social-media ${ borderClass }" 
          data-cy="bg-card"
          bg-card-dark
        >
          <div>
            <p class="social-media__user">
              <img src= ${URL_IMGAGES + icon}  alt= ${ name } />
              ${ username }
            </p>
            <p class="social-media__data">
              ${ followers }
              <span class="txt-follow">FOLLOWERS</span>
            </p>
            <p 
                class="social-media__today 
                ${ increment ? 'icon-up': 'icon-down' }"
            >
              <img 
                src=${ increment ?  './assets/images/icon-up.svg' :  './assets/images/icon-down.svg'}  
              />
              ${ number } Today
            </p>
          </div>
        </article>
    `

    return view;
}