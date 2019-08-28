import {UserRole, ProjetoAccess} from './enums';
import {TextValue} from './common';
import {ResultadoResponse} from './responses';

export const Roles: Array<TextValue> = [
    {text: 'Administrador', value: UserRole.Administrador},
    {text: 'Usuário Padrão', value: UserRole.User}
];

export const NiveisUsuarios = {
    todos: ProjetoAccess.Todos,
    leitura: ProjetoAccess.Todos | ProjetoAccess.Leitura,
    leituraEscrita: ProjetoAccess.Todos | ProjetoAccess.Escrita | ProjetoAccess.Leitura,
    aprovador: ProjetoAccess.Todos | ProjetoAccess.Aprovador | ProjetoAccess.Leitura | ProjetoAccess.Escrita,
    // administrador: ProjetoAccess.Administrador,
    admin: ProjetoAccess.Administrador | ProjetoAccess.Todos | ProjetoAccess.Aprovador | ProjetoAccess.Leitura | ProjetoAccess.Escrita
};

export const TiposProdutos: Array<TextValue> = [
    {text: 'Conceito ou Metodologia', value: 'CM'},
    {text: 'Software', value: 'SW'},
    {text: 'Sistema', value: 'SM'},
    {text: 'Material ou Substância', value: 'MS'},
    {text: 'Componente ou Dispositivo', value: 'CD'},
    {text: 'Máquina ou Equipamento', value: 'ME'}
];

export const FasesCadeiaInovacao: Array<TextValue> = [
    {text: 'Pesquisa Básica Dirigida', value: 'PB'},
    {text: 'Pesquisa Aplicada', value: 'PA'},
    {text: 'Desenvolvimento Experimental', value: 'DE'},
    {text: 'Cabeça de série', value: 'CS'},
    {text: 'Lote Pioneiro', value: 'LP'},
    {text: 'Inserção no Mercado', value: 'IM'},
];

// 
export const Atividades: Array<TextValue> = [
    {text: 'Dedicação horária dos membros da equipe de gestão do Programa de P&D da Empresa, quadro efetivo.', value: 'HH'},
    {
        text: 'Participação dos membros da equipe de gestão em eventos sobre pesquisa, desenvolvimento e inovação relacionados ao setor elétrico e/ou em cursos de gestão tecnológica e da informação. ',
        value: 'EC'
    },
    {text: 'Desenvolvimento de ferramenta para gestão do Programa de P&D da Empresa, excluindose aquisição de equipamentos.', value: 'FG'},
    {text: 'Prospecção tecnológica e demais atividades necessárias ao planejamento e à elaboração do plano estratégico de investimento em P&D.', value: 'PP'},
    {text: 'Divulgação de resultados de projetos de P&D, concluídos e/ou em execução.', value: 'RP'},
    {text: 'Participação dos responsáveis técnicos pelos projetos de P&D nas avaliações presenciais convocadas pela ANEEL.', value: 'AP'},
    {text: 'Buscas de anterioridade no Instituto Nacional da Propriedade Industrial (INPI).', value: 'BA'},
    {text: 'Contratação de auditoria contábil e financeira para os projetos concluídos.', value: 'CA'},
    {text: 'Apoio à realização do CITENEL.', value: 'AC'}
];

export const IndicadoresEconomicos: Array<TextValue> = [
    {text: 'Redução de Homem/Hora - Produtividade', value: 'PR1'},
    {text: 'Redução de Insumos - Produtividade', value: 'PR2'},
    {text: 'Redução de Tempo - Produtividade', value: 'PR3'},
    {text: 'Outro - Produtividade', value: 'PRX'},
    {text: 'Redução de DEC, FEC e TMA - Qualidade do Fornecimento', value: 'QF1'},
    {text: 'Redução de VTCDs e Outros Distúrbios - Qualidade do Fornecimento', value: 'QF2'},
    {text: 'Redução do Índice de Reclamações - Qualidade do Fornecimento', value: 'QF3'},
    {text: 'Outro - Qualidade do Fornecimento', value: 'QFX '},
    {text: 'Postergação de Investimento - Gestão de Ativos', value: 'GA1'},
    {text: 'Investimento Evitado - Gestão de Ativos', value: 'GA2'},
    {text: 'Redução de Roubos e Furtos - Gestão de Ativos', value: 'GA3'},
    {text: 'Outro - Gestão de Ativos', value: 'GAX'},
    {text: 'Redução de Inadimplência - Perdas Não Técnicas', value: 'NT1'},
    {text: 'Redução de Fraudes e Desvios - Perdas Não Técnicas', value: 'NT2'},
    {text: 'Redução de Erros de Medição - Perdas Não Técnicas', value: 'NT3'},
    {text: 'Redução de Perdas Indenizatórias - Perdas Não Técnicas', value: 'NT4'},
    {text: 'Outro - Perdas Não Técnicas', value: 'NTX '},
    {text: 'Redução no Custo da Energia - Mercado da Empresa', value: 'ME1'},
    {text: 'Redução nos Erros de Previsão - Mercado da Empresa', value: 'ME2'},
    {text: 'Outro - Mercado da Empresa', value: 'MEX '}, {text: 'Aumento da Demanda Disponível (Oferta) - Eficiência Energética', value: 'EE1 '},
    {text: 'Aumento da Energia Disponível (Oferta) - Eficiência Energética', value: 'EE2'},
    {text: 'Redução de Demanda (Uso Final) - Eficiência Energética', value: 'EE3'},
    {text: 'Energia Economizada (Uso Final) - Eficiência Energética', value: 'EE4'},
    {text: 'Outro - Eficiência Energética', value: 'EEX '},
    {text: 'Outro - Outro', value: 'OU'},
];

