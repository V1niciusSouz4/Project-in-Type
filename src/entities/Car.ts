import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  marca: string;

  @Column({ type: 'decimal', precision: 6, scale: 3, default: 0 })
  preco: number;

  @Column({ type: 'text' })
  categoria: string;

  @Column({ type: 'text', nullable: true })
  imagem: string;
}
