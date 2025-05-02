

import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("servicios")
export class ServicioEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 50 })
    nombre: string;

    @Column({ type: 'varchar', length: 50 })
    codigo: string;

    @Column({ type: 'varchar', length: 50 })
    tipo_corte: string;

    @Column({ type: 'varchar', length: 50 })
    valor: string;

    @Column({ type: 'varchar' })
    estado: string
};
