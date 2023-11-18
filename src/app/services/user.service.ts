import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  link = 'https://apilb.tridevs.net/api/Users/login';
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {
    this.isUserLoggedIn(); // Vérifie si l'utilisateur est connecté au démarrage de l'application
  }

  isLoggedIn$(): boolean {
    return localStorage.getItem('user') !== null;
  }

  isUserLoggedIn(): void {
    if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('user');
      this.loggedIn.next(user !== null);
    } else {
      // Handle the case where localStorage is not available (e.g., in a server-side environment)
      console.log('localStorage is not available');
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
  }
  login(credentials: any) {
    return this.httpClient.post(this.link, credentials);
  }

  // login(credentials: any): void {
  //   // Ici, vous pouvez ajouter le code pour la connexion avec un backend si nécessaire
  //   // Après une connexion réussie, stockez les informations de l'utilisateur dans le localStorage
  //   localStorage.setItem(
  //     'user',
  //     JSON.stringify({ id: 1, email: credentials.email })
  //   );
  //   this.isUserLoggedIn();
  // }
}
