import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ClienteEntity } from "./cliente"; // importa tu entidad de cliente

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

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'boolean', default: true })
    activo: boolean;

    @Column({ type: 'varchar' })
    apellidos: string;

    @Column({ type: 'int' })
    telefono: number;

    // Relación uno a muchos (un usuario tiene muchos clientes)
    @OneToMany(() => ClienteEntity, cliente => cliente.usuario)
    clientes: ClienteEntity[];
}
