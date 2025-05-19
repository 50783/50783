// Generated from c:/Users/lucia/analizador/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CalculatorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, NUMERO=13, IDENTIFICADOR=14, DIGITO=15, LETRA=16, 
		WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "NUMERO", "IDENTIFICADOR", "DIGITO", "LETRA", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'cuando'", "'entonces'", "';'", "'es'", "'mayor que'", "'menor que'", 
			"'encendido'", "'apagado'", "'activar'", "'desactivar'", "'ajustar'", 
			"'a'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "NUMERO", "IDENTIFICADOR", "DIGITO", "LETRA", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CalculatorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Calculator.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0011\u0096\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0005\f~\b\f\n\f\f\f\u0081\t\f\u0001\r\u0001\r\u0001\r\u0001\r\u0005"+
		"\r\u0087\b\r\n\r\f\r\u008a\t\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0004\u0010\u0091\b\u0010\u000b\u0010\f\u0010\u0092"+
		"\u0001\u0010\u0001\u0010\u0000\u0000\u0011\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"\u0001\u0000\u0003\u0001\u000009\u0002\u0000AZaz\u0003\u0000\t\n\r\r "+
		" \u009a\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000"+
		"\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000"+
		"\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000"+
		"\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000"+
		"\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000"+
		"\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000"+
		"\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000"+
		"\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000"+
		"!\u0001\u0000\u0000\u0000\u0001#\u0001\u0000\u0000\u0000\u0003*\u0001"+
		"\u0000\u0000\u0000\u00053\u0001\u0000\u0000\u0000\u00075\u0001\u0000\u0000"+
		"\u0000\t8\u0001\u0000\u0000\u0000\u000bB\u0001\u0000\u0000\u0000\rL\u0001"+
		"\u0000\u0000\u0000\u000fV\u0001\u0000\u0000\u0000\u0011^\u0001\u0000\u0000"+
		"\u0000\u0013f\u0001\u0000\u0000\u0000\u0015q\u0001\u0000\u0000\u0000\u0017"+
		"y\u0001\u0000\u0000\u0000\u0019{\u0001\u0000\u0000\u0000\u001b\u0082\u0001"+
		"\u0000\u0000\u0000\u001d\u008b\u0001\u0000\u0000\u0000\u001f\u008d\u0001"+
		"\u0000\u0000\u0000!\u0090\u0001\u0000\u0000\u0000#$\u0005c\u0000\u0000"+
		"$%\u0005u\u0000\u0000%&\u0005a\u0000\u0000&\'\u0005n\u0000\u0000\'(\u0005"+
		"d\u0000\u0000()\u0005o\u0000\u0000)\u0002\u0001\u0000\u0000\u0000*+\u0005"+
		"e\u0000\u0000+,\u0005n\u0000\u0000,-\u0005t\u0000\u0000-.\u0005o\u0000"+
		"\u0000./\u0005n\u0000\u0000/0\u0005c\u0000\u000001\u0005e\u0000\u0000"+
		"12\u0005s\u0000\u00002\u0004\u0001\u0000\u0000\u000034\u0005;\u0000\u0000"+
		"4\u0006\u0001\u0000\u0000\u000056\u0005e\u0000\u000067\u0005s\u0000\u0000"+
		"7\b\u0001\u0000\u0000\u000089\u0005m\u0000\u00009:\u0005a\u0000\u0000"+
		":;\u0005y\u0000\u0000;<\u0005o\u0000\u0000<=\u0005r\u0000\u0000=>\u0005"+
		" \u0000\u0000>?\u0005q\u0000\u0000?@\u0005u\u0000\u0000@A\u0005e\u0000"+
		"\u0000A\n\u0001\u0000\u0000\u0000BC\u0005m\u0000\u0000CD\u0005e\u0000"+
		"\u0000DE\u0005n\u0000\u0000EF\u0005o\u0000\u0000FG\u0005r\u0000\u0000"+
		"GH\u0005 \u0000\u0000HI\u0005q\u0000\u0000IJ\u0005u\u0000\u0000JK\u0005"+
		"e\u0000\u0000K\f\u0001\u0000\u0000\u0000LM\u0005e\u0000\u0000MN\u0005"+
		"n\u0000\u0000NO\u0005c\u0000\u0000OP\u0005e\u0000\u0000PQ\u0005n\u0000"+
		"\u0000QR\u0005d\u0000\u0000RS\u0005i\u0000\u0000ST\u0005d\u0000\u0000"+
		"TU\u0005o\u0000\u0000U\u000e\u0001\u0000\u0000\u0000VW\u0005a\u0000\u0000"+
		"WX\u0005p\u0000\u0000XY\u0005a\u0000\u0000YZ\u0005g\u0000\u0000Z[\u0005"+
		"a\u0000\u0000[\\\u0005d\u0000\u0000\\]\u0005o\u0000\u0000]\u0010\u0001"+
		"\u0000\u0000\u0000^_\u0005a\u0000\u0000_`\u0005c\u0000\u0000`a\u0005t"+
		"\u0000\u0000ab\u0005i\u0000\u0000bc\u0005v\u0000\u0000cd\u0005a\u0000"+
		"\u0000de\u0005r\u0000\u0000e\u0012\u0001\u0000\u0000\u0000fg\u0005d\u0000"+
		"\u0000gh\u0005e\u0000\u0000hi\u0005s\u0000\u0000ij\u0005a\u0000\u0000"+
		"jk\u0005c\u0000\u0000kl\u0005t\u0000\u0000lm\u0005i\u0000\u0000mn\u0005"+
		"v\u0000\u0000no\u0005a\u0000\u0000op\u0005r\u0000\u0000p\u0014\u0001\u0000"+
		"\u0000\u0000qr\u0005a\u0000\u0000rs\u0005j\u0000\u0000st\u0005u\u0000"+
		"\u0000tu\u0005s\u0000\u0000uv\u0005t\u0000\u0000vw\u0005a\u0000\u0000"+
		"wx\u0005r\u0000\u0000x\u0016\u0001\u0000\u0000\u0000yz\u0005a\u0000\u0000"+
		"z\u0018\u0001\u0000\u0000\u0000{\u007f\u0003\u001d\u000e\u0000|~\u0003"+
		"\u001d\u000e\u0000}|\u0001\u0000\u0000\u0000~\u0081\u0001\u0000\u0000"+
		"\u0000\u007f}\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000\u0000\u0000"+
		"\u0080\u001a\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000"+
		"\u0082\u0088\u0003\u001f\u000f\u0000\u0083\u0087\u0003\u001f\u000f\u0000"+
		"\u0084\u0087\u0003\u001d\u000e\u0000\u0085\u0087\u0005_\u0000\u0000\u0086"+
		"\u0083\u0001\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0086"+
		"\u0085\u0001\u0000\u0000\u0000\u0087\u008a\u0001\u0000\u0000\u0000\u0088"+
		"\u0086\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000\u0000\u0000\u0089"+
		"\u001c\u0001\u0000\u0000\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008b"+
		"\u008c\u0007\u0000\u0000\u0000\u008c\u001e\u0001\u0000\u0000\u0000\u008d"+
		"\u008e\u0007\u0001\u0000\u0000\u008e \u0001\u0000\u0000\u0000\u008f\u0091"+
		"\u0007\u0002\u0000\u0000\u0090\u008f\u0001\u0000\u0000\u0000\u0091\u0092"+
		"\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0093"+
		"\u0001\u0000\u0000\u0000\u0093\u0094\u0001\u0000\u0000\u0000\u0094\u0095"+
		"\u0006\u0010\u0000\u0000\u0095\"\u0001\u0000\u0000\u0000\u0005\u0000\u007f"+
		"\u0086\u0088\u0092\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}