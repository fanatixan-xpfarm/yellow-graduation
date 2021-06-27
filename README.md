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
