export const handleActiveDark = () => {
  const BG_DARK_ATTRIBUTES = document.querySelectorAll('[bg-dark]');
  const TITLE_DARK_ATTRIBUTES = document.querySelectorAll('[title-dark]');
  const TEXT_DARK_ATTRIBUTES = document.querySelectorAll('[text-dark]');
  const TEXT_FOLLOW_DARK = document.querySelectorAll('[text-follow--dark]');
  const BG_CARD_DARK_ATTRIBUTES = document.querySelectorAll('[bg-card-dark]');

  BG_DARK_ATTRIBUTES.forEach( ( value ) => {
    value.classList.toggle('bg-dark');
  })

  TITLE_DARK_ATTRIBUTES.forEach( ( value ) => {
    value.classList.toggle('title-dark')
  })

  TEXT_DARK_ATTRIBUTES.forEach( (value) => {
    const increment = value.getAttribute('text-dark');
    if ( increment == "true" ) {
      value.classList.toggle('text-increment--dark');
    } else {
      value.classList.toggle('text-danger--dark');
    }
  })

  TEXT_FOLLOW_DARK.forEach( (value) => {
    value.classList.toggle('txt-follow--dark');
  });

  BG_CARD_DARK_ATTRIBUTES.forEach( ( value ) => {
    value.classList.toggle('bg-card-dark')
  })
};