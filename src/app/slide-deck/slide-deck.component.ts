import { Component, Input, OnInit } from '@angular/core';

import 'reveal.js/lib/js/classList.js';
import 'reveal.js/lib/js/head.min.js';
import 'reveal.js/lib/js/html5shiv.js';
import * as Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
import 'object-partners-revealjs-theme';
import * as highlight from 'highlight.js';
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
    // hack-y hack-y hack
    setTimeout(() => {
      Reveal.initialize({
        history: true,
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
    }, 1);
  }
}
