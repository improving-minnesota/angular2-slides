import { Component, Input, OnInit } from '@angular/core';

import 'reveal.js/css/reveal.css';
import 'object-partners-revealjs-theme';
import 'highlight.js/styles/monokai.css';

@Component({
  selector: 'opi-slide-deck',
  templateUrl: './slide-deck.component.pug',
  styleUrls: ['./slide-deck.component.css']
})
export class SlideDeckComponent implements OnInit {
  @Input() slides: any[][];

  constructor() { }

  ngOnInit() {
    require.ensure([
      'reveal.js',
      'reveal.js/lib/js/classList.js',
      'reveal.js/lib/js/head.min.js',
      'reveal.js/lib/js/html5shiv.js',
      'highlight.js'
    ], () => {
      const Reveal = require('reveal.js');
      require('reveal.js/lib/js/classList.js');
      require('reveal.js/lib/js/head.min.js');
      require('reveal.js/lib/js/html5shiv.js');
      const highlight = require('highlight.js');

      Reveal.initialize({
        history: true,
        margin: 0.25,
        dependencies: [
          {
            src: '',
            async: true,
            callback() {
              highlight.initHighlightingOnLoad();
            }
          }
        ]
      });
    });
  }
}
