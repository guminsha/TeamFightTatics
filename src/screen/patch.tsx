import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import Quadrado from './../components/quadrado'
import { ScrollView } from 'react-native-gesture-handler';

export interface AppProps {
}

export interface AppState {
}

export default class PatchScreen extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (<ImageBackground source={require('./../../assets/img/backgroundInicio.jpg')}
            style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Patch Notes</Text>
                    <Quadrado>
                        <Text style={styles.semiTitulo}>9.17 (28/08/19)</Text>
                        <Text style={styles.tema}>Novo Campeão</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/Pantheon_DragonslayerSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Pantheon:</Text>
                        <Text style={styles.info}>Custo: 5 de Ouro</Text>
                        <Text style={styles.info}>Origem: Dragão</Text>
                        <Text style={styles.info}>Classe: Guardião</Text>
                        <Text style={styles.info}>Habilidade:</Text>
                        <Text style={styles.anotacoesText}>Constelação Cadente: Pantheon salta no ar, aterrissando em direção ao inimigo mais distante e atordoando-o por 4/6/8s.
                         Inimigos em seu caminho sofrem 15/30/45% da Vida máxima deles como Dano Mágico, depois queimam o equivalente a 20% da Vida máxima como
                         Dano Verdadeiro ao longo de 10s. Inflige Feridas Dolorosas.
                         </Text>
                        <Text style={styles.anotacoesTitulo}>Sistemas</Text>
                        <Text style={styles.anotacoesText}>- Agora o primeiro carrossel terá apenas unidades que custam 2 de ouro.</Text>
                        <Text style={styles.anotacoesText}>- Exércitos fantasmas agora receberão efeitos das características. Agora sim ficaram assombrosos de verdade!</Text>
                        <Text style={styles.anotacoesText}>- Limite de Velocidade de Ataque aumentado de 2,5 para 5,0. Quanta pressa.</Text>
                        <Text style={styles.anotacoesText}>- As dica flutuantes foram atualizadas para se tornarem mais fáceis de entender e os números agora escalam com Poder
                         de Habilidade.
                        </Text>
                        <Text style={styles.tema}>Classes/Raças</Text>
                        <Image source={require('./../../assets/img/Champs/IconesClasse/Assassin_TFT_icon.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Assassinos:</Text>
                        <Text style={styles.anotacoesText}>- Intervalo antes do pulo dos Assassinos aumentado para que possam alcançar a retaguarda inimiga com mais
                         frequência.
                        </Text>
                        <Text style={styles.info}>(3) Efeito da característica: 125% de Dano Crítico ⇒ 75% de Dano Crítico e 10% de Chance de Acerto Crítico</Text>
                        <Text style={styles.info}>(6) Efeito da característica: 350% de Dano Crítico ⇒ 150% de Dano Crítico e 25% de Chance de Acerto Crítico</Text>
                        <Image source={require('./../../assets/img/Champs/IconesRaça/Hextech_TFT_icon.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Hextechs:</Text>
                        <Text style={styles.info}>Duração do desarmamento de itens: 8s -> 7s</Text>
                        <Image source={require('./../../assets/img/Champs/IconesRaça/Noble_TFT_icon.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Nobres:</Text>
                        <Text style={styles.info}>Armadura e Resistência Mágica: 60 -> 50</Text>
                        <Text style={styles.info}>Cura: 35 -> 25</Text>
                        <Image source={require('./../../assets/img/Champs/IconesClasse/Ranger_TFT_icon.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Patrulheiros:</Text>
                        <Text style={styles.info}>Chance de dobrar a Velocidade de Ataque: 25%/65% ⇒ 30% /70%</Text>
                        <Image source={require('./../../assets/img/Champs/IconesClasse/Shapeshifter_TFT_icon.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Metamorfos:</Text>
                        <Text style={styles.info}>Mana total de Nidalee: 100 ⇒ 85</Text>
                        <Text style={styles.info}>Armadura de Jayce: 30 ⇒ 35</Text>
                        <Text style={styles.anotacoesText}>- Agora Jayce se transformará sob Mana máxima, mesmo se não houver ninguém em seu alcance para ser arremessado.</Text>
                        <Text style={styles.info}>Mana total de Shyvana: 100 ⇒ 85</Text>
                        <Text style={styles.info}>Mana total de Gnar: 125 ⇒ 100</Text>
                        <Image source={require('./../../assets/img/Champs/IconesRaça/Yordle_TFT_icon.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Yordles:</Text>
                        <Text style={styles.info}>Dano da Habilidade: 250/600/950 -> 300/600/900</Text>
                        <Text style={styles.tema}>Campeões</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/Gangplank_CaptainSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Gangplank:</Text>
                        <Text style={styles.info}>Dano da Habilidade: 200/325/450 -> 150/250/350</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/Graves_CutthroatSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Graves:</Text>
                        <Text style={styles.anotacoesText}>- Reajustamos sua interação com Canhão Fumegante. Ele manterá seu alcance adicional,
                         mas a extensão dos projéteis será mais estreita, como um tiro de escopeta.
                        </Text>
                        <Image source={require('./../../assets/img/Champs/Todos/LeonaSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Leona:</Text>
                        <Text style={styles.info}>Duração do atordoamento: 5/8/11s -> 5/7/9s</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/LissandraSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Lissandra:</Text>
                        <Text style={styles.info}>Vida: 450 -> 500</Text>
                        <Text style={styles.info}>Mana inicial/Mana total: 50/125 -> 0/85</Text>
                        <Text style={styles.info}>Dano da Habilidade: 150/275/400 -> 175/325/475</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/LucianSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Lucian:</Text>
                        <Text style={styles.info}>Dano da Habilidade: 250/600/950 -> 300/600/900</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/WarwickSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Warwick:</Text>
                        <Text style={styles.info}>Vida: 600 -> 650</Text>
                        <Text style={styles.tema}>Mudanças em efeitos de Cura (Itens)</Text>
                        <Image source={require('./../../assets/img/Itens/Completo/The_Bloodthirster_item.png')} style={styles.champImg}></Image>
                        <Text style={styles.info}>Cura de A Sedenta por Sangue: 50% do dano -> 40% do dano</Text>
                        <Image source={require('./../../assets/img/Itens/Completo/Hextech_Gunblade_item.png')} style={styles.champImg}></Image>
                        <Text style={styles.info}>Cura de Pistola Laminar Hextec: 33% do dano -> 25% do dano</Text>
                        <Image source={require('./../../assets/img/Itens/Completo/Redemption_item.png')} style={styles.champImg}></Image>
                        <Text style={styles.info}>Cura de Redenção: 1500 -> 1200</Text>
                        <Text style={styles.tema}>Mudanças em efeitos de Cura (Campeões)</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/SwainSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.info}>Cura de Chama Demoníaca de Swain: 50/90/130 -> 40/70/100</Text>
                        <Text style={styles.anotacoesTitulo}>Mudanças em efeitos de Cura (Etc)</Text>
                        <Text style={styles.info}>Redução de cura de Feridas Dolorosas: 100% -> 80%</Text>
                        <Text style={styles.anotacoesTitulo}>Correções de Bugs:</Text>
                        <Text style={styles.anotacoesText}>- Hextec: corrigido um problema que fazia com que o Gume do Infinito desativado perdesse mais Dano Crítico do que
                        deveria
                        </Text>
                        <Text style={styles.anotacoesText}>- Hextec: corrigido um problema que fazia com que a Centelha Iônica desativada não reativasse seus efeitos.</Text>
                        <Text style={styles.anotacoesText}>- Hextec: corrigido um problema que fazia com que o Arauto de Zeke desativado não reativasse seus efeitos.</Text>
                        <Text style={styles.anotacoesText}>- Hextec: corrigido um problema que fazia com que o Medalhão dos Solari de Ferro desativado não reativasse seus
                        efeitos.
                        </Text>
                        <Text style={styles.anotacoesText}>- Melhoramos a logística de habilidade da Shyvana. Agora ela procura locais para pular que sejam longe de seu
                        alvo.
                        </Text>
                        <Text style={styles.anotacoesText}>- Corrigido um problema que fazia com que Rek’Sai não arremessasse direito seu alvo a distâncias mais longas.</Text>
                        <Text style={styles.anotacoesText}>- Corrigido um problema que fazia com que Warwick criasse um novo Warwick caso morresse no meio de um salto.</Text>
                        <Text style={styles.anotacoesText}>- Corrigido um problema que fazia com que o Dano de Habilidade de Warwick escalasse com seu Dano de Ataque
                        adicional.
                        </Text>
                        <Text style={styles.anotacoesText}>- Ahri não vai mais conjurar sua habilidade em inimigos que não estejam dentro de seu alcance.</Text>
                        <Text style={styles.anotacoesText}>- Agora Lucian aciona corretamente efeitos acionados ao atacar (Faca de Statikk, Furacão de Runaan) no primeiro
                        ataque básico desferido após seu avanço.
                        </Text>
                        <Text style={styles.anotacoesText}>- Corrigido um problema que fazia com que Eco de Luden não fosse acionado caso o alvo da habilidade morresse.</Text>
                        <Text style={styles.anotacoesText}>- Corrigido um problema que fazia com que a ult de Vi acertasse o mesmo inimigo em sequência.</Text>
                        <Text style={styles.anotacoesText}>- Agora as Pequenas Lendas que entrarem na barreira inicial da Escolha Compartilhada antes de ela desaparecer
                        serão removidas.
                        </Text>
                        <Text style={styles.anotacoesTitulo}>Outros:</Text>
                        <Text style={styles.anotacoesText}>- Atualizamos os efeitos visuais das bolas de fogo do Dragão e do Dragão Ancião.</Text>
                        <Text style={styles.anotacoesText}>- Agora é possível silenciar emotes e pings dos jogadores através do placar.</Text>
                        <Text style={styles.anotacoesText}>- Adicionamos novos efeitos visuais para exibir seu combo de vitórias no placar.</Text>
                    </Quadrado>

                    <Quadrado>
                        <Text style={styles.semiTitulo}>9.16b (21/08/19)</Text>
                        <Text style={styles.tema}>Campeões</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/AatroxSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Aatrox:</Text>
                        <Text style={styles.info}>Dano da Habilidade: 250/600/950 -> 300/600/900</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/AniviaSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Anivia:</Text>
                        <Text style={styles.info}>Vida: 650 -> 700</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/Draven_GladiatorSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Draven:</Text>
                        <Text style={styles.info}>Vida: 700 -> 600</Text>
                        <Text style={styles.info}>Dano de Ataque: 75 -> 70</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/GnarSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Gnar:</Text>
                        <Text style={styles.info}>Dano de Ataque adicional ao se transformar: 30/60/90 -> 50/100/150</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/JinxSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Jinx:</Text>
                        <Text style={styles.info}>Velocidade de Ataque adicional da Habilidade: 0,75/1,0/1,25 -> 0,6/0,8/1,0</Text>
                        <Text style={styles.info}>Dano do míssil: 100/225/350 -> 100/200/300</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/KayleSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Kayle:</Text>
                        <Text style={styles.info}>Duração do escudo: 2/3/4 -> 2/2,5/3</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/LucianSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Lucian:</Text>
                        <Text style={styles.info}>Dano da Habilidade: 150/250/350 -> 100/225/350</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/Miss_Fortune_CaptainFortuneSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Miss Fortune:</Text>
                        <Text style={styles.info}>Dano da Habilidade: 800/1250/1700 -> 900/1300/1700</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/MorganaSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Morgana:</Text>
                        <Text style={styles.info}>Armadura: 20 -> 30</Text>
                        <Text style={styles.info}>Dano da Habilidade: 200/325/450 -> 175/300/425</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/ShenSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Shen:</Text>
                        <Text style={styles.info}>Vida: 650 -> 700</Text>
                        <Image source={require('./../../assets/img/Champs/Todos/ViSquare.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Vi:</Text>
                        <Text style={styles.info}>Mana: 50/125 -> 75/150</Text>
                        <Text style={styles.tema}>Itens</Text>
                        <Image source={require('./../../assets/img/Itens/Completo/Ludens_Echo_item.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Eco de Luden:</Text>
                        <Text style={styles.info}>Dano: 200 -> 180</Text>
                        <Text style={styles.tema}>Classes/Raças</Text>
                        <Image source={require('./../../assets/img/Champs/IconesClasse/Brawler_TFT_icon.png')} style={styles.champImg}></Image>
                        <Text style={styles.champText}>Lutadores:</Text>
                        <Text style={styles.info}>Vida adicional: 300/600/1000 -> 250/500/900</Text>
                        <Text style={styles.anotacoesTitulo}>Correções de Bugs:</Text>
                        <Text style={styles.anotacoesText}>- Mais ajustes no gerenciamento dentro do jogo para evitar que os jogadores enfrentem os mesmos oponentes
                        em sequência.
                        </Text>
                        <Text style={styles.anotacoesText}>- A característica Hextec agora desarma o item Centelha Iônica devidamente por 8s em vez de desarmar pela
                        rodada inteira.
                        </Text>
                    </Quadrado>
                </View>
            </ScrollView>
        </ImageBackground>)
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        padding: 10,
        marginTop: 20,
    },
    titulo: {
        color: 'white',
        fontSize: 34,
        textAlign: 'center',
    },
    champImg: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgb(255, 215, 0)',
    },
    champText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
    },
    semiTitulo: {
        color: 'white',
        fontSize: 26,
        textAlign: 'center',
        width: '100%',
        marginBottom: -15,
    },
    tema: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        width: '100%',
        marginTop: 15,
        marginBottom: -10,
    },
    info: {
        color: 'white',
        fontSize: 16,
        width: '100%',
    },
    anotacoesText: {
        color: 'white',
        fontSize: 16,
        width: '100%',
        textAlign: 'justify',
    },
    anotacoesTitulo: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        width: '100%',
        marginTop: 15,
    }
});