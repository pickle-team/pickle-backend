import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { RequestUserDto } from './dto/request.user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findUserByKakaoId(id: string) {
    const user: UserDto = await this.userModel.findOne({ kakaoid: id });
    if (user) {
      return user;
    } else return null;
  }

  async createNewUser(body: RequestUserDto) {
    await this.userModel.create(body);
  }
}
