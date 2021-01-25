import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonSharedService {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
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

}
