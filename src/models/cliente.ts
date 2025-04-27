import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UsuarioEntity } from "./usuario";

@Entity("clientes")
export class ClienteEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 15 }) // teléfono como texto
    telefono: string;

    // Clave foránea
    @ManyToOne(() => UsuarioEntity, (usuario: { clientes: any; }) => usuario.clientes)
    @JoinColumn({ name: 'usuario_id' }) // nombre de la columna FK en la tabla clientes
    usuario: UsuarioEntity;
}
