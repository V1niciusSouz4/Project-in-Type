import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';
import { BadRequestError } from '../helpers/api-errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { refreshTokenRepository } from '../repositories/refreshToken';
import { AppDataSource } from '../data-source';

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password, perfil } = req.body;

    const userExists = await userRepository.findOneBy({ email });
    if (userExists) throw new BadRequestError('User already exists');

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      name,
      email,
      password: hashPassword,
      perfil,
    });

    await userRepository.save(newUser);

    const { password: senha, ...user } = newUser;

    return res
      .status(200)
      .json({ message: 'User created with sucess!!', user });
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

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });
    if (!user) throw new BadRequestError('Email or password invalid!');

    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword)
      throw new BadRequestError('Email or password invalid!');
    process.env.JWT_SECRET;

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? '', {
      expiresIn: '5m',
    });

    const refreshToken = refreshTokenRepository.create({
      hashedToken: token,
      userId: { id: user.id },
    });

    const refreshTokenExists = await refreshTokenRepository.find({
      where: { userId: { id: user.id } },
    });

    if (refreshTokenExists) {
      await AppDataSource.createQueryBuilder()
        .update(refreshTokenRepository)
        .set({ revoked: true })
        .where('user_id = user.id', { id: refreshToken.id })
        .execute();
    }

    refreshTokenRepository.save(refreshToken);

    return res.status(200).json({ token: token });
  }
}
