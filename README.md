# XP Farm Graduation - Minesweeper

[![build](https://github.com/fanatixan-xpfarm/yellow-graduation/actions/workflows/ci.yml/badge.svg)](https://github.com/fanatixan-xpfarm/yellow-graduation/actions/workflows/ci.yml)
![linter](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/fanatixan/c5ba284f879ad720d7282c71ff5af767/raw/linter.json)
[![sonar_coverage](https://sonarcloud.io/api/project_badges/measure?project=fanatixan-xpfarm_yellow-graduation&metric=coverage)](https://sonarcloud.io/dashboard?id=fanatixan-xpfarm_yellow-graduation)
[![sonar_bugs](https://sonarcloud.io/api/project_badges/measure?project=fanatixan-xpfarm_yellow-graduation&metric=bugs)](https://sonarcloud.io/dashboard?id=fanatixan-xpfarm_yellow-graduation)
[![sonar_code_smells](https://sonarcloud.io/api/project_badges/measure?project=fanatixan-xpfarm_yellow-graduation&metric=code_smells)](https://sonarcloud.io/dashboard?id=fanatixan-xpfarm_yellow-graduation)
![complexity](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/fanatixan/c5ba284f879ad720d7282c71ff5af767/raw/complexity.json)

## Game Rules

You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step
on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any
bombs) you win.

Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs.
If you guess a square contains a bomb mark it with a flag.

A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the
sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you
clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively.

The first square you open could be a bomb.

You don't have to mark all the bombs to win; you just need to open all non-bomb squares.

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

### US1 ✅

```
As a player,
I want to see an empty board after a new game,
so that I can start playing.
```

#### UAT1.1 ✅

```
  Given a new game
  When printing board
  Then the result should be an empty grid
```

### US2 ✅

```
As a player,
I want to know when I step on a bomb,
so that I can start a new game.
```

#### UAT2.1 ✅

```
  Given a bomb
  When stepping on it
  Then the board should contain a bomb sign on the square
```

#### UAT2.2 ✅

```
  Given multiple bombs
  When stepping on one
  Then the board should contain a bomb sign only on that square
```

### US3 ✅

```
As a player,
I want to mark a square as bomb,
so that I can prevent stepping on it.
```

#### UAT3.1 ✅

```
  Given a non-open square
  When marking it
  Then the board should contain a mark sign on the square
```

### US4 ✅

```
As a player,
I want to know the neighboring bomb count after stepping on a non-bomb square,
so that I can continue to clear the board.
```

#### UAT4.1 ✅

```
  Given a non-bomb square with adjacent bombs
  When stepping on it
  Then the board should contain the number of adjacent bombs on the square
```

#### UAT4.2 ✅

```
  Given a non-bomb square with adjacent marked bombs
  When stepping on it
  Then the board should contain the number of adjacent bombs on the square
```

#### UAT4.3 ✅

```
  Given a square without any adjacent bombs
  When stepping on it
  Then the board should contain an empty sign on the square
```

### US5 🚧

```
As a player,
I want the game to automatically reveal all adjacent squares when stepping on a square with 0 neighboring bombs,
so that I can continue to clear the board.
```

#### UAT5.1 ✅

```
  Given an empty square
  When stepping on it
  Then all neighbors should be revealed on the board
```

#### UAT5.2 ⚠

```
  Given an empty square with a neighboring to an empty square
  When stepping on it
  Then all neighboring squares should be revealed recursively on the board
```

### US6 ⚠

```
As a player,
I want to know the game state,
so that I can start a new game after it ended.
```

#### UAT6.1 ⚠

```
  Given a new game
  When checking game state
  Then the result should be 'IN_PROGRESS'
```

#### UAT6.2 ⚠

```
  Given a step on a bomb
  When checking game state
  Then the result should be 'LOSE'
```

#### UAT6.3 ⚠

```
  Given a game with all non-bomb squares opened
  When checking game state
  Then the result should be 'WIN'
```

#### UAT6.4 ⚠

```
  Given a game with no steps on bombs and non-cleared squares
  When checking game state
  Then the result should be 'IN_PROGRESS'
```
