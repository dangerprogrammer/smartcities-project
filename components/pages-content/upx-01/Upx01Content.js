import PageContainer from "@/components/page-container/PageContainer";
import styles from "./Upx01Content.module.scss";
import PageContent from "@/components/page-content/PageContent";
import Chapter from "@/components/chapters/Chapter";

function Upx01Content() {
    return <PageContainer id="upx01-content">
        <PageContent className={styles.content}>
            <Chapter title="Proposta do projeto" MyContent={({className}) => <div className={className}>
            A proposta do projeto é a construção de uma lâmpada inteligente, buscando diminuir a redução de gastos com energia elétrica e uma sociedade mais ergonômica.  A lâmpada busca adequar sua luminosidade a partir do índice de luz proveniente do ambiente a qual está inserida.
            </div>}/>
            <Chapter title="Objetivos" MyContent={({className}) => <div className={className}>
            O projeto busca trazer maior eficiência aos sistemas de iluminação pública presentes na cidade, nas áreas domésticas e industriais, mantendo sempre o brilho necessário, sem que seu consumo ultrapasse o devido em determinados períodos, o que, sem uma regulação, geraria eventuais gastos extras e consumo desnecessário.
            </div>}/>
            <Chapter title="Justificativa" MyContent={({className}) => <div className={className}>
            A justificativa para o projeto e seu título, “Lâmpadas inteligentes: Poupando energia com consciência", é a busca para redução de custos envolvendo energia elétrica, acessibilidade e ao mesmo tempo a preocupação com relação à pressão do ser humano sobre o meio ambiente. Dessa forma, como a temática por detrás é de “Cidades Inteligentes, Humanas e Sustentáveis" o projeto da lâmpada inteligente funciona de forma totalmente autônoma, inserindo-se na lógica da inteligência do aparelho como critério, ela é acessível economicamente para maioria das pessoas por assim visando economizar quando se trata de despesas com conta de luz, atingindo o aspecto humano, e por fim tem como consequências  a diminuição do uso de energia, comprometendo-se  ao ponto da sustentabilidade. 
            </div>}/>
            <Chapter title="Orçamento" MyContent={({className}) => <div className={className}>
            Dentro da esfera do orçamento irá ser disposto os valores de cada um dos itens a serem utilizados na criação de um protótipo. Vale ressaltar que o preço de cada um dos componentes pode variar desde a data de compra do produto para o trabalho e o valor futuro do momento em que o referido documento será analisado.
            </div>}/>
            <Chapter title="Justificativa" MyContent={({className}) => <div className={className}>
            A justificativa para o projeto e seu título, “Lâmpadas inteligentes: Poupando energia com consciência", é a busca para redução de custos envolvendo energia elétrica, acessibilidade e ao mesmo tempo a preocupação com relação à pressão do ser humano sobre o meio ambiente. Dessa forma, como a temática por detrás é de “Cidades Inteligentes, Humanas e Sustentáveis" o projeto da lâmpada inteligente funciona de forma totalmente autônoma, inserindo-se na lógica da inteligência do aparelho como critério, ela é acessível economicamente para maioria das pessoas por assim visando economizar quando se trata de despesas com conta de luz, atingindo o aspecto humano, e por fim tem como consequências  a diminuição do uso de energia, comprometendo-se  ao ponto da sustentabilidade. 
            </div>}/>
        </PageContent>
    </PageContainer>
};

export default Upx01Content;