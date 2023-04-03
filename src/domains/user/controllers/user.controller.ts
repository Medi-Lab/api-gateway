import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto, UpdateUserDto} from "../dto";
import {DefaultParam} from "../../../core";
import {constants} from "../../../core/constants";
import {UserServiceInterface} from "../interfaces";
import {QueryDb} from "../../../core/decorators/query-db.decorator";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

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
    createUser(@Body() createUserDto: CreateUserDto): Observable<ResponseInterface | CreateUserDto> {
        console.log("createUserDto", createUserDto)
        if (createUserDto.birthday)
            createUserDto.birthday = new Date(createUserDto.birthday);
        console.log(createUserDto.birthday);
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
    getUsers(@QueryDb() query) {
        return this.userService.getUsers(query);
    }

    @ApiOperation({summary: 'Видалити користувача'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteUser(@Param() {id}: DefaultParam) {
        return this.userService.deleteUserById(id);
    }
}
