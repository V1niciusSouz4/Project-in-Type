import { Request, Response } from 'express';
import { carRepository } from '../repositories/carRepository';

export class CarController {
  async create(req: Request, res: Response) {
    const { name, marca, preco, categoria, imagem } = req.body;

    try {
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
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error!' });
    }
  }
}
