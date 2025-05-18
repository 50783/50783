// Generated from c:/Users/lucia/analizador/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,17,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,
4,1,5,1,5,3,5,47,8,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,3,8,56,8,8,1,9,1,9,1,9,
1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,
18,20,22,0,2,1,0,4,6,1,0,7,8,60,0,27,1,0,0,0,2,30,1,0,0,0,4,36,1,0,0,0,6,
40,1,0,0,0,8,42,1,0,0,0,10,46,1,0,0,0,12,48,1,0,0,0,14,50,1,0,0,0,16,55,
1,0,0,0,18,57,1,0,0,0,20,60,1,0,0,0,22,63,1,0,0,0,24,26,3,2,1,0,25,24,1,
0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,29,27,1,0,0,
0,30,31,5,1,0,0,31,32,3,4,2,0,32,33,5,2,0,0,33,34,3,14,7,0,34,35,5,3,0,0,
35,3,1,0,0,0,36,37,3,6,3,0,37,38,3,8,4,0,38,39,3,10,5,0,39,5,1,0,0,0,40,
41,5,14,0,0,41,7,1,0,0,0,42,43,7,0,0,0,43,9,1,0,0,0,44,47,3,12,6,0,45,47,
5,13,0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,11,1,0,0,0,48,49,7,1,0,0,49,13,1,
0,0,0,50,51,3,16,8,0,51,15,1,0,0,0,52,56,3,18,9,0,53,56,3,20,10,0,54,56,
3,22,11,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,17,1,0,0,0,57,58,
5,9,0,0,58,59,3,6,3,0,59,19,1,0,0,0,60,61,5,10,0,0,61,62,3,6,3,0,62,21,1,
0,0,0,63,64,5,11,0,0,64,65,3,6,3,0,65,66,5,12,0,0,66,67,5,13,0,0,67,23,1,
0,0,0,3,27,46,55];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'cuando'", "'entonces'", "';'", "'es'", 
                            "'mayor que'", "'menor que'", "'encendido'", 
                            "'apagado'", "'activar'", "'desactivar'", "'ajustar'", 
                            "'a'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "NUMERO", "IDENTIFICADOR", 
                             "DIGITO", "LETRA", "WS" ];
    static ruleNames = [ "programa", "regla", "condicion", "nombre_dispositivo", 
                         "estado_condicion", "valor_condicion", "estado", 
                         "accion", "accion_simple", "activar", "desactivar", 
                         "ajustar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 24;
	            this.regla();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(CalculatorParser.T__0);
	        this.state = 31;
	        this.condicion();
	        this.state = 32;
	        this.match(CalculatorParser.T__1);
	        this.state = 33;
	        this.accion();
	        this.state = 34;
	        this.match(CalculatorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.nombre_dispositivo();
	        this.state = 37;
	        this.estado_condicion();
	        this.state = 38;
	        this.valor_condicion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre_dispositivo() {
	    let localctx = new Nombre_dispositivoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_nombre_dispositivo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(CalculatorParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado_condicion() {
	    let localctx = new Estado_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_estado_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor_condicion() {
	    let localctx = new Valor_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_valor_condicion);
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.estado();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.match(CalculatorParser.NUMERO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_accion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.accion_simple();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion_simple() {
	    let localctx = new Accion_simpleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_accion_simple);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.activar();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.desactivar();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.ajustar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	activar() {
	    let localctx = new ActivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalculatorParser.RULE_activar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(CalculatorParser.T__8);
	        this.state = 58;
	        this.nombre_dispositivo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	desactivar() {
	    let localctx = new DesactivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CalculatorParser.RULE_desactivar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(CalculatorParser.T__9);
	        this.state = 61;
	        this.nombre_dispositivo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ajustar() {
	    let localctx = new AjustarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CalculatorParser.RULE_ajustar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(CalculatorParser.T__10);
	        this.state = 64;
	        this.nombre_dispositivo();
	        this.state = 65;
	        this.match(CalculatorParser.T__11);
	        this.state = 66;
	        this.match(CalculatorParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.T__9 = 10;
CalculatorParser.T__10 = 11;
CalculatorParser.T__11 = 12;
CalculatorParser.NUMERO = 13;
CalculatorParser.IDENTIFICADOR = 14;
CalculatorParser.DIGITO = 15;
CalculatorParser.LETRA = 16;
CalculatorParser.WS = 17;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_regla = 1;
CalculatorParser.RULE_condicion = 2;
CalculatorParser.RULE_nombre_dispositivo = 3;
CalculatorParser.RULE_estado_condicion = 4;
CalculatorParser.RULE_valor_condicion = 5;
CalculatorParser.RULE_estado = 6;
CalculatorParser.RULE_accion = 7;
CalculatorParser.RULE_accion_simple = 8;
CalculatorParser.RULE_activar = 9;
CalculatorParser.RULE_desactivar = 10;
CalculatorParser.RULE_ajustar = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_regla;
    }

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	accion() {
	    return this.getTypedRuleContext(AccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitRegla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_condicion;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	estado_condicion() {
	    return this.getTypedRuleContext(Estado_condicionContext,0);
	};

	valor_condicion() {
	    return this.getTypedRuleContext(Valor_condicionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Nombre_dispositivoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_nombre_dispositivo;
    }

	IDENTIFICADOR() {
	    return this.getToken(CalculatorParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNombre_dispositivo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNombre_dispositivo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNombre_dispositivo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Estado_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_estado_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterEstado_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitEstado_condicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitEstado_condicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Valor_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_valor_condicion;
    }

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterValor_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitValor_condicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitValor_condicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_estado;
    }


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_accion;
    }

	accion_simple() {
	    return this.getTypedRuleContext(Accion_simpleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Accion_simpleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_accion_simple;
    }

	activar() {
	    return this.getTypedRuleContext(ActivarContext,0);
	};

	desactivar() {
	    return this.getTypedRuleContext(DesactivarContext,0);
	};

	ajustar() {
	    return this.getTypedRuleContext(AjustarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAccion_simple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAccion_simple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAccion_simple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_activar;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterActivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitActivar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitActivar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DesactivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_desactivar;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterDesactivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitDesactivar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitDesactivar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AjustarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_ajustar;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAjustar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAjustar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAjustar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.ReglaContext = ReglaContext; 
CalculatorParser.CondicionContext = CondicionContext; 
CalculatorParser.Nombre_dispositivoContext = Nombre_dispositivoContext; 
CalculatorParser.Estado_condicionContext = Estado_condicionContext; 
CalculatorParser.Valor_condicionContext = Valor_condicionContext; 
CalculatorParser.EstadoContext = EstadoContext; 
CalculatorParser.AccionContext = AccionContext; 
CalculatorParser.Accion_simpleContext = Accion_simpleContext; 
CalculatorParser.ActivarContext = ActivarContext; 
CalculatorParser.DesactivarContext = DesactivarContext; 
CalculatorParser.AjustarContext = AjustarContext; 
