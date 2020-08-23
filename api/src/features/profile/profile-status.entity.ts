import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_status')
export class ProfileStatus {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    public status: string;
}