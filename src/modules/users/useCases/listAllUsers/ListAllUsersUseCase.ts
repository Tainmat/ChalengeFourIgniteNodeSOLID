import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id)

    if(!user){
      throw new Error('Access denied! Log in and try again.')
    } else if(!user.admin){
      throw new Error('Access denied! You need to be an administrator.')
    }

    const users = this.usersRepository.list()
    return users
  }
}

export { ListAllUsersUseCase };
