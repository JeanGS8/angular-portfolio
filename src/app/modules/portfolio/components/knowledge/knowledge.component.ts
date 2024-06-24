import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: "icons/knowledge/angular.svg",
      alt: "icone de conhecimento angular",
      title: "angular"
    },
    {
      src: "icons/knowledge/css3.svg",
      alt: "icone de conhecimento css3",
      title: "CSS3"
    },
    {
      src: "icons/knowledge/html5.svg",
      alt: "icone de conhecimento html5",
      title: "HTML5"
    },
    {
      src: "icons/knowledge/ionic.svg",
      alt: "icone de conhecimento ionic",
      title: "Ionic"
    },
    {
      src: "icons/knowledge/javascript.svg",
      alt: "icone de conhecimento javascript",
      title: "Javascript"
    },
    {
      src: "icons/knowledge/nest.svg",
      alt: "icone de conhecimento nest",
      title: "Nest"
    },
    {
      src: "icons/knowledge/nodejs.svg",
      alt: "icone de conhecimento nodejs",
      title: "NodeJS"
    },
    {
      src: "icons/knowledge/redux.svg",
      alt: "icone de conhecimento redux",
      title: "Redux"
    },
    {
      src: "icons/knowledge/sass.svg",
      alt: "icone de conhecimento sass",
      title: "Sass"
    },
    {
      src: "icons/knowledge/typescript.svg",
      alt: "icone de conhecimento typescript",
      title: "Typescript"
    }
  ])
}
