# Progress notes

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Progress

### Pomodoro 1

- US1: board creation ✅
  - UAT1.1: board creation ✅
- US2: stepping on a bomb 🚧
  - UAT2.1: stepping on a bomb 🚧

### Pomodoro 2

- US2: stepping on a bomb ✅
  - UAT2.1: stepping on a bomb ✅
  - UAT2.2: stepping on one of multiple bombs ✅
- US3: marking square as bomb ✅
  - UAT3.1: marking square as bomb ✅
- US4: clearing non-bomb squares 🚧
  - UAT4.1: clearing squares with neighboring bombs 🚧

### Pomodoro 3

- US4: clearing non-bomb squares ✅
  - UAT4.1: clearing squares with neighboring bombs ✅
  - UAT4.2: clearing squares with marked neighboring bombs ✅
  - UAT4.3: clearing squares with 0 neighboring bombs ✅
- US5: revealing neighbors of squares with 0 neighbors 🚧
  - UAT5.1: all neighbors are revealed 🚧

### Pomodoro 4

- US5: revealing neighbors of squares with 0 neighbors ✅
  - UAT5.1: all neighbors are revealed ✅
  - UAT5.2: all neighbors are revealed recursively ✅
- US6: getting game state 🚧
  - UAT6.1: game state is in progress for new board ✅
  - UAT6.2: game state is lose after stepping on bomb ⚠
  - UAT6.1: game state is win after opening all non-bomb squares ⚠
  - UAT6.1: game state is in progress if no bomb steps occured and there are unrevealed squares ⚠
