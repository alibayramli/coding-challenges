function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health >= 0 && fighter2.health >= 0) {
    if (firstAttacker === fighter1.name) {
      fighter2.health -= fighter1.damagePerAttack;
      firstAttacker = fighter2.name;
    } else if (firstAttacker === fighter2.name) {
      fighter1.health -= fighter2.damagePerAttack;
      firstAttacker = fighter1.name;
    }
  }
  return fighter1.health <= 0 ? fighter2.name : fighter1.name;
}
