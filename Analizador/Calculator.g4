grammar Calculator;

programa
 : (regla)* 
 ;

regla
 : 'cuando' condicion 'entonces' accion ';' 
 ;

condicion
 : nombre_dispositivo estado_condicion valor_condicion 
 ;

nombre_dispositivo
 : IDENTIFICADOR 
 ;

estado_condicion
 : 'es' | 'mayor que' | 'menor que' 
  ;

valor_condicion
 : estado | NUMERO 
;

estado
 : 'encendido' | 'apagado' 
 ;

accion
 : accion_simple 
 ;

accion_simple
 : activar | desactivar | ajustar 
 ;

activar
 : 'activar' nombre_dispositivo  
 ;

desactivar
 : 'desactivar' nombre_dispositivo 
 ;

ajustar
 : 'ajustar' nombre_dispositivo 'a' NUMERO 
 ;

/// *** LEXER RULES ***///
 NUMERO: DIGITO (DIGITO)* ;

 IDENTIFICADOR: LETRA (LETRA | DIGITO | '_')* ;

 DIGITO: [0-9] ;
 LETRA: [a-zA-Z];

 WS: [ \t\r\n]+ -> skip ;