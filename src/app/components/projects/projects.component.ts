import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Banking Management System',
      description: [
        'Utilized SQL normalization and ER diagrams to design and deploy a robust relational database using MySQL, achieving comprehensive data analysis capabilities with 30+ tables containing over 1 million records. Simultaneously, integrated MongoDB to develop a Data Lake for over 1 million unstructured records, enhancing our data storage solutions.',
        'Enhanced database functionality by incorporating stored procedures, triggers, views, user-defined functions, encryption, and non-clustered indexes. Optimized data retrieval through complex CTE SQL queries, improving Turnaround Time (TAT) by 25%. Utilized the Spring MVC framework for database connectivity and executed SQL queries to generate over 10 detailed reports in Power BI, facilitating better decision-making.'
      ],
      techStack: ['MySQL', 'MongoDB', 'SQL Server', 'Spring MVC', 'Power BI'],
      image: '/assets/bank.webp',
      aosImage: 'fade-right'
    },
    {
      title: 'Enhanced Healthcare for Cancer Resources Management System',
      description: [
        'Implemented a just-in-time inventory system, reducing medical supply lead times by 95.26% and ensuring quicker access to critical resources during cancer treatment crises. Additionally, deployed a cloud-based tracking system that increased resource utilization efficiency by 93.29%, enabling the redistribution of 10,000 surplus medical units across healthcare facilities, and expanded the healthcare provider and supplier network to improve procurement agility.',
        'Streamlined logistics and inventory management workflows to achieve faster response times and reduce operational costs across multiple healthcare sites. Optimized resource allocation to improve overall crisis preparedness, allowing healthcare facilities to respond more effectively to sudden increases in patient needs during health emergencies.'
      ],
      techStack: ['Cloud-based Tracking System', 'Healthcare Provider Network Interfaces', 'Logistics Management Software', 'Cloud Storage and Computing Platforms','Inventory Management System'],
      image: '/assets/cancer.webp',
      aosImage: 'fade-left'
    },
    {
      title: 'Quick Service Food Delivery with React.js',
      description: [
        'Spearheaded the development of a React.js web application that enhanced order processing efficiency and user interface responsiveness by 35%. This integration facilitated real-time interactions and streamlined operations, leading to a 20% increase in order fulfillment rates and a 15% reduction in customer support tickets.',
        'Improved system uptime and reliability to 99% through robust cloud solutions and real-time data synchronization. This upgrade ensured seamless order placement and management, significantly enhancing the precision and speed of food delivery services and bolstering customer loyalty.'
      ],
      techStack: ['React', 'Firebase'],

      image: '/assets/food.webp',
      aosImage: 'fade-right'
    },
  ];
}


