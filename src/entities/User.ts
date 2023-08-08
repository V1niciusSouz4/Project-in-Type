import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RefreshToken } from './RefreshToken';

export type UserRole = 'admin' | 'client' | 'user';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'client', 'user'],
    default: 'user',
  })
  perfil: UserRole;

  @OneToMany(() => RefreshToken, refreshToken => refreshToken.userId)
  refreshTokens: RefreshToken[];
  static id: any;
}
