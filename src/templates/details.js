import '../styles/details.css';

export const details = ( desc, icon, number, { percent, increment } ) => {
    const URL_IMGAGES = './assets/images/';
    const view = `
        <article 
          class="description__data" 
          data-cy="bg-card-dark"
          bg-card-dark
        >
            <p 
              class="data__type" 
              data-cy="title-dark"
              title-dark
            > 
              ${ desc } 
            </p>
            <img src=${ URL_IMGAGES + icon } class="data__icon" />
            <p class="data__number"> ${ number  }  </p>
            <p 
              class="data__percent ${ increment ?  'icon-up' : 'icon-down' } "
            >
              <img 
                src=${ increment ? URL_IMGAGES + 'icon-up.svg' : URL_IMGAGES + 'icon-down.svg' } 
              />
              ${ percent }%
            </p>
        </article>
    `

    return view;
}
