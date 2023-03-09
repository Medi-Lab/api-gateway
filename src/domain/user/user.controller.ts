import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto, UpdateUserDto} from "./dto";
import {DefaultParam} from "../../core";
import {constants} from "../../core/constants";
import {UserServiceInterface} from "./interfaces/user.service.interface";

@ApiTags('Користувач')
@Controller('user')
export class UserController {
    constructor(
        @Inject(constants.tokens.USER_SERVICE_TOKEN)
        private readonly userService: UserServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Створити користувача'})
    @ApiResponse({status: 200})
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @ApiOperation({summary: 'Редагувати користувача'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateUser(@Param() {id}: DefaultParam, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }

    @ApiOperation({summary: 'Отримати користувача'})
    @ApiResponse({status: 200})
    @Get(':id')
    getUser(@Param() {id}: DefaultParam) {
        return this.userService.getUserById(id);
    }

    @ApiOperation({summary: 'Отримати користувачів'})
    @ApiResponse({status: 200})
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @ApiOperation({summary: 'Видалити користувача'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteUser(@Param() {id}: DefaultParam) {
        return this.userService.deleteUserById(id);
    }
}
