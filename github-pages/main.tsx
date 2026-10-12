import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from '../app/Game';
import '../app/globals.css';
import '../app/journey.css';
createRoot(document.getElementById('root')!).render(<Game/>);
