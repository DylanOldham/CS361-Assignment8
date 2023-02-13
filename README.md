# CS361-Assignment8
 
This microservice tracks the number of wins or losses for an arcade game. To run the microservice, use the command `node index.js`
 
Requesting Data:

There are 3 interactions that you can perform with the microservice. All of these interactions are performed by overwriting scores.txt with a command. The following commands exist:

`Start`: this will reset both the wins and losses to 0

`W1`: this will increment the number of wins

`L1`: this will increment the number of losses

After running any of these commands, scores.txt will be overwritten with the new state of the scores, formatted as:

`Wins: {numberOfWins} Losses: {numberOfLosses}`


where the expressions in curly braces are replaced by their respective numbers.

Receiving Data:

To receive data from the microservice, you simply read scores.txt after performing any of the interactions. This result will persist in scores.txt until another interaction is performed, and this will be up-to-date because only the interactions can change the scores.

