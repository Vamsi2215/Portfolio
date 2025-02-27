import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styles: ['invert  { filter: invert(1) }']
})
export class SkillsComponent {

  frontends = [
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angular/angular-original.svg', isInvertLogo: false },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false },
    { name: 'Angular Material', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angularmaterial/angularmaterial-original.svg', isInvertLogo: false },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg', isInvertLogo: false },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg', isInvertLogo: false },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg', isInvertLogo: false }
  ];

  backends = [
    { name: 'Java', logo: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000', isInvertLogo: false },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg', isInvertLogo: false },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', isInvertLogo: true },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/flask/flask-original.svg', isInvertLogo: true }
  ];

  databases = [
    { name: 'MS SQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', isInvertLogo: false },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg', isInvertLogo: false },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false }
  ];

  opss = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg', isInvertLogo: false },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', isInvertLogo: false },
    { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/netlify/netlify-original.svg', isInvertLogo: false },
    { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/githubactions/githubactions-original.svg', isInvertLogo: false },
    { name: 'Postman', logo: 'https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000', isInvertLogo: false },
    { name: 'Kurbernetes', logo: 'https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000', isInvertLogo: false },
  ];

}
