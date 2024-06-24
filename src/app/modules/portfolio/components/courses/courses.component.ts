import { Component, signal } from '@angular/core';
import { ICourses } from '../../interface/ICourses.interface';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  public arrayCourses = signal<ICourses[]>([
    {
      summary: {
        strong: "Análise e desenvolvimento de sistemas",
        p: "ago 2022 - present"
      },
      text: "<p>Este curso me proporcionou uma ampla compreensão dos fundamentos da programação, abordando conceitos de lógica e linguagens. Além disso, pude explorar a modelagem de bancos de dados, consultas SQL e relacionamentos. Também adquiri conhecimentos em programação orientada a objetos, com foco na aplicação em sistemas complexos. A arquitetura de software foi abordada, incluindo padrões de design, MVC e boas práticas de desenvolvimento. No contexto do desenvolvimento móvel, tive a oportunidade de estudar Android, interfaces e recursos relevantes. Além disso, o curso cobriu controle de versão e gerenciamento de projetos. Em infraestrutura, explorei conceitos de redes, servidores, virtualização e computação em nuvem utilizando a AWS.</p>"
    },
    {
      summary: {
        strong: "Bootcamp Full-Stack JavaScript",
        p: "ago 2022 - jan 2023"
      },
      text: "<p>Participando do projeto Programadores Cariocas da prefeitura do Rio de Janeiro, fui selecionado para integrar o Bootcamp Full-Stack da Generation Brasil. Como parte do curso, contribuímos para a construção em equipe de um projeto de conclusão sobre um e-commerce alinhado com a ODS 02 da ONU, visando combater a fome, promover segurança alimentar e sustentabilidade na agricultura. Utilizamos diversas tecnologias e metodologias, incluindo lógica de programação com Javascript e Typescript, construção de API Rest com Node.js, NestJS, Jest, Swagger e JWT, manipulação de banco de dados Mysql e TypeORM, desenvolvimento de interfaces com React, Material UI e Redux, além de realização de deploy com Render e Vercel. Também aprimoramos habilidades em Git Workflow e participamos de dinâmicas simulando o ambiente de trabalho de desenvolvedor. Essa experiência enriqueceu minha competência em diversas áreas, incluindo React.js, Node.js, TypeScript, MySQL, Redux, e muito mais.</p>"
    }
  ])
}
