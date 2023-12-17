import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": 'John Doe',
            "email": ' John@april.biz',
            "role": 'INTERN'
        },
        {
            "id": 2,
            "name": 'Ervin Doe',
            "email": 'Shanna@melissa.tv',
            "role": 'INTERN'
        },
        {
            "id": 3,
            "name": 'Clementine Doe',
            "email": 'Nathen@yes.net',
            "role": 'ENGINEER'
        },
        {
            "id": 4,
            "name": 'Patricia Doe',
            "email": 'Juli.Oco@ko.org',
            "role": 'ENGINEER'
        },
        {
            "id": 5,
            "name": 'Chelsey Doe',
            "email": 'Lu@coan.ca',
            "role": 'ADMIN'
        }
    ]

    findAll(role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        return user;
    }  

    create(user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        return newUser;
    }

    update(id: number, updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        const userIndex = this.users.findIndex(user => user.id === id);
        const user = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user;
        });
        return this.findOne(id);
    }

    delete(id: number) {
        const removeUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removeUser;
    }
}
