---
name: "Adicionar hospedagem de bots Discord"
description: "Atualiza o site Pingobras para apresentar o serviço de hospedagem de bots Discord feitos em Python e JavaScript."
argument-hint: "Opcional: detalhes confirmados do serviço, público ou página preferida"
agent: "agent"
---

Atualize o site Pingobras para apresentar a hospedagem de bots para Discord desenvolvidos em Python e JavaScript como um novo serviço da empresa.

Antes de editar, leia `AGENTS.md`, `README.md` e `MODERNIZATION.md`, além das instruções aplicáveis em `.github/`. Investigue a navegação, os componentes compartilhados e páginas em subpastas, usando `login/` como referência de organização. Crie a nova área em `host/`, com `host/index.html` como página inicial, além dos arquivos CSS e JavaScript separados conforme os padrões do repositório. Preserve o conteúdo, a identidade visual e as URLs existentes; integre a nova área à navegação apropriada sem duplicar componentes compartilhados. Use caminhos relativos que funcionem quando a página for servida a partir da subpasta `host/`.

A página inicial de `host/` deve ter estrutura de painel e apresentar a oferta de hospedagem de bots Discord como a entrada dessa área. Como ainda não há requisitos confirmados de gerenciamento ou integração com API, não simule bots ativos, métricas, status, controles de iniciar/parar, login, cobrança ou qualquer operação real. Inclua apenas conteúdo e ações sustentados por informações disponíveis; deixe explícita no resumo qualquer integração ou dado necessário para transformar esse painel informativo em um painel operacional.

Apresente com clareza que o serviço hospeda bots de Discord feitos em Python e JavaScript. Use apenas informações confirmadas pelo usuário ou já presentes no repositório. Não invente preços, planos, limites de uso, disponibilidade, SLA, segurança, recursos da infraestrutura, processo de contratação ou garantias. Se algum dado for indispensável para publicar uma afirmação ou implementar uma interação, não o presuma: mantenha o texto neutro e informe a pendência ao final.

Siga as convenções do site: Bootstrap 5, componentes compartilhados quando aplicável e HTML, CSS e JavaScript separados para páginas novas. Reaproveite estilos e scripts existentes sempre que adequado; mantenha a mudança pequena e não refatore páginas legadas incidentalmente. Use caminhos relativos compatíveis com publicação em subdiretórios, não adicione servidor nem segredos ao front-end, e respeite acessibilidade, validação de entradas e `prefers-reduced-motion`. Inclua animações suaves conforme os requisitos do projeto, sem prejudicar desempenho ou acessibilidade.

Valide a mudança com o preview local descrito em `.github/copilot-instructions.md`. Confira manualmente a página alterada em desktop e mobile, links e caminhos de assets, console do navegador, componentes carregados e animações. Se a mudança afetar caminhos ou componentes compartilhados, teste também uma página na raiz e outra em subpasta. Não afirme que executou verificações que não conseguiu realizar.

Ao concluir, resuma o que mudou, liste as páginas verificadas e as animações conferidas, e destaque qualquer informação do serviço ainda necessária para finalizar o conteúdo.