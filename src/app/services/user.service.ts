import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private apiUrl = 'http://localhost:8080/users';

    constructor(private http: HttpClient) { }

    getImagePfp(id: any): Observable<string> {
        return this.http.get<string>(`${this.apiUrl}/imageProfileByUserId/${id}`);
    }

    putImagePfp(id: any, idImage: any): Observable<string> {
        const token = localStorage.getItem('authToken');
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.put<string>(`${this.apiUrl}/updateImageProfileById/${id}`,idImage, { headers});
    }
}
