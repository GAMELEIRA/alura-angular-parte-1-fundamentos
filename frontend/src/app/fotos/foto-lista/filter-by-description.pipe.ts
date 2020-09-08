import { Foto } from './../foto/foto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "filterByDescription" })
export class FilterByDescription implements PipeTransform {

    transform(fotos: Foto[]
        , descriptionQuery: string) {

        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery) {

            return fotos.filter(foto => foto.description.toLowerCase().includes(descriptionQuery));

        } else {
        
            return fotos;
            
        }

    }
}