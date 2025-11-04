import {CreateUser} from './create-user.model';

export type UpdateUser = Partial<CreateUser> & { isActive?: boolean };
