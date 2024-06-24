import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);
  
  public arrayProjects = signal<IProjects[]>([
    {
      src: "img/projects/portfolio.png",
      alt: "Projeto portfolio utilizando React",
      creditos: "Carteira ícones criados por Freepik - Flaticon",
      title: "Portfolio principal",
      width: "100px",
      height: "100px",
      description: "Este é meu portfólio principal, criado utilizando React.",
      links: [
        {
          name: "conheça o portfolio",
          href: "https://porfolio-six-zeta.vercel.app/"
        },
        {
          name: "código",
          href: "https://github.com/jeangs8/portfolio"
        }
      ]
    },
    {
      src: "img/projects/blog.png",
      alt: "Projeto Blog Pessoal",
      creditos: "Blog ícones criados por Freepik - Flaticon",
      title: "Blog Pessoal",
      width: "100px",
      height: "100px",
      description: "O BlogPessoal, construído em React, é o front-end de uma plataforma de blog onde os usuários podem criar contas, fazer login e logout, além de gerenciar temas e postagens. Eles podem cadastrar, alterar e deletar temas, assim como criar, editar e excluir postagens. A interface intuitiva facilita a organização e personalização do conteúdo, proporcionando uma experiência agradável e eficiente.",
      links: [
        {
          name: "conheça o projeto",
          href: "http://blog-pessoal-eight.vercel.app/"
        },
        {
          name: "código - front",
          href: "https://github.com/JeanGS8/blogpessoal-front"
        },
        {
          name: "código - back",
          href: "https://github.com/JeanGS8/blog-back"
        }
      ]
    },
    {
      src: "img/projects/snorlax.png",
      alt: "Projeto pokedex",
      creditos: "Pokémon ícones criados por Roundicons Freebies - Flaticon",
      title: "Pokedex",
      width: "100px",
      height: "100px",
      description: "A Pokedex, desenvolvida em Next.js, é uma ferramenta simples que mostra informações básicas de Pokémon das primeiras duas gerações. Com foco nos tipos, altura e peso de cada Pokémon, oferece uma visão direta e útil para os usuários.",
      links: [
        {
          name: "conheça a pokedex",
          href: "https://pokedex-jeangs8.vercel.app/"
        },
        {
          name: "código",
          href: "https://github.com/JeanGS8/pokedex"
        }
      ]
    },
    {
      src: "img/projects/cronometro.png",
      alt: "Projeto cronometro",
      creditos: "Cronômetro ícones criados por Freepik - Flaticon",
      title: "Estudos com cronômetro",
      width: "100px",
      height: "100px",
      description: "É uma aplicação minimalista que permite aos usuários cadastrar tarefas e estimar o tempo necessário para sua conclusão. Depois, podem selecionar uma tarefa para iniciar o cronômetro, sem a necessidade de um banco de dados. É uma solução simples e eficaz para gerenciar o tempo de estudo de forma organizada e produtiva.",
      links: [
        {
          name: "conheça o projeto",
          href: "https://jeangs8.github.io/alura-studies-react/"
        },
        {
          name: "código",
          href: "https://github.com/JeanGS8/alura-studies-react"
        }
      ]
    }
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
