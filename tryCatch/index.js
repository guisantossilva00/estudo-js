function soma (x, y) {
    if (typeof x !== 'number' || typeof x !== 'number'){
        // throw("x e y precisam ser números.");
        throw new Error("x e y precisam ser números.");
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma("1", 2));
} catch(err) {
    console.log(err);
    console.log("Alguma coisa mais amigável pro usuário.")
}

try {
    // console.log(a);
    console.log("Abri um arquivo")
    console.log("Manipulei o arquivo")
    console.log("Fechei o arquivo")

    try {
        console.log(b);
    } catch (e) {
        console.log("Deu erro");
    } finally {
        console.log("Também sou finally.");
    }
} catch (err) {
    console.log("Tratando o erro");
} finally {
    console.log("FINALLY: Eu sempre sou executado");
}

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError("Esperando instância de Date."); 
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date;
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    // Tratar erro
    console.log(e);
} finally {
    console.log("Tenha um bom dia.")
}