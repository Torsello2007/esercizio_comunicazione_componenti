import { Component } from '@angular/core';
import { Componente1 } from './componente1/componente1';
import { Post } from './post/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Componente1, Post, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  messaggio = 'Ciao dal componente padre!';
  posts = [
    {
      titolo: 'titolo1',
      testo: 'esempio di testo1'
    },
    {
      titolo: 'titolo2',
      testo: 'esempio di testo2 con un testo abbastanza lungo'
    },
    {
      titolo: 'titolo3',
      testo: 'esempio di testo3'
    }
  ];

  // Funzione per filtrare i post con testo > 20 caratteri
  get postsVisibili() {
    return this.posts.filter(p => p.testo.length <= 20);
  }
  
  // Numero di post visibili
  get postCount() {
    return this.postsVisibili.length;
  }
}