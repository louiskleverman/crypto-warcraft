# Avoiding common attacks

## Implemented safeties

### Transaction-Ordering Dependence (TOD) 

With the help of the "Pausable.sol" library, updates to prices or transactions are only doable when the contract is paused, to avoid having a user pay more than what he thought.

### Integer overflows and underflows

#### Max level

the max level system is not only part of the game but also serves to not make the character level (that is a uint8) overflow by checking weather or not the character will exceed the max level, that will remain under 256.

### DoS with (Unexpected) revert

The contract handles this porblem by not using any ether transactions and use the token instead that doesn't need to worry about this problem.