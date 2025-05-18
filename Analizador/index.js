// Librerías y módulos importados
import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorListener } from "./CustomCalculatorListener.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Leer entrada desde archivo o solicitar por consola si falla
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Crear lexer y generar tokens
    const inputStream = CharStreams.fromString(input);
    let lexer = new CalculatorLexer(inputStream);
    const allTokens = lexer.getAllTokens();

    if (allTokens.length === 0) {
    console.error("No se generaron tokens. Verifica la entrada y la gramática.");
    return;
    }

    // Imprimir tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| LEXEMA         | TOKEN                          |");
    console.log("--------------------------------------------------");

    for (let token of allTokens) {
        const symbolicName = CalculatorLexer.symbolicNames[token.type];
        const tokenType = symbolicName !== undefined && symbolicName !== null
            ? symbolicName
            : `'${token.text}'`;

        const lexema = token.text || '';

        console.log(`| ${String(lexema).padEnd(14)} | ${String(tokenType).padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

     // Recrear lexer para usarlo con el parser (ya que getAllTokens() lo consume)
    const inputStream2 = CharStreams.fromString(input);
    lexer = new CalculatorLexer(inputStream2);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CalculatorParser(tokenStream);
    let tree = parser.programa();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Crear visitor y definir estado inicial de dispositivos
        const visitor = new CustomCalculatorVisitor();
        visitor.estadoDispositivos.set("sensor1", "encendido");
        visitor.estadoDispositivos.set("temperatura", 35);
        visitor.estadoDispositivos.set("bombaAgua", "apagado"); 
        visitor.estadoDispositivos.set("generador1", "apagado");

        // Ejecutar visitor e interpretar
        const codigoTraducido = visitor.visit(tree);

        // Mostrar código traducido
        console.log("\n--- Código JavaScript traducido ---\n");
        console.log(codigoTraducido);

        // Simular ejecución
        console.log("\n--- Simulación de ejecución ---");
        const estado = {};
        for (const [clave, valor] of visitor.estadoDispositivos.entries()) {
        estado[clave] = valor;
        }
        try {
            eval(codigoTraducido);
        } catch (e) {
            console.error("Error al ejecutar el código traducido:", e.message);
        }   
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();