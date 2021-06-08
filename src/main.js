'use strict'

import { handleActiveDark } from './utils/theme.js';

import './styles/normalize.css';
import './styles/style.css';
import './styles/dark.css';

document.getElementById('active-dark').addEventListener('click', handleActiveDark);