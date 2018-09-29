var convert={
    exec:(x,u,newu,um)=>{
        if(um=="L"){
            switch(u){
                case("m"):
                    switch(newu){
                        case("cm"):
                            return((100*x)+" cm");
                            break;
                        case("km"):
                            return((0.001*x)+" km");
                            break;
                        case("ft"):
                            return((3.28*x)+" ft");
                            break;
                    }
                    break;
                case("cm"):
                    return((0.01*x)+" m");
                    break;
                case("km"):
                    return((1000*x)+" m");
                    break;
                case(ft):
                    return((0.3048*x)+" m");
                    break;
            }
        }
        else if(um=="T"){
            switch(u){
                case("C"):
                    switch(newu){
                        case("F"):
                            return(((1.8*x)+32)+" F");
                            break;
                        case("K"):
                            return((x+273.15)+" K");
                            break;
                    }
                    break;
                case("F"):
                    switch(newu){
                        case("C"):
                            return(((x-32)/1.8)+" C");
                            break;
                        case("K"):
                            return(((x+459.67)/1.8)+" K");
                            break;
                    }
                    break;
                case("K"):
                    switch(newu){
                        case("C"):
                            return((x-273.15)+" C");
                            break;
                        case("F"):
                            return((((9/5)*x)-459.67)+" F");
                            break;
                    }
                    break;
            }
        }
    }
}
function conversion(medida,unidad,nuevaunidad,unidadmedida){
    return(convert.exec(medida,unidad,nuevaunidad,unidadmedida));
}