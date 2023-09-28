import { UserInfoBadRequestError } from 'src/common/error/user-info-bad-request.exception';
import { UsersService } from '../service/users.service';

export class GetMeUseCase {
  constructor(private readonly usersService: UsersService) {}

  async main(userId: number) {
    console.log(`1`);
    try {
      if (isNaN(userId)) throw UserInfoBadRequestError;
      console.log(this.usersService);

      const userInfo = this.usersService.findMe(userId);

      console.log(`3`);
      console.log(userInfo);
      return userInfo;
    } catch (error) {
      console.log(error);
      console.log(4);
      return error;
    }
  }
}
