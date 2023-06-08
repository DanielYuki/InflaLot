# *InflaLot - Rewarding the study of the market*

InflaLot is a dApp desenvolved on React that, inspired by the TruflationIndex, allows individuals to bet on the value of the dolar's inflation of the next month. If the bet is correct, the winner receives a price, based on the total acumulated (the sum of all the bets) in the month. This is possible thanks to the combination of a web platform, the ChainLink Oracle, the Truflation data and the infinite possibilities that Blockchain and Web3 have.

![alt](https://github.com/DanielYuki/InflaLot/assets/133140820/9731b6ea-30c8-4549-a457-b4f3c8d93f19)

# *ChainLink Spring 2023 Hackathon*

## *Our Team*

- Daniel Yuki Higa;
- Gabriel Souza Bonanni;
- Luiz Felipe de Brito Ramos;
- Pedro Henrique Colaris;
- Ângelo de Carvalho;

## *Used Tecnologies*

- Front-end : React.js;
- Smart Contracts : Solidity ^0.8.17;

## *Funcionality of InflaLot*

The smart contract securely reserves all the bets made by participants in the game. At a predetermined date, it retrieves the latest inflation data for the dollar and compares it with the inflation estimations provided by the players. The objective is to determine which player's estimation comes closest to the actual inflation rate.

The smart contract's evaluation takes into account not only the accuracy of the estimation but also the timing of the bet in relation to the import of the inflation data. This means that even if a player who placed their bet closer to the import date has a more accurate estimation, another player who bet earlier but still had a reasonably close estimation could still win the prize.For example, let's say one player placed their bet 20 days before the import, while another player made their bet just 1 day before the import. Although the latter player's estimation may be closer to the real dollar inflation rate, the player who bet 20 days in advance might still win the prize due to the consideration given to the timing factor.

This approach ensures fairness in the game and encourages players to make their estimations based on their understanding of economic trends and indicators, rather than solely relying on last-minute predictions. It adds an interesting dimension to the game, as players need to carefully analyze and predict inflation trends, while also strategizing their betting timing to increase their chances of winning.

Once the smart contract determines the player with the closest estimation, the prize is awarded accordingly. This incentivizes participants to stay informed about economic factors and make well-informed estimations, fostering engagement and enhancing the overall experience of the game.

By leveraging the capabilities of smart contracts and incorporating the concept of timing into the evaluation process, this betting system provides a unique and exciting way for players to test their economic knowledge and forecasting skills. It offers an engaging platform where participants can showcase their abilities and potentially win rewards based on their accuracy and strategic decision-making.

Overall, this innovative approach to betting on inflation not only adds an element of excitement to the game but also promotes financial literacy and encourages players to stay updated with real-world economic developments.

![alt](https://github.com/DanielYuki/InflaLot/assets/133140820/b32e3558-26f7-4729-a344-09f6b0b78e87)\