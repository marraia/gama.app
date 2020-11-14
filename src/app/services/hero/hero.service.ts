import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ProviderService } from '../providers/provider.service';


@Injectable()
export class HeroService extends ProviderService  {

  private http: HttpClient;

  constructor(_http: HttpClient) {
    super("hero");
    this.http = _http;
  }
  
  public getHeros() : Observable<any>
  {
     return this.http.get<any>(`${this.url}`)
  }

  public getHerosById(id: number) : Observable<any>
  {
     return this.http.get<any>(`${this.url}/${id}`);
  }

  public InsertHero(data: any) : Observable<any>
  {
     return this.http.post(`${this.url}`, data, {});
  }
}

