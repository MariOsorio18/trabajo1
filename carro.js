const FRM_BANCO = document.querySelector("#frmCarro")
FRM_BANCO.addEventListener("submit", calcularCostoVenta)
function calcularCostoVenta(event){
    event.preventDefault()
    const nombre=document.querySelector("#txtNombre").value
    const marca=document.querySelector("#txtOrigenCarro").value
    const origen= document.querySelector("#selectOrigenCarro").value;
    const costo= document.querySelector("#txtCarro").value;
    
    if (origen===""||costo===""){
        alert (" De favor llenar todos los datos, haci poder realizar los calculos correcatamente para la venta de carros*_*");
        return;
    }
                               // Como primera operacion se le aumentara un 45% al costo 

 switch ( origen) {
    case "Alemania":
        aumento=0.20
        
        break;
    case "Japon":
        aumento=0.30
        
        break;
     case "Italia":
        aumento=0.15
        
        break;
    case "Estados Unidos":
        aumento=0.08
 }
   
 
        const impuesto =parseFloat (costo) *(0.45);
        const  precioVenta =parseFloat (costo)+(impuesto );
        const precioGen=parseFloat (precioVenta)*(aumento);
        const costoCompra=parseFloat (precioVenta)+(precioGen);
        const general=parseFloat (costoCompra)*(0.16);
        const venta=parseFloat (costoCompra)+(general);
 
let imprimirRes = document.getElementById("imprimirResultado") 
imprimirRes.textContent=

"Sea usted bienvenido a esta su agencia *Tronco Movil* a continuacion se mostrara su comprobante por la compra del carro"+
" ____Es un gusto "+ nombre+
"::_____ La marca de su carro es: "+marca+
":: ____El origen de su carro es : " + origen+
":: ____Su Impuesto del caro es de :"+impuesto+
"::___La suma del Aumento con el Costo es de:"+precioVenta+
":: ____El porcentaje % aumentado por su origen es :"+precioGen+
":: ___La suma del aumento por origen y el subtotal es de : "+costoCompra+
"::____El carro tiene un IVA de :"+ general+
":: ____En total el Costo General para la venta de carro es de :"+venta;

}class MagicParticle{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.size=random(10,30);
        this.baseColor=color(random([
            "#e84e66","#67c69e",
            "#edf1f4","#80acc9",
            "#73a8b0", "#fe817f",
            "#68d2a4", "#1d203f",
            "#c9a30d"
        ])
        ),
           update()
            this.x+=this.speedX;
            this.y+=this.speedY;
            this.opacity-=10;
        }
    }



