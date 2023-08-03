import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password, perfil } = req.body;

    try {
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
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error!' });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const users = await userRepository.find({
        select: {
          id: true,
          name: true,
          email: true,
          password: false,
        },
      });

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error!' });
    }
  }
}
