export interface ICliente {
    cedula:string,
    nombres:string,
    direccion:string,
    telefono:string,
}

export interface IProducto {
    codigo:string,
    nombre:string,
    precioU:number,
    estado:Boolean

}

export interface IDet_Factura {
    Producto:IProducto,
    cantidad:number,
    total:number

}
export interface IFactura {
    numFac:string,
    Cliente:ICliente,
    fechaFac:Date,
    detalleFactura:IDet_Factura[],
    subTotalFac:number,
    ivaFac:number,
    totalFac:number
}

export interface IMenu {
    icono:string,
    nombre:string,
    pagina:string
}
