import { card } from '../templates/card.js'; 
import { details } from '../templates/details.js';

export const displayTemplates = () => {
  const cardsContent = document.getElementById('cards');
  const detailsContent = document.getElementById('details');
  // card elements 
  const cardFb = card('border-fb', 'icon-facebook.svg','facebook', '@nathanf', '1987', { number: 12, increment: true} );
  const cardTw = card('border-tw', 'icon-twitter.svg', 'twitter', '@nathanf',  '1044', { number: 99, increment: true} );
  const cardIg = card('border-ig', 'icon-instagram.svg','instagram', '@realnathanf', '11K', { number: 1099, increment: true} );
  const cardYt = card('border-yt', 'icon-youtube.svg','facebook', 'Nathan F.', '8239', { number: 144, increment: false} );

  // details elements 
  const detailsFb = details( 'Page Views', 'icon-facebook.svg','87', { percent: 3, increment: true } ) + 
    details( 'Likes', 'icon-facebook.svg', '52', { percent: 2, increment: false } );

  const detailsIg = details( 'Profile Views', 'icon-instagram.svg', '52K' ,{ percent: 1375, increment: true } ) + 
    details( 'Likes', 'icon-instagram.svg', '5462', { percent: 2357, increment: true } );

  const detailsTw = details( 'Retweets', 'icon-instagram.svg', '117', { percent: 117, increment: true} ) +
    details( 'Likes', 'icon-instagram.svg', '507', { percent: 554, increment: true} );

  const detailsYt = details( 'Likes', 'icon-youtube.svg', '107', { percent: 19, increment: false } ) +
    details( 'Total Views', 'icon-youtube.svg', '1407', { percent: 12, increment: true } );

  cardsContent.innerHTML = cardFb + cardTw + cardIg + cardYt;
  detailsContent.innerHTML = detailsFb + detailsIg + detailsTw + detailsYt;
}