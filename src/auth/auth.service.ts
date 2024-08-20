import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { RequestUserDto } from './dto/request.user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async login(body: { id: string }) {
    const user = await this.userRepository.findUserByKakaoId(body.id);
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  async register(body: RequestUserDto) {
    this.userRepository.createNewUser(body);
  }
}
