// Todas as rotas
const RoutesProps = {
	Initial: undefined,
	Drawer: undefined,
	Main: undefined,
	InfoPage: undefined,
	CpfGerador: undefined,
	CnpjGerador: undefined,
	CreditCardGerador: undefined,
	CpfValidador: undefined,
	CnpjValidador: undefined,
	CreditCardValidador: undefined,
	Base64: undefined,
	CodigoBinario: undefined,
	MyNetwork: undefined,
	PasswordGerador: undefined,
	MmcMdc: undefined,
	LinearEquation: undefined,
	QuadraticEquation: undefined,
	Md5: undefined,
	DataConverter: undefined,
	AsciiAndHex: undefined,
	HexAndDecimal: undefined,
	DataConverterMain: undefined,
	FinancialCalculator: undefined,
	Imc: undefined,
	DefaultCalculator: undefined,
};

export type RoutesStringsProps = keyof typeof RoutesProps;

// Rotas diretas no caso não abre um submenu no drawer
export type DirectRoutesProps = 'Main' | 'InfoPage' | 'MyNetwork';

// rotas as rotas tirando as rotas diretas e Initial e Drawer
export type SubRoutesProps = Exclude<RoutesStringsProps, DirectRoutesProps | 'Initial' | 'Drawer'>;
