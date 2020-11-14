import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../services/hero/hero.service';
import { Hero } from '../services/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public heros: Array<any> = [];

  basicForm: FormGroup;

  constructor(private _heroService: HeroService) {

  }

  ngOnInit(): void {
    this.basicForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      idEditor: new  FormControl(null, [Validators.required]),
      age: new  FormControl(null, [Validators.required]),
    })
  }

  getHeros() : void 
  {
    this._heroService.getHeros()
        .subscribe(
          (response: any) => {
            this.heros = response;
          },
          (error: any) => {
            alert("Erro ao carregar Herois");
          }
        )
  }

  carregar() : void {
    this.getHeros();
  }

  onSubmit() {
    var hero = new Hero(this.basicForm.controls.name.value,
                          Number(this.basicForm.controls.idEditor.value),
                          this.basicForm.controls.age.value);

    var data = JSON.stringify(hero);

    this._heroService
        .InsertHero(JSON.parse(data))
        .subscribe(
          (response: any) => {
            alert("Dados inseridos com sucesso");
            this.getHeros();
          },
          (error: any) => {
            alert("Erro ao inserir Herois");
          }
        )
  }

}
