import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class UsuarioEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 50 })
    nombres: string;

    @Column({ type: 'varchar', length: 50 })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    rol: string;

    @Column({ type: 'varchar', length: 50 })
    password: string;

    @Column({ type: 'boolean', default: true })
    activo: boolean;
};

