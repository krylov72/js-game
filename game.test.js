import { beforeEach } from "node:test";
import { Game } from "./game.js";

describe("game tests", () => {
  let game = new Game();

  it("gridSize should to be", () => {
    game.settings = {
      gridSize: {
        columns: 3,
        rows: 1,
      },
    };

    const settings = game.settings;

    expect(settings.gridSize.columns).toBe(3);
    expect(settings.gridSize.rows).toBe(1);
  });

  it("status should be changed", () => {
    expect(game.status).toBe("pending");
    game.start();
    expect(game.status).toBe("in-progress");
  });

  it("player 1 and player 2 should have positions", () => {
    expect(game.player1 && game.player2).not.toBeFalsy();
    game.start();
    expect(game.player1 && game.player2).toBeDefined();
    expect(game.player1.position.x).toBeGreaterThanOrEqual(0);
    expect(game.player1.position.x).toBeLessThanOrEqual(
      game.settings.gridSize.columns
    );
  });

  it("random position shoul be confirm", () => {
    for (let i = 0; i < 10000; i++) {
      game.start();
      expect({
        x: game.player1.position.x,
        y: game.player1.position.y,
      }).not.toEqual({
        x: game.player2.position.x,
        y: game.player2.position.y,
      });

      expect({
        x: game.player1.position.x,
        y: game.player1.position.y,
      }).not.toEqual({
        x: game.google.position.x,
        y: game.google.position.y,
      });

      expect({
        x: game.player2.position.x,
        y: game.player2.position.y,
      }).not.toEqual({
        x: game.google.position.x,
        y: game.google.position.y,
      });
    }
  });
});
