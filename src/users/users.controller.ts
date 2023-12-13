import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    GET/users
    GET/users/:id
    POST/users
    PATCH/users/:id
    PUT/users/:id
    DELETE/users/:id
    */ 

    @Get() // GET/users
    findAll() {
        return [];
    }

    @Get(':id') // GET/users/:id
    findOne(@Param('id') id: string) {
        return {id};
    }

    // @Get('interns') // GET/users/interns
    // findAllInterns() {
    //     return [];
    // }

    @Post() // POST/users
    create(@Body() user: {}){      
        return user;
    }   
}
