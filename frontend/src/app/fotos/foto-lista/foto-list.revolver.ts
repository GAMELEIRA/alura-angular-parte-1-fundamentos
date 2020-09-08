import { Injectable } from '@angular/core';
import { FotoService } from './../foto/foto.service';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Foto } from '../foto/foto';

@Injectable({providedIn : 'root'})
export class FotoListResolver implements Resolve<Observable<Foto[]>> {

    constructor(private service: FotoService){};

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Foto[]> {

        const userName = route.params.userName;

        return this.service.listFromUser(userName);

    }

}