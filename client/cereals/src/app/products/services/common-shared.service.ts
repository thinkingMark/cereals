import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { request } from 'http';

@Injectable({
  providedIn: 'root'
})
export class CommonSharedService {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient) {
                
  }

  redirectToPage(url: string) {
    window.open(url, "_blank");
  }

  appendQueryParams(params: any) {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: params,
        queryParamsHandling: 'merge'
      });
  }

  getData(request : any) 
  {
    const uri = `http://localhost:5000/api/Cereals/getProducts/?request=${request}`;
    const encoded = encodeURI(uri);
    console.log(encoded);
    return this.http.get(encoded);
  }

}
