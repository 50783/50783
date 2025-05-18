import CalculatorVisitor from './generated/CalculatorVisitor.js';
export class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor() {
        super();
        this.estadoDispositivos = new Map();
        this.codigoJS = "";
    }
    visitPrograma(ctx) {
    console.log("Visitando programa");
    ctx.regla().forEach(regla => this.visit(regla));
    return this.codigoJS;
    }

    visitRegla(ctx) {
        const condicion = this.visit(ctx.condicion());
        const accionJS = this.visit(ctx.accion());

        const condJS = this.convertirCondicionAJS(condicion);
        const bloqueJS = `if (${condJS}) {\n  ${accionJS}\n}\n`;
        this.codigoJS += bloqueJS;
    }

    visitCondicion(ctx) {
        return {
            dispositivo: ctx.nombre_dispositivo().getText(),
            operador: ctx.estado_condicion().getText(),
            valor: this.visit(ctx.valor_condicion())
        };
    }

    visitValor_condicion(ctx) {
        return ctx.estado() ? `"${ctx.estado().getText()}"` : parseInt(ctx.NUMERO().getText());
    }

    visitAccion(ctx) {
        return this.visit(ctx.accion_simple());
    }

    visitActivar(ctx) {
        const dispositivo = ctx.nombre_dispositivo().getText();
        return `console.log("Activando ${dispositivo}"); estado["${dispositivo}"] = "encendido";`;
    }

    visitDesactivar(ctx) {
        const dispositivo = ctx.nombre_dispositivo().getText();
        return `console.log("Desactivando ${dispositivo}"); estado["${dispositivo}"] = "apagado";`;
    }

    visitAjustar(ctx) {
        const dispositivo = ctx.nombre_dispositivo().getText();
        const valor = parseInt(ctx.NUMERO().getText());
        return `console.log("Ajustando ${dispositivo} a ${valor}"); estado["${dispositivo}"] = ${valor};`;
    }

    convertirCondicionAJS(cond) {
        const { dispositivo, operador, valor } = cond;
        switch (operador) {
            case "es": return `estado["${dispositivo}"] === ${valor}`;
            case "mayor que": return `estado["${dispositivo}"] > ${valor}`;
            case "menor que": return `estado["${dispositivo}"] < ${valor}`;
            default: return "false";
        }
    }

    evaluarCondicion(cond) {
        const actual = this.estadoDispositivos.get(cond.dispositivo);
        const valor = typeof cond.valor === "string" ? cond.valor.replace(/"/g, '') : cond.valor;

        switch (cond.operador) {
            case "es": return actual === valor;
            case "mayor que": return actual > valor;
            case "menor que": return actual < valor;
            default: return false;
        }
    }
}

