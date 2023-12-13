import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { userInfo } from 'os';

@Controller('users')
export class UsersController {
    /*
    GET/users
    GET/users/:id
    POST/users
    PATCH/users/:id
    DELETE/users/:id
    */ 

    // GET/users
    @Get() 
    findAll() {
        return [];
    }

    // GET/users/:id
    @Get(':id') 
    findOne(@Param('id') id: string) {
        return {id};
    }

    // POST/users
    @Post() 
    create(@Body() user: {}){      
        return user;
    }   

    // PATCH/users/:id
    @Patch(':id') 
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return {id, ...userUpdate};
    }
}
