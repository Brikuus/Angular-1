import { Injectable } from '@angular/core';
import { BaseApi } from '../../../shared/services/base.api';

import {CreateUser} from '../models/create-user.model';
import {UpdateUser} from '../models/update-user.model';
import {User} from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserApi extends BaseApi {
  private readonly endpoint = '/users';

  async getUsers(): Promise<User[]> {
    return this.get<User[]>(this.endpoint);
  }

  async getUserById(id: string): Promise<User> {
    return this.get<User>(`${this.endpoint}/${id}`);
  }

  async createUser(user: CreateUser): Promise<User> {
    return this.post<User>(this.endpoint, user);
  }

  async updateUser(id: string, user: UpdateUser): Promise<User> {
    return this.put<User>(`${this.endpoint}/${id}`, user);
  }

  async deleteUser(id: string): Promise<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }
}
