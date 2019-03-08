import { UserRole, ProjetoAccess } from './enums';

export interface TextValue {
    text: string; value: any;
}
export interface MessageAlert {
    message: string;
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    icon?: string;
}
export interface FileUploaded {
    id: number;
    nomeArquivo: string;
    url: string;
    projetoId?: any;
    temaId: number;
    registroFinanceiroId?: any;
    categoria: number;
    categoriaValor?: any;
    userId: string;
    user?: any;
    created: string;
}
export interface UF {
    id: number;
    nome: string;
    valor: string;
}
export interface Segmento {
    id: number;
    nome: string;
    valor: string;
}
export interface Empresa {
    id: number;
    nome: string;
    valor: string;
}
export interface Permissao {
    id: number;
    nome: string;
    valor: string;
}

export interface ProjetoStatus {
    id: number;
    status: string;
}
export interface Projeto {
    created: string;
    id: number;
    titulo: string;
    tipo: number;
    dataInicio?: any;
    codigo?: any;
    tituloDesc: string;
    numero: string;
    catalogEmpresaId: number;
    catalogEmpresa?: Empresa;
    catalogStatusId: number;
    catalogStatus?: ProjetoStatus;
    catalogSegmentoId?: any;
    catalogSegmento?: any;
    avaliacaoInicial?: any;
    compartResultados?: any;
    compartResultadosValor?: any;
    motivacao?: any;
    originalidade?: any;
    aplicabilidade?: any;
    relevancia?: any;
    razoabilidade?: any;
    pesquisas?: any;
    produtos?: any;
    recursosHumanos?: any;
    alocacoesRh?: any;
    recursosMateriais?: any;
    alocacoesRm?: any;
    etapas?: any;
    tema?: any;
    usersProjeto?: any;
    empresas?: any;
}

export type Projetos = Array<Projeto>;

export interface User {
    id?: string;
    userName?: string;
    normalizedUserName?: string;
    email: string;
    nomeCompleto: any;
    role: UserRole;
    status: number;
    razaoSocial?: any;
    fotoPerfil?: { file: string; id: number; userId?: any };
    cpf?: any;
    catalogEmpresa?: Empresa;
    catalogEmpresaId?: number | '';
    ultimoLogin?: string;
    dataCadastro?: string;
    dataAtualizacao?: string;
    normalizedEmail?: string;
    emailConfirmed?: boolean;
    passwordHash?: string;
    securityStamp?: string;
    concurrencyStamp?: string;
    phoneNumber?: any;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: any;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
}

export interface CatalogUserPermissao {
    id: number;
    valor: string;
    nome: string;
}

export interface UserProjeto {
    id: number;
    userId: string;
    applicationUser?: User;
    projetoId: number;
    projeto?: Projeto;
    catalogUserPermissaoId: any;
    catalogUserPermissao?: CatalogUserPermissao;
}

export interface Tema {
    id: number;
    nome: string;
    valor: string;
    subTemas: SubTema[];
}

export interface CatalogTema {
    id: number;
    nome: string;
    valor: string;
    subTemas: SubTema[];
}

export interface CatalogSubTema {
    subTemaId: number;
    catalogTemaId: number;
    nome: string;
    valor: string;
}

export interface SubTema {
    id: number;
    temaId: number;
    catalogSubTemaId: number;
    catalogSubTema: CatalogSubTema;
    outroDesc?: any;
}

export interface TemaProjeto {
    id: number;
    projetoId: number;
    catalogTemaId: number;
    catalogTema: CatalogTema;
    outroDesc?: any;
    subTemas: SubTema[];
    uploads: FileUploaded[];
}
// Produtos
export interface Produto {
    created: string;
    id: number;
    projetoId: number;
    titulo: string;
    desc: string;
    classificacao: number;
    classificacaoValor: string;
    tipo: number;
    tipoValor: string;
    faseCadeia: number;
    faseCadeiaValor: string;
    etapaProduto: any[];
}

/**
 * Etapa Request
 */

export interface Etapa {
    id: number;
    projetoId: number;
    numeroEtapa?: number;
    desc: string;
    dataInicio: string;
    dataFim: string;
    etapaProdutos: EtapaProduto[];
}
export interface EtapaProduto {
    id: number;
    etapaId: number;
    produtoId: number;
}

export interface EmpresaProjeto {
    id: number;
    projetoId: number;
    classificacao: number;
    classificacaoValor: string;
    catalogEmpresaId: number;
    catalogEmpresa?: Empresa;
    cnpj?: any;
    catalogEstadoId?: any;
    estado?: UF;
    razaoSocial?: string;
}


export interface RecursoMaterial {
    id: number;
    projetoId: number;
    nome: string;
    categoriaContabil: number;
    categoriaContabilValor: string;
    valorUnitario: string;
    especificacao: string;
}

