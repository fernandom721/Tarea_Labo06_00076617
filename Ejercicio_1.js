product={
    code:"",
    description:"",
    type:"",
    pcompra:"",
    pventa:"",
    stock:""
}
function tienda(){
    
    var productos=[
        (product.code="01",product.description="m&m",product.type="Chocolate",product.pcompra="0.75",product.pventa="1.00",product.stock="10"),
        (product.code="02",product.description="Clorets",product.type="Chicle de menta",product.pcompra="0.15",product.pventa="0.25",product.stock="0")
    ];
    var ventas=[1,0.75,2.5,1.5,2,2,3];
    var menu1=prompt("Menu tienda La Jefecita"+"\n"+"Que desea hacer:"
    +"\n"+"1)Agregar Producto"+"\n"+"2)Modificar stock"+"\n"+"3)Mostrar promedio de ventas"
    +"\n"+"4)Mostrar productos con stock 0"+"\n"+"5)Salir");
    switch(menu1){
        case "1":
            let cod=prompt("Codigo del producto");
            let des=prompt("Descripcion del producto");
            let tipo=prompt("Tipo de producto");
            let precioC=prompt("Precio de Compra");
            let precioV=prompt("Precio de Venta");
            let cantidad=prompt("Stock");
            product.code=cod;
            product.description=des;
            product.type=tipo;
            product.pcompra=precioC;
            product.pventa=precioV;
            product.stock=cantidad;
            productos.push=product;
            console.log("Producto Agregado");
            tienda();
            break;
        case "2":
            let x=prompt("Seleccione el Codigo del Producto a modificar");
            for(let i of productos){
                if(x==i.stock){
                    let nstock=prompt("Ingrese el nuevo stock");
                    product[i].product.cod=nstock;
                }
            }
            tienda();
            break;
        case "3":
            let cont=0;
            for(let i of ventas){
                cont+=i;
            }
            console.log("El promedio de ventas es: "+(cont/ventas.length));
            tienda();
            break;
        case "4":
            for (let i of productos){
                if(i.product.stock==0)
                console.log(i.product.des);
            }
            tienda();
            break;
        case "5":
            console.log("Gracias por Participar");
            break;
        default:
            tienda();
            console.log("Coloque un numero valido");
            break;
    }
}