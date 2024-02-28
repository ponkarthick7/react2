let name ;

const getname = (cb)=>{
setTimeout (()=>{
    name="Ponkarthick"
cb();
},3000)
}

const greet = ()=>{
    console.log(`Hello ${name}`);
}

getname(greet);