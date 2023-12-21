import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    /*
    GET/users
    GET/users/:id
    POST/users
    PATCH/users/:id
    DELETE/users/:id
    */ 

    // GET /users or /users?role=value
    @Get() 
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    // GET /users/:id
    @Get(':id') 
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    // POST /users 
    @Post() 
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.create(user)
    }

    // PATCH /users/:id
    @Patch(':id') 
    update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.update(id, userUpdate)
    }

    // DELETE /users/:id
    @Delete(':id') 
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }
}
