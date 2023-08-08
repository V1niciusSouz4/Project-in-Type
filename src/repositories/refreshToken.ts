import { AppDataSource } from '../data-source';
import { RefreshToken } from '../entities/RefreshToken';

export const refreshTokenRepository = AppDataSource.getRepository(RefreshToken);
