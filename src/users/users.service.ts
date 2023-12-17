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
}
