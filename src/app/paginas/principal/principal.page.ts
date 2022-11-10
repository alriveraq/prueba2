import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  producto  = [
    {
      id: 0,
      title: "Hola",
      description: "Hola",
      price: 0,
      descountprice: 0,
      rating: 0,
      stock: 0,
      brand: "Hola",
      category: "Hola",
      thumbnail: "Hola",
      imagen: "https://images.prismic.io/ionicframeworkcom/50ede1c5-d69d-4c9d-bf0d-4c9ab7c14724_doc-ad-appflow.png?auto=compress,format&rect=0,0,280,200&w=280&h=200"
    },
    {
      id: 1,
      title: "Hola",
      description: "Hola",
      price: 0,
      descountprice: 0,
      rating: 0,
      stock: 0,
      brand: "Hola",
      category: "Hola",
      thumbnail: "Hola",
      imagen: "https://images.prismic.io/ionicframeworkcom/50ede1c5-d69d-4c9d-bf0d-4c9ab7c14724_doc-ad-appflow.png?auto=compress,format&rect=0,0,280,200&w=280&h=200"
    },
    {
      id: 2,
      title: "Hola",
      description: "Hola",
      price: 0,
      descountprice: 0,
      rating: 0,
      stock: 0,
      brand: "Hola",
      category: "Hola",
      thumbnail: "Hola",
      imagen: "https://images.prismic.io/ionicframeworkcom/50ede1c5-d69d-4c9d-bf0d-4c9ab7c14724_doc-ad-appflow.png?auto=compress,format&rect=0,0,280,200&w=280&h=200"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
