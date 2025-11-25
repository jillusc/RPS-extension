declare const choices: readonly ["rock", "paper", "scissors"];
declare const maxScore = 5;
declare let playerScore: number;
declare let computerScore: number;
declare const playerChoiceImg: HTMLImageElement;
declare const computerChoiceImg: HTMLImageElement;
declare const scoresElement: HTMLElement;
declare const lossesElement: HTMLElement;
declare function runGame(playerChoice: string): void;
declare function showPlayerChoiceImage(playerChoice: string): void;
declare function getComputerChoice(): string;
declare function ascertainWinner(playerChoice: string, computerChoice: string): "player" | "tie" | "computer";
declare function incrementScores(winner: string): void;
declare function gameEnd(): void;
//# sourceMappingURL=popup.d.ts.map