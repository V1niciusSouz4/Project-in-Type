import { AppDataSource } from '../data-source';
import { Car } from '../entities/Car';

export const carRepository = AppDataSource.getRepository(Car);
