import { Request, Response } from 'express';
import { carRepository } from '../repositories/carRepository';
import { BadRequestError } from '../helpers/api-errors';

export class CarController {
  async create(req: Request, res: Response) {
    const { name, marca, preco, categoria, imagem } = req.body;

    const newCar = carRepository.create({
      name,
      marca,
      preco,
      categoria,
      imagem,
    });

    await carRepository.save(newCar);

    return res
      .status(200)
      .json({ message: 'Car created with succes!!', newCar });
  }

  async list(req: Request, res: Response) {
    const cars = await carRepository.find();

    if (!cars) throw new BadRequestError('Cars not found');

    return res.status(200).json(cars);
  }
}
