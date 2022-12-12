import { Component } from '@angular/core';

export interface TableCategory {
  id:number;
  img: string;
  name: string;
  description: string;
  slug: string;
  quantity:number;
}
const ELEMENT_DATA: TableCategory[] = [
  {id:1,img:"../../../../../assets/img/icono-camara.png",name:"Remera 1",description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nam, totam quasi odit illo nihil molestias harum repellat officiis molestiae odio accusamus maiores quisquam quos temporibus asperiores, error minus hic?", slug:"018573654685841", quantity:15 },
  {id:2,img:"../../../../../assets/img/icono-camara.png",name:"Remera 1",description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nam, totam quasi odit illo nihil molestias harum repellat officiis molestiae odio accusamus maiores quisquam quos temporibus asperiores, error minus hic?", slug:"018573654685841", quantity:15 },
  {id:3,img:"../../../../../assets/img/icono-camara.png",name:"Remera 1",description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nam, totam quasi odit illo nihil molestias harum repellat officiis molestiae odio accusamus maiores quisquam quos temporibus asperiores, error minus hic?", slug:"018573654685841", quantity:15 },
  {id:4,img:"../../../../../assets/img/icono-camara.png",name:"Remera 1",description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nam, totam quasi odit illo nihil molestias harum repellat officiis molestiae odio accusamus maiores quisquam quos temporibus asperiores, error minus hic?", slug:"018573654685841", quantity:15 },
  {id:5,img:"../../../../../assets/img/icono-camara.png",name:"Remera 1",description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nam, totam quasi odit illo nihil molestias harum repellat officiis molestiae odio accusamus maiores quisquam quos temporibus asperiores, error minus hic?", slug:"018573654685841", quantity:15 }
]

@Component({
  selector: 'app-new-categories',
  templateUrl: './new-categories.component.html',
  styleUrls: ['./new-categories.component.scss']
})
export class NewCategoriesComponent {
  displayedColumns: string[] = [ 'img', 'name', 'description', 'slug', 'quantity', 'update'];
  dataSource = ELEMENT_DATA;
}
