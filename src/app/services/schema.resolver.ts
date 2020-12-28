import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { JsonSchemaReaderService } from './json-schema-reader.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SchemaResolver implements Resolve<any> {
    constructor(private jsonSchemaReaderService: JsonSchemaReaderService) { }
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const schemaId = route.data['schemaId'];
        if (schemaId) {
            return this.jsonSchemaReaderService.loadSchema(schemaId).pipe(
                map((schema:any) => schema.schema))
               
        }

    }
}