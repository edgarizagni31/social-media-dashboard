'use strict'

import { handleActiveDark } from './utils/theme.js';
import { displayTemplates } from './utils/displayTemplates.js';

import './style.css';

document.addEventListener("DOMContentLoaded", () => {
  const btnActiveDark = document.getElementById('active-dark');
  
  displayTemplates();
  btnActiveDark.checked = false;
  btnActiveDark.addEventListener('click', handleActiveDark);
});
