import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { ClienteEntity } from "./cliente";
import { ServicioEntity } from "./servicio";

@Entity("citas")
export class CitaEntity extends BaseEntity {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(() => ClienteEntity, { eager: true })
    @JoinColumn({ name: "cliente_id" })
    cliente: ClienteEntity;

    @ManyToOne(() => ServicioEntity, { eager: true })
    @JoinColumn({ name: "servicio_id" })
    servicio: ServicioEntity;

    @Column({ type: "date" })
    fecha: string;

    @Column({ type: "time" })
    hora: string;

    @Column({ type: "varchar", length: 20, default: "pendiente" })
    estado: string;
}