export interface AlocacaoRM {
    id: number;
    etapaId: number;
    etapa?: any;
    projetoId: number;
    recursoMaterialId: number;
    recursoMaterial?: any;
    empresaFinanciadoraId: number;
    empresaFinanciadora?: any;
    empresaRecebedoraId: number;
    empresaRecebedora?: any;
    qtd: number;
    justificativa: string;
}
export interface RecursoHumano {
    id: number;
    projetoId: number;
    empresaId: number;
    empresa?: any;
    valorHora: number;
    nomeCompleto: string;
    titulacao: number;
    titulacaoValor: string;
    funcao: number;
    funcaoValor: string;
    nacionalidade: number;
    nacionalidadeValor: string;
    cpf: string;
    passaporte?: any;
    urlCurriculo: string;
}

export interface ExtratoItem {
    alocacaoId: number;
    desc: string;
    etapa: Etapa;
    recursoHumano?: RecursoHumano;
    recursoMaterial?: RecursoMaterial;
    registroFinanceiro: RegistroREFP;
    valor: number;
}

export interface ExtratoRelatorio {
    categoriaContabil: number;
    desc: string;
    items: ExtratoItem[];
    total: number;
    valor: number;
}

export interface OrcamentoEmpresa {
    nome: string;
    relatorios: ExtratoRelatorio[];
    total: number;
    valor: number;
}
export interface ExtratoEmpresa extends OrcamentoEmpresa {
    desvio: number;
    totalAprovado: number;
    valorAprovado: number;
}

export interface OrcamentosEmpresas {
    empresas: OrcamentoEmpresa[];
    total: number;
    valor: number;
}

export interface ExtratosEmpresas extends OrcamentosEmpresas {
    empresas: ExtratoEmpresa[];
}

export interface RecursoHumano {
    id: number;
    projetoId: number;
    empresaId: number;
    empresa?: any;
    valorHora: number;
    nomeCompleto: string;
    titulacao: number;
    titulacaoValor: string;
    funcao: number;
    funcaoValor: string;
    nacionalidade: number;
    nacionalidadeValor: string;
    cpf: string;
    passaporte?: any;
    urlCurriculo: string;
}

export interface AlocacaoRH {
    id: number;
    etapaId: number;
    etapa?: any;
    projetoId: number;
    recursoHumanoId: number;
    recursoHumano: RecursoHumano;
    empresaId: number;
    empresa: EmpresaProjeto;
    hrsMes1: number;
    hrsMes2: number;
    hrsMes3: number;
    hrsMes4: number;
    hrsMes5: number;
    hrsMes6: number;
    justificativa: string;
}

// Extrato por Etapas
export interface ExtratoEtapa {
    nome: string;
    etapa: Etapa;
    empresas: OrcamentoEmpresa[];
    total: number;
    valor: number;
}
export interface ExtratosEtapas {
    etapas: ExtratoEtapa[];
    total: number;
    valor: number;
}
// -------------- ---------------
/**
 * Registro REFP 
 */


export interface REFPObsInterna {
    id?: number;
    registroFinanceiroId?: number;
    created?: string;
    userId?: string;
    user?: User;
    texto: string;
}
export interface RegistroREFP {
    id: number;
    projetoId: number;
    tipo: 'RH' | 'RM';
    tipoValor: 'RH' | 'RM';
    status: number | string;
    statusValor: string;
    recursoHumanoId: number;
    recursoHumano?: any;
    mes: string;
    qtdHrs: number;
    empresaFinanciadoraId: number;
    empresaFinanciadora?: any;
    tipoDocumento: number;
    tipoDocumentoValor: string;
    numeroDocumento: string;
    dataDocumento: string;
    atividadeRealizada: string;
    obsInternas: REFPObsInterna[];
    nomeItem?: any;
    recursoMaterialId?: any;
    recursoMaterial?: any;
    empresaRecebedoraId?: any;
    empresaRecebedora?: any;
    beneficiado?: any;
    cnpjBeneficiado?: any;
    categoriaContabil: number;
    categoriaContabilValor: string;
    equiparLabExistente?: any;
    equiparLabNovo?: any;
    itemNacional?: any;
    qtdItens?: any;
    valorUnitario?: any;
    especificacaoTecnica?: any;
    funcaoRecurso?: any;
    uploads: any[];
}

export interface RegistroREFPEdit {
    id: number;
    status: 'Pendente' | 'Aprovado' | 'Reprovado';
    obsInternas?: REFPObsInterna[];
}

export interface TotalLog {
    itens: Array<LogProjeto>;
    total: number;
}

export interface LogProjeto {
    id: number;
    projetoId: number;
    projeto?: any;
    userId: string;
    user: User;
    applicationUser?: any;
    tela: string;
    acao: string;
    acaoValor: string;
    statusAnterior: string;
    statusNovo: string;
    created: string;
}

export interface RelatorioFinal {
    id?: number;
    produtoAlcancado: boolean;
    justificativaProduto: string;
    especificacaoProduto: string;
    tecnicaPrevista: boolean;
    justificativaTecnica: string;
    descTecnica: string;
    aplicabilidadePrevista: boolean;
    justificativaAplicabilidade: string;
    descTestes: string;
    descAbrangencia: string;
    descAmbito: string;
    descAtividades: string;
}