export const IndicadoresSocioambientais: Array<TextValue> = [
    {text: 'Possibilidade de impactos ambientais (água, ar ou solo).', value: 'ISA1'},
    {text: 'Possibilidade de diversificação da matriz energética.', value: 'ISA2'},
    {text: 'Possibilidade de desenvolvimento de nova atividade socioeconômica (lazer, turismo, pesca, agricultura, etc.)', value: 'ISA3'},
    {text: 'Possibilidade de impactos na segurança ou na qualidade de vida da comunidade.', value: 'ISA4'},
];

export const PropriedadeIntelectual: Array<TextValue> = [
    {text: 'Patente de Invenção', value: 'PI'},
    {text: 'Patente de Modelo de Utilidade', value: 'PU'},
    {text: 'Registro de Software', value: 'RS'},
    {text: 'Registro de Desenho Industrial', value: 'RD'},
];

export const TiposProducaoTC: Array<TextValue> = [
    {text: 'Periódico Nacional', value: 'PN'},
    {text: 'Periódico Internacional', value: 'PI'},
    {text: 'Anais de Evento Nacional', value: 'AN'},
    {text: 'Anais de Evento Internacional', value: 'AI'}
];

export const TiposCapacitacao: Array<TextValue> = [
    {text: 'PósDoutorado (Stricto Sensu)', value: 'PD'},
    {text: 'Doutorado (Stricto Sensu)', value: 'DO'},
    {text: 'Mestrado (Stricto Sensu)', value: 'ME'},
    {text: 'Especialização (Lato Sensu)', value: 'ES'},
];

export const TiposCompartilhamento: Array<TextValue> = [
    {text: 'Domínio Público', value: 'DP'},
    {text: 'Exclusivo da(s) empresa(s) de energia elétrica', value: 'EE'},
    {text: 'Exclusivo da(s) entidade(s) executora(s)', value: 'EX'},
    {text: 'Compartilhado entre as empresa(s) de energia elétrica e entidade(s) executora(s)', value: 'CE'},
];

export const CategoriasContabeis: Array<TextValue> = [
    // { text: "Recursos Humanos", value: "RH" },
    {text: 'Serviços de Terceiros', value: 'ST'},
    {text: 'Materiais de Consumo', value: 'MC'},
    {text: 'Materiais Permanentes e Equipamentos', value: 'MP'},
    {text: 'Viagens e Diárias', value: 'VD'},
    {text: 'Outros', value: 'OU'},

];

export const Funcoes: Array<TextValue> = [
    {text: 'Coordenador', value: 'CO'},
    {text: 'Gerente', value: 'GE'},
    {text: 'Pesquisador', value: 'PE'},
    {text: 'Auxiliar Técnico', value: 'AT'},
    {text: 'Auxiliar Técnico Bolsista', value: 'AB'},
    {text: 'Auxiliar Administrativo', value: 'AA'}
];

export const Graduacoes: Array<TextValue> = [
    {text: 'Doutor', value: 'DO'},
    {text: 'Mestre', value: 'ME'},
    {text: 'Especialista', value: 'ES'},
    {text: 'Superior', value: 'SU'},
    {text: 'Técnico', value: 'TE'},
];

export const TiposInfraestrutura: Array<TextValue> = [
    {text: 'Laboratório Novo em Instituição de Ensino Superior.', value: 'LNS'},
    {text: 'Laboratório Existente em Instituição de Ensino Superior.', value: 'LES'},
    {text: 'Laboratório Novo em Instituição de Pesquisa.', value: 'LNP'},
    {text: 'Laboratório Existente em Instituição de Pesquisa.', value: 'LEP'},
    {text: 'Laboratório Novo em Empresa de Energia Elétrica.', value: 'LNE'},
    {text: 'Laboratório Existente em Empresa de Energia Elétrica.', value: 'LEE'},
];

export const NoRequest: ResultadoResponse = {
    acao: 'NoRequest',
    id: null,
    sucesso: true,
    inconsistencias: []
};

export const TiposDoc: Array<TextValue> = [
    {text: 'Cupom Fiscal', value: 'Cupom'},
    {text: 'Declaração de Horas', value: 'Declaracao'},
    {text: 'Fatura', value: 'Fatura'},
    {text: 'Guia de NFS-e', value: 'Guia'},
    {text: 'Nota Fiscal', value: 'Nota'},
    {text: 'Recibo', value: 'Recibo'},
    {text: 'Reserva', value: 'Reserva'},
    {text: 'Recibo não vinculado a CNPJ', value: 'ReciboSemCNPJ'}
];

export const AcaoLog: Array<TextValue> = [
    {text: 'Criação', value: 'Create'},
    {text: 'Edição', value: 'Update'},
    {text: 'Exclusão', value: 'Delete'},
    {text: 'Consulta', value: 'Retrieve'},

];
