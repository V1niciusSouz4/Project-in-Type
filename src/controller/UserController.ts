import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';
import { BadRequestError } from '../helpers/api-errors';

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password, perfil } = req.body;

    const newUser = userRepository.create({
      name,
      email,
      password,
      perfil,
    });

    await userRepository.save(newUser);

    return res
      .status(200)
      .json({ message: 'User created with sucess!!', newUser });
  }

  async list(req: Request, res: Response) {
    const users = await userRepository.find({
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
      },
    });
    if (!users) throw new BadRequestError('Cars not found');
    return res.status(200).json(users);
  }
}
