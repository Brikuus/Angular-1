import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {

  // Injection d'HttpClient
  private http = inject(HttpClient);

  // Signals pour gérer l'état
  users = signal<User[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  // Appel automatique au démarrage du composant
  ngOnInit() {
    this.loadUsers();
  }

  // Méthode pour charger les utilisateurs
  async loadUsers() {
    try {
      this.isLoading.set(true);
      this.error.set(null);

      // Call HTTP avec l'Observable transformé en Promise
      const users = await firstValueFrom(
        this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      );
      // mise à jour du signal "users"
      this.users.set(users);
    } catch (err) {
      this.error.set('Erreur lors du chargement des utilisateurs');
      console.error('Erreur API:', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  // Pour actualiser les données (pas optimisé mais nous verrons ça plus tard)
  async refresh() {
    await this.loadUsers();
  }

}
