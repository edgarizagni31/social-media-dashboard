'use strict'

import { handleActiveDark } from './utils/theme.js';

import './styles/normalize.css';
import './styles/style.css';
import './styles/dark.css';

document.addEventListener("DOMContentLoaded", () => {
  const btnActiveDark = document.getElementById('active-dark');
  
  btnActiveDark.checked = false;
  btnActiveDark.addEventListener('click', handleActiveDark);
});
