import Character from "../src/js/character";
import Battle from "../src/js/battle";

describe('Battle', () => {
  let battle;
  let playerOne;
  let enemyOne;

  beforeEach(() => {
    playerOne = new Character("Rock-y", "earth");
    enemyOne = new Character("Lava-Gurl", "fire");
    battle = new Battle(playerOne, enemyOne);
  });

  test('should correctly create a battle object', () => {
    expect(battle.player).toEqual(playerOne);
    expect(battle.enemy).toEqual(enemyOne);
  });
});