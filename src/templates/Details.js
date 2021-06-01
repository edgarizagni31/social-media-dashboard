import '../styles/details.css';

export const Details = ( desc, icon, iconName, number, { percent, increment } ) => {
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
            <img src=${ URL_IMGAGES + icon } class="data__icon"  alt = ${iconName}/>
            <p class="data__number"> ${ number  }  </p>
            <div 
              class="data__percent"
            >
              <img 
                src=${ increment ? URL_IMGAGES + 'icon-up.svg' : URL_IMGAGES + 'icon-down.svg' } 
                class = "mr-5"
                alt="describe icon"
              />
                <p class = ${ increment ? 'text-increment' : 'text-danger'} text-dark = ${increment}> ${ percent }% </p>
            </div>
        </article>
    `

    return view;
}
