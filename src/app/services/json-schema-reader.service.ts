import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class JsonSchemaReaderService {

    private constructor(private http: HttpClient) {

    }
    loadSchema(schemaId: string): Observable<string> {
        return this.http.get<string>(`${environment.apiUrl}json-schemas?schemaId=${schemaId}`);
    }
